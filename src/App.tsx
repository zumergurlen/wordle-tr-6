import { useEffect, useMemo, useRef, useState } from "react";
import { RAW_WORDS } from "./words";
import {
  createRoom,
  hasRealtimeConfig,
  joinRoom,
  subscribePlayers,
  updatePlayerProgress,
  type RoomParticipant,
} from "./realtime";

const WORD_LENGTH_OPTIONS = [5, 6, 7, 8] as const;
const MAX_GUESSES = 6;

const WORDS_BY_LENGTH = RAW_WORDS.reduce<Record<number, string[]>>((acc, raw) => {
  const word = raw.toLocaleUpperCase("tr-TR");
  const len = [...word].length;
  if (!WORD_LENGTH_OPTIONS.includes(len as (typeof WORD_LENGTH_OPTIONS)[number])) {
    return acc;
  }
  acc[len] = acc[len] ?? [];
  if (!acc[len].includes(word)) acc[len].push(word);
  return acc;
}, {});

const TURKISH_KEYS = [
  ["E", "R", "T", "Y", "U", "I", "O", "P", "Ğ", "Ü"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ş", "İ"],
  ["ENTER", "Z", "C", "V", "B", "N", "M", "Ö", "Ç", "SİL"],
];

type LetterState = "correct" | "present" | "absent" | "unknown";
type Theme = "dark" | "light";
type ConfettiPiece = {
  id: number;
  left: number;
  color: string;
  size: number;
  delay: number;
  duration: number;
  rotate: number;
};
type RoomState = {
  code: string;
  uid: string;
  hostId: string;
  wordLength: number;
  targetWord: string;
};

type GameStats = {
  played: number;
  wins: number;
  currentStreak: number;
  bestStreak: number;
  distribution: number[];
};

const STATS_KEY = "wordle-tr6-stats";
const THEME_KEY = "wordle-tr6-theme";
const KB_SCALE_KEY = "wordle-tr6-keyboard-scale";
const KB_MIN = 1.0;
const KB_MAX = 1.9;
const KB_STEP = 0.08;
const KB_DEFAULT = 1.5;

const INITIAL_STATS: GameStats = {
  played: 0,
  wins: 0,
  currentStreak: 0,
  bestStreak: 0,
  distribution: Array(MAX_GUESSES).fill(0),
};

function getDailyWord(words: string[]) {
  if (!words.length) return "KELIME";
  const dayIndex = Math.floor(Date.now() / 86400000);
  return words[dayIndex % words.length];
}

function normalize(input: string) {
  return input.trim().toLocaleUpperCase("tr-TR");
}

function encodeWord(word: string) {
  const bytes = new TextEncoder().encode(word);
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary);
}

function decodeWord(encoded: string) {
  try {
    const binary = atob(encoded);
    const bytes = Uint8Array.from(binary, (ch) => ch.charCodeAt(0));
    return normalize(new TextDecoder().decode(bytes));
  } catch {
    return null;
  }
}

function evaluateGuess(guess: string, answer: string): LetterState[] {
  const result: LetterState[] = Array(answer.length).fill("absent");
  const answerLetters = answer.split("");
  const guessLetters = guess.split("");

  guessLetters.forEach((char, idx) => {
    if (answerLetters[idx] === char) {
      result[idx] = "correct";
      answerLetters[idx] = "_";
      guessLetters[idx] = "*";
    }
  });

  guessLetters.forEach((char, idx) => {
    if (char === "*") return;
    const answerPos = answerLetters.indexOf(char);
    if (answerPos !== -1) {
      result[idx] = "present";
      answerLetters[answerPos] = "_";
    }
  });

  return result;
}

export default function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem(THEME_KEY) as Theme | null;
    if (saved === "dark" || saved === "light") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  const [stats, setStats] = useState<GameStats>(() => {
    const saved = localStorage.getItem(STATS_KEY);
    if (!saved) return INITIAL_STATS;
    try {
      const parsed = JSON.parse(saved) as GameStats;
      return {
        ...INITIAL_STATS,
        ...parsed,
        distribution:
          parsed.distribution?.length === MAX_GUESSES
            ? parsed.distribution
            : INITIAL_STATS.distribution,
      };
    } catch {
      return INITIAL_STATS;
    }
  });
  const [keyboardScale, setKeyboardScale] = useState<number>(() => {
    const saved = localStorage.getItem(KB_SCALE_KEY);
    const numeric = saved ? Number(saved) : NaN;
    if (!Number.isNaN(numeric) && numeric >= KB_MIN && numeric <= KB_MAX) return numeric;
    return KB_DEFAULT;
  });

  const [statsOpen, setStatsOpen] = useState(false);
  const [challengeOpen, setChallengeOpen] = useState(false);
  const [loseModalOpen, setLoseModalOpen] = useState(false);
  const [confettiPieces, setConfettiPieces] = useState<ConfettiPiece[]>([]);
  const [loseImageHidden, setLoseImageHidden] = useState(false);
  const [playerName, setPlayerName] = useState("");
  const [roomCodeInput, setRoomCodeInput] = useState("");
  const [hostCustomWordEnabled, setHostCustomWordEnabled] = useState(false);
  const [hostCustomWord, setHostCustomWord] = useState("");
  const [room, setRoom] = useState<RoomState | null>(null);
  const [roomPlayers, setRoomPlayers] = useState<Array<{ id: string } & RoomParticipant>>([]);
  const realtimeEnabled = hasRealtimeConfig();
  const challengeWord = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    const encoded = params.get("challenge");
    if (!encoded) return null;
    const decoded = decodeWord(encoded);
    if (
      !decoded ||
      !WORD_LENGTH_OPTIONS.includes(decoded.length as (typeof WORD_LENGTH_OPTIONS)[number])
    ) {
      return null;
    }
    return decoded;
  }, []);

  const [wordLength, setWordLength] = useState<number>(challengeWord?.length ?? 5);
  const [hasStarted, setHasStarted] = useState<boolean>(Boolean(challengeWord));
  const dictionaryForLength = useMemo(
    () => WORDS_BY_LENGTH[wordLength] ?? WORDS_BY_LENGTH[6] ?? [],
    [wordLength],
  );
  const targetWord = room?.targetWord ?? challengeWord ?? getDailyWord(dictionaryForLength);
  const playableWords = useMemo(
    () => new Set([...(dictionaryForLength ?? []), targetWord]),
    [dictionaryForLength, targetWord],
  );

  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [message, setMessage] = useState(`${wordLength} harfli kelimeyi bul.`);
  const [customWord, setCustomWord] = useState("");
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [toastText, setToastText] = useState<string | null>(null);
  const [pressedKey, setPressedKey] = useState<string | null>(null);
  const resultSavedRef = useRef(false);
  const toastTimeoutRef = useRef<number | null>(null);
  const pressedKeyTimeoutRef = useRef<number | null>(null);

  const won = guesses.some((guess) => guess === targetWord);
  const lost = guesses.length >= MAX_GUESSES && !won;
  const finished = won || lost;

  useEffect(() => {
    setMessage(`${wordLength} harfli kelimeyi bul.`);
    setGuesses([]);
    setCurrentGuess("");
    setElapsedSeconds(0);
    setLoseModalOpen(false);
    setLoseImageHidden(false);
    setConfettiPieces([]);
    resultSavedRef.current = false;
  }, [wordLength, targetWord]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  }, [stats]);

  useEffect(() => {
    localStorage.setItem(KB_SCALE_KEY, keyboardScale.toFixed(2));
  }, [keyboardScale]);

  const board = useMemo(() => {
    const rows = [...guesses];
    if (!finished) rows.push(currentGuess);
    while (rows.length < MAX_GUESSES) rows.push("");
    return rows;
  }, [guesses, currentGuess, finished]);

  const keyStates = useMemo(() => {
    const map = new Map<string, LetterState>();
    guesses.forEach((guess) => {
      const states = evaluateGuess(guess, targetWord);
      guess.split("").forEach((char, idx) => {
        const next = states[idx];
        const prev = map.get(char) ?? "unknown";
        if (prev === "correct") return;
        if (prev === "present" && next === "absent") return;
        map.set(char, next);
      });
    });
    return map;
  }, [guesses, targetWord]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      const key = normalize(event.key);
      if (key === "ENTER") {
        submitGuess();
        return;
      }
      if (key === "BACKSPACE") {
        removeLetter();
        return;
      }
      if (/^[A-ZÇĞİÖŞÜI]$/u.test(key)) {
        addLetter(key);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  useEffect(() => {
    if (!finished || resultSavedRef.current) return;
    resultSavedRef.current = true;

    setStats((prev) => {
      const next: GameStats = {
        ...prev,
        played: prev.played + 1,
        distribution: [...prev.distribution],
      };
      if (won) {
        const attempt = guesses.length - 1;
        if (attempt >= 0 && attempt < MAX_GUESSES) {
          next.distribution[attempt] += 1;
        }
        next.wins += 1;
        next.currentStreak += 1;
        next.bestStreak = Math.max(next.bestStreak, next.currentStreak);
      } else {
        next.currentStreak = 0;
      }
      return next;
    });

    if (won) {
      const palette = ["#22c55e", "#06b6d4", "#facc15", "#a855f7", "#f43f5e", "#3b82f6"];
      const pieces = Array.from({ length: 72 }).map((_, idx) => ({
        id: idx,
        left: Math.random() * 100,
        color: palette[idx % palette.length],
        size: 6 + Math.random() * 8,
        delay: Math.random() * 0.4,
        duration: 1.8 + Math.random() * 1.4,
        rotate: Math.random() * 360,
      }));
      setConfettiPieces(pieces);
      window.setTimeout(() => setConfettiPieces([]), 3200);
      return;
    }

    if (lost) {
      setLoseModalOpen(true);
    }
  }, [finished, won, lost, guesses.length]);

  useEffect(() => {
    if (!hasStarted || finished) return;
    const timer = window.setInterval(() => {
      setElapsedSeconds((prev) => prev + 1);
    }, 1000);
    return () => window.clearInterval(timer);
  }, [hasStarted, finished]);

  useEffect(() => {
    return () => {
      if (toastTimeoutRef.current) {
        window.clearTimeout(toastTimeoutRef.current);
      }
      if (pressedKeyTimeoutRef.current) {
        window.clearTimeout(pressedKeyTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!room) return;
    return subscribePlayers(room.code, setRoomPlayers);
  }, [room]);

  useEffect(() => {
    if (!room || !hasStarted) return;
    updatePlayerProgress(room.code, room.uid, {
      attempts: guesses.length,
      solved: won,
      elapsedSeconds,
    }).catch(() => {
      // noop
    });
  }, [room, hasStarted, guesses.length, won, elapsedSeconds]);

  function addLetter(letter: string) {
    if (finished) return;
    if (currentGuess.length >= wordLength) return;
    setCurrentGuess((prev) => prev + letter);
  }

  function removeLetter() {
    if (finished) return;
    setCurrentGuess((prev) => prev.slice(0, -1));
  }

  function submitGuess() {
    if (finished) return;
    if (currentGuess.length !== wordLength) {
      setMessage(`Kelime ${wordLength} harfli olmalı.`);
      return;
    }
    const dynamicLetterRegex = new RegExp(`^[A-ZÇĞİIÖŞÜ]{${wordLength}}$`, "u");
    if (!dynamicLetterRegex.test(currentGuess)) {
      setMessage("Sadece harf kullanabilirsin.");
      return;
    }

    const nextGuesses = [...guesses, currentGuess];
    setGuesses(nextGuesses);
    setCurrentGuess("");

    if (currentGuess === targetWord) {
      setMessage("Tebrikler! Kelimeyi buldun.");
      return;
    }
    if (nextGuesses.length >= MAX_GUESSES) {
      setMessage(`Bilemedin. Kelime: ${targetWord}`);
      return;
    }
    if (!playableWords.has(currentGuess)) {
      setMessage("Kelime kabul edildi (geniş mod). Devam et.");
      return;
    }
    setMessage("Devam et, çok yakınsın.");
  }

  function handleVirtualKey(key: string) {
    if (key === "ENTER") {
      submitGuess();
      return;
    }
    if (key === "SİL") {
      removeLetter();
      return;
    }
    addLetter(key);
  }

  function showPressedKey(key: string) {
    if (pressedKeyTimeoutRef.current) {
      window.clearTimeout(pressedKeyTimeoutRef.current);
    }
    setPressedKey(key);
  }

  function clearPressedKey() {
    if (pressedKeyTimeoutRef.current) {
      window.clearTimeout(pressedKeyTimeoutRef.current);
    }
    pressedKeyTimeoutRef.current = window.setTimeout(() => {
      setPressedKey(null);
    }, 60);
  }

  function showToast(text: string) {
    setToastText(text);
    if (toastTimeoutRef.current) {
      window.clearTimeout(toastTimeoutRef.current);
    }
    toastTimeoutRef.current = window.setTimeout(() => {
      setToastText(null);
    }, 2000);
  }

  function shareResult() {
    const solvedAt = won ? guesses.findIndex((g) => g === targetWord) + 1 : null;
    const score = solvedAt ?? "X";
    const header = challengeWord
      ? `Kelime Oyunu Meydan ${wordLength}H ${score}/${MAX_GUESSES}`
      : `Kelime Oyunu Günlük ${wordLength}H ${score}/${MAX_GUESSES}`;
    const rows = guesses
      .map((guess) =>
        evaluateGuess(guess, targetWord)
          .map((state) =>
            state === "correct" ? "🟩" : state === "present" ? "🟨" : "⬛",
          )
          .join(""),
      )
      .join("\n");

    const guessesText = guesses.map((guess, idx) => `${idx + 1}. ${guess}`).join("\n");
    const detailLine = solvedAt
      ? `Deneme: ${solvedAt}/${MAX_GUESSES} | Süre: ${timerText}`
      : `Deneme: ${guesses.length}/${MAX_GUESSES} | Süre: ${timerText}`;
    const text = `${header}\n${detailLine}\n\nTahminler:\n${guessesText}\n\n${rows}\n${window.location.href}`;
    navigator.clipboard.writeText(text).then(() => {
      showToast("Sonuç panoya kopyalandı");
    });
  }

  function createChallengeLink() {
    const word = normalize(customWord);
    if (word.length !== wordLength) {
      setMessage(`${wordLength} harfli bir kelime gir.`);
      return;
    }
    const encoded = encodeWord(word);
    const url = `${window.location.origin}${window.location.pathname}?challenge=${encoded}`;
    navigator.clipboard.writeText(url).then(() => {
      showToast("Meydan okuma linki panoya kopyalandı");
      setChallengeOpen(false);
    });
  }

  function restartGame() {
    setGuesses([]);
    setCurrentGuess("");
    setElapsedSeconds(0);
    setLoseModalOpen(false);
    setConfettiPieces([]);
    resultSavedRef.current = false;
    setMessage(`Yeni oyun başladı. ${wordLength} harfli kelimeyi bul.`);
  }

  function changeWordLength(nextLen: number) {
    if (challengeWord || room) return;
    setWordLength(nextLen);
  }

  function growKeyboard() {
    setKeyboardScale((prev) => Math.min(KB_MAX, Number((prev + KB_STEP).toFixed(2))));
  }

  function shrinkKeyboard() {
    setKeyboardScale((prev) => Math.max(KB_MIN, Number((prev - KB_STEP).toFixed(2))));
  }

  function startGame() {
    setHasStarted(true);
    setGuesses([]);
    setCurrentGuess("");
    setElapsedSeconds(0);
    resultSavedRef.current = false;
    setMessage(`${wordLength} harfli kelimeyi bul.`);
  }

  async function handleCreateRoom() {
    if (!realtimeEnabled) {
      setMessage("Canlı oda için Firebase ayarları eksik.");
      return;
    }
    if (!playerName.trim()) {
      setMessage("Önce adını gir.");
      return;
    }
    const customWord = normalize(hostCustomWord);
    const adminWordRegex = new RegExp(`^[A-ZÇĞİIÖŞÜ]{${wordLength}}$`, "u");
    if (hostCustomWordEnabled) {
      if (customWord.length !== wordLength) {
        setMessage(`Admin kelimesi ${wordLength} harf olmalı.`);
        return;
      }
      if (!adminWordRegex.test(customWord)) {
        setMessage("Admin kelimesi sadece harf içermeli.");
        return;
      }
    }
    try {
      const roomWord = hostCustomWordEnabled ? customWord : targetWord;
      const created = await createRoom(wordLength, roomWord, playerName.trim());
      setRoom({
        code: created.code,
        uid: created.uid,
        hostId: created.hostId,
        wordLength,
        targetWord: roomWord,
      });
      setGuesses([]);
      setCurrentGuess("");
      setElapsedSeconds(0);
      setLoseModalOpen(false);
      setConfettiPieces([]);
      resultSavedRef.current = false;
      setRoomCodeInput(created.code);
      setHasStarted(true);
      setMessage(`Canlı oda açıldı: ${created.code}`);
    } catch {
      setMessage("Canlı oda oluşturulamadı.");
    }
  }

  async function handleJoinRoom() {
    if (!realtimeEnabled) {
      setMessage("Canlı oda için Firebase ayarları eksik.");
      return;
    }
    if (!playerName.trim()) {
      setMessage("Önce adını gir.");
      return;
    }
    const code = roomCodeInput.trim().toUpperCase();
    if (code.length < 4) {
      setMessage("Geçerli oda kodu gir.");
      return;
    }
    try {
      const joined = await joinRoom(code, playerName.trim());
      if (!joined) {
        setMessage("Oda bulunamadı.");
        return;
      }
      setRoom({
        code: joined.code,
        uid: joined.uid,
        hostId: joined.hostId,
        wordLength: joined.wordLength,
        targetWord: joined.targetWord,
      });
      setWordLength(joined.wordLength);
      setGuesses([]);
      setCurrentGuess("");
      setElapsedSeconds(0);
      setLoseModalOpen(false);
      setConfettiPieces([]);
      resultSavedRef.current = false;
      setHasStarted(true);
      setMessage(`Canlı odaya katıldın: ${joined.code}`);
    } catch {
      setMessage("Odaya katılınamadı.");
    }
  }

  function goBackHome() {
    if (challengeWord) {
      window.location.href = `${window.location.origin}${window.location.pathname}`;
      return;
    }
    setHasStarted(false);
    setChallengeOpen(false);
    setGuesses([]);
    setCurrentGuess("");
    setElapsedSeconds(0);
    setRoom(null);
    setRoomPlayers([]);
    setHostCustomWord("");
    setHostCustomWordEnabled(false);
    setLoseModalOpen(false);
    setConfettiPieces([]);
    resultSavedRef.current = false;
    setMessage(`${wordLength} harfli kelimeyi bul.`);
  }

  const timerText = `${String(Math.floor(elapsedSeconds / 60)).padStart(2, "0")}:${String(
    elapsedSeconds % 60,
  ).padStart(2, "0")}`;

  const winRate = stats.played ? Math.round((stats.wins / stats.played) * 100) : 0;

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col gap-4 bg-[hsl(var(--bg))] px-3 pb-[max(env(safe-area-inset-bottom),12px)] pt-4 text-[hsl(var(--text))] sm:px-4">
      {toastText && (
        <div className="pointer-events-none fixed left-1/2 top-1/2 z-40 -translate-x-1/2 -translate-y-1/2">
          <div className="rounded-2xl border border-white/35 bg-black/90 px-6 py-3 text-lg font-bold text-white shadow-2xl sm:text-2xl">
            {toastText}
          </div>
        </div>
      )}
      {confettiPieces.length > 0 && (
        <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden">
          {confettiPieces.map((piece) => (
            <span
              key={piece.id}
              className="confetti-piece"
              style={{
                left: `${piece.left}%`,
                width: `${piece.size}px`,
                height: `${piece.size * 1.6}px`,
                backgroundColor: piece.color,
                animationDelay: `${piece.delay}s`,
                animationDuration: `${piece.duration}s`,
                transform: `rotate(${piece.rotate}deg)`,
              }}
            />
          ))}
        </div>
      )}

      <header className="-mx-3 border-b border-[hsl(var(--stroke))] bg-[hsl(var(--surface))] px-3 py-3 sm:-mx-4 sm:px-4">
        <div className="mx-auto flex w-full max-w-md items-center justify-between gap-2">
          {hasStarted ? (
            <button
              type="button"
              onClick={goBackHome}
              className="rounded-lg border border-[hsl(var(--stroke))] bg-[hsl(var(--surface2))] px-3 py-2 text-xs font-semibold text-[hsl(var(--text))]"
            >
              ← Geri
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setStatsOpen(true)}
              className="rounded-lg border border-[hsl(var(--stroke))] bg-[hsl(var(--surface2))] px-3 py-2 text-xs font-semibold text-[hsl(var(--text))]"
            >
              İstatistik
            </button>
          )}
          <h1 className="flex items-center gap-2 text-xl font-bold text-[hsl(var(--text))] sm:text-2xl">
            <img src="/logo.svg" alt="Kelime Oyunu logosu" className="h-7 w-7 rounded-md" />
            KELİME OYUNU
            <img src="/logo.svg" alt="Kelime Oyunu logosu" className="h-7 w-7 rounded-md" />
          </h1>
          <button
            type="button"
            onClick={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
            className="rounded-lg border border-[hsl(var(--stroke))] bg-[hsl(var(--surface2))] px-3 py-2 text-xs font-semibold text-[hsl(var(--text))]"
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </div>
        <p className="mx-auto mt-1 w-full max-w-md text-center text-xs text-zinc-400">
          {room
            ? `Canlı Oda: ${room.code}`
            : challengeWord
              ? "Arkadaş meydan okuması"
              : "Günün Kelimesi Modu"}
        </p>
      </header>

      {!hasStarted && !challengeWord && (
        <>
          <section className="rounded-2xl border border-[hsl(var(--stroke))] bg-[hsl(var(--surface))] p-5 shadow-sm sm:p-6">
            <h2 className="mb-2 text-center text-xl font-bold sm:text-2xl">Oyun Ayarı</h2>
            <p className="mb-4 text-center text-sm text-[hsl(var(--muted))] sm:text-base">
              Harf sayısını seç, sonra oyuna başla!
            </p>
            <div className="mb-4 flex justify-center gap-2">
              {WORD_LENGTH_OPTIONS.map((len) => (
                <button
                  key={len}
                  type="button"
                  onClick={() => changeWordLength(len)}
                  className={`rounded-lg px-4 py-2 text-sm font-semibold sm:text-base ${
                    wordLength === len
                      ? "bg-cyan-700 text-white"
                      : "bg-[hsl(var(--surface2))] text-[hsl(var(--text))]"
                  }`}
                >
                  {len} Harf
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={startGame}
              className="w-full rounded-lg bg-emerald-600 px-4 py-3 text-base font-semibold text-white sm:py-4 sm:text-lg"
            >
              Günün Kelimesi
            </button>
            <button
              type="button"
              onClick={() => setChallengeOpen(true)}
              className="mt-3 w-full rounded-lg bg-cyan-700 px-4 py-3 text-base font-semibold text-white sm:py-4 sm:text-lg"
            >
              Arkadaşına Meydan Oku
            </button>
          </section>

          <section className="rounded-2xl border border-[hsl(var(--stroke))] bg-[hsl(var(--surface))] p-5 shadow-sm sm:p-6">
            <h3 className="mb-2 text-center text-lg font-bold sm:text-xl">Canlı Oda (2-10 Kişi)</h3>
            <p className="mb-3 text-center text-sm text-[hsl(var(--muted))]">
              Adını gir, oda oluştur veya kodla katıl.
            </p>
            <input
              value={playerName}
              onChange={(event) => setPlayerName(event.target.value)}
              placeholder="Adın"
              className="mb-2 w-full rounded-lg border border-[hsl(var(--stroke))] bg-[hsl(var(--surface2))] px-3 py-2 text-sm outline-none"
            />
            <label className="mb-2 flex items-center gap-2 text-xs text-[hsl(var(--muted))]">
              <input
                type="checkbox"
                checked={hostCustomWordEnabled}
                onChange={(event) => setHostCustomWordEnabled(event.target.checked)}
              />
              Kelimeyi sen belirle (Oda sahibi / Admin)
            </label>
            {hostCustomWordEnabled && (
              <input
                value={hostCustomWord}
                onChange={(event) => setHostCustomWord(event.target.value)}
                maxLength={wordLength}
                placeholder={`Admin kelimesi (${wordLength} harf)`}
                className="mb-2 w-full rounded-lg border border-[hsl(var(--stroke))] bg-[hsl(var(--surface2))] px-3 py-2 text-sm uppercase outline-none"
              />
            )}
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={handleCreateRoom}
                disabled={!playerName.trim()}
                className="rounded-lg bg-violet-600 px-3 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
              >
                Oda Oluştur
              </button>
              <button
                type="button"
                onClick={handleJoinRoom}
                disabled={!playerName.trim() || roomCodeInput.trim().length < 4}
                className="rounded-lg bg-sky-700 px-3 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
              >
                Odaya Katıl
              </button>
            </div>
            <input
              value={roomCodeInput}
              onChange={(event) => setRoomCodeInput(event.target.value.toUpperCase())}
              placeholder="Oda Kodu (ör. A1B2C3)"
              className="mt-2 w-full rounded-lg border border-[hsl(var(--stroke))] bg-[hsl(var(--surface2))] px-3 py-2 text-sm uppercase outline-none"
            />
            {!realtimeEnabled && (
              <p className="mt-2 text-xs text-amber-400">
                Firebase ENV tanımlanınca canlı oda aktif olur.
              </p>
            )}
          </section>
        </>
      )}

      {hasStarted && (
        <>
          <section className="rounded-xl border border-[hsl(var(--stroke))] bg-[hsl(var(--surface))] p-3 shadow-sm">
        <div className="mb-2 flex items-center justify-between">
          <span className="flex items-center gap-1 rounded-full border border-cyan-500/40 bg-cyan-950/60 px-3 py-1 text-xs font-semibold text-cyan-300">
            <span aria-hidden="true">⏳</span>
            {timerText}
          </span>
          <span className="text-center text-sm text-emerald-500">{message}</span>
          <span className="w-[62px]" />
        </div>
        <div className="grid grid-rows-6 gap-1.5 sm:gap-2">
          {board.map((row, rowIdx) => {
            const states =
              row.length === wordLength && rowIdx < guesses.length
                ? evaluateGuess(row, targetWord)
                : [];
            return (
              <div
                key={rowIdx}
                className="mx-auto grid w-full max-w-[320px] gap-1 sm:max-w-[360px] sm:gap-1.5"
                style={{ gridTemplateColumns: `repeat(${wordLength}, minmax(0, 1fr))` }}
              >
                {Array.from({ length: wordLength }).map((_, colIdx) => {
                  const letter = row[colIdx] ?? "";
                  const state = states[colIdx] ?? "unknown";
                  const color =
                    state === "correct"
                      ? "bg-green-600 border-green-500"
                      : state === "present"
                        ? "bg-yellow-600 border-yellow-500"
                        : state === "absent"
                          ? "bg-zinc-700 border-zinc-600"
                          : "border-[hsl(var(--stroke))] bg-[hsl(var(--surface2))]";
                  return (
                    <div
                      key={`${rowIdx}-${colIdx}`}
                      className={`flex aspect-square items-center justify-center rounded border text-base font-bold uppercase sm:text-xl ${color}`}
                    >
                      {letter}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </section>

      {room && (
        <section className="rounded-xl border border-[hsl(var(--stroke))] bg-[hsl(var(--surface))] p-3">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-sm font-bold">Canlı Oda: {room.code}</h3>
            <span className="text-xs text-[hsl(var(--muted))]">{roomPlayers.length} oyuncu</span>
          </div>
          <div className="space-y-1">
            {roomPlayers.map((p) => (
              <div
                key={p.id}
                className="flex items-center justify-between rounded bg-[hsl(var(--surface2))] px-2 py-1 text-xs"
              >
                <span>
                  {p.name || "Oyuncu"}
                  {p.id === room.hostId ? " (Admin)" : ""}
                </span>
                <span className="text-[hsl(var(--muted))]">
                  {p.solved
                    ? `${p.attempts}. Deneme • ${Math.floor(p.elapsedSeconds / 60)}:${String(
                        p.elapsedSeconds % 60,
                      ).padStart(2, "0")}`
                    : p.attempts >= MAX_GUESSES
                      ? `${MAX_GUESSES}. Deneme • Bilemedi`
                      : `${p.attempts}. Deneme • Çözmedi`}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="sticky bottom-[max(env(safe-area-inset-bottom),8px)] z-10 space-y-2 rounded-xl border border-[hsl(var(--stroke))] bg-[hsl(var(--surface))]/95 p-3 backdrop-blur">
        <div className="mb-1 flex items-center justify-between text-xs">
          <span className="text-[hsl(var(--muted))]">Klavye Boyutu</span>
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={shrinkKeyboard}
              className="rounded bg-[hsl(var(--surface2))] px-2 py-1 font-semibold"
            >
              -
            </button>
            <span className="w-10 text-center">{Math.round(keyboardScale * 100)}%</span>
            <button
              type="button"
              onClick={growKeyboard}
              className="rounded bg-[hsl(var(--surface2))] px-2 py-1 font-semibold"
            >
              +
            </button>
          </div>
        </div>
        {TURKISH_KEYS.map((row, idx) => (
          <div key={idx} className="flex w-full gap-1.5">
            {row.map((key) => {
              const state = keyStates.get(key) ?? "unknown";
              const isActionKey = key === "ENTER" || key === "SİL";
              const keyLabel = key === "ENTER" ? "⏎" : key;
              const scaleDelta = Math.max(0, keyboardScale - 1);
              const color =
                state === "correct"
                  ? "bg-green-600 text-white"
                  : state === "present"
                    ? "bg-yellow-600 text-white"
                    : state === "absent"
                      ? "bg-zinc-800 text-zinc-400"
                      : isActionKey
                        ? "bg-zinc-700 text-zinc-100"
                        : "bg-zinc-500 text-white";
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => handleVirtualKey(key)}
                  onMouseDown={() => showPressedKey(key)}
                  onMouseUp={clearPressedKey}
                  onMouseLeave={clearPressedKey}
                  onTouchStart={() => showPressedKey(key)}
                  onTouchEnd={clearPressedKey}
                  onTouchCancel={clearPressedKey}
                  style={{
                    minHeight: `${42 + scaleDelta * 8}px`,
                    flex: `${isActionKey ? 1.45 : 1} 1 0`,
                    fontSize: `${(isActionKey ? 10.5 : 13) + scaleDelta * 2}px`,
                    paddingInline: `${8 + scaleDelta * 8}px`,
                    paddingBlock: `${10 + scaleDelta * 2}px`,
                  }}
                  className={`relative min-w-0 rounded-xl border border-zinc-700/70 text-center font-semibold leading-tight whitespace-pre-line shadow-[0_2px_0_rgba(0,0,0,0.35)] transition duration-100 active:scale-95 active:brightness-90 ${color}`}
                >
                  {pressedKey === key && (
                    <span
                      className={`pointer-events-none absolute -top-12 left-1/2 z-20 flex h-11 min-w-[42px] -translate-x-1/2 items-center justify-center rounded-xl border px-2 text-lg font-bold shadow-xl ${
                        theme === "dark"
                          ? "border-zinc-500 bg-zinc-200 text-zinc-900"
                          : "border-zinc-400 bg-zinc-900 text-zinc-100"
                      }`}
                    >
                      {key === "ENTER" ? "⏎" : key}
                    </span>
                  )}
                  {keyLabel}
                </button>
              );
            })}
          </div>
        ))}
      </section>

      <section className="grid gap-2 rounded-xl border border-[hsl(var(--stroke))] bg-[hsl(var(--surface))] p-3">
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={shareResult}
            className="rounded bg-emerald-600 px-4 py-3 text-sm font-semibold text-white disabled:opacity-50"
            disabled={!finished}
          >
            Sonucu Paylaş
          </button>
          <button
            type="button"
            onClick={restartGame}
            className="rounded bg-indigo-600 px-4 py-3 text-sm font-semibold text-white"
          >
            Yeni Oyun
          </button>
        </div>
      </section>
        </>
      )}

      {statsOpen && (
        <div className="fixed inset-0 z-20 flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-sm rounded-xl border border-[hsl(var(--stroke))] bg-[hsl(var(--surface))] p-4">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-lg font-bold">İstatistikler</h2>
              <button
                type="button"
                onClick={() => setStatsOpen(false)}
                className="rounded bg-[hsl(var(--surface2))] px-3 py-1 text-sm"
              >
                Kapat
              </button>
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="rounded bg-[hsl(var(--surface2))] p-2">Oyun: {stats.played}</div>
              <div className="rounded bg-[hsl(var(--surface2))] p-2">Kazanma: %{winRate}</div>
              <div className="rounded bg-[hsl(var(--surface2))] p-2">Seri: {stats.currentStreak}</div>
              <div className="rounded bg-[hsl(var(--surface2))] p-2">En iyi: {stats.bestStreak}</div>
            </div>
            <div className="mt-3 space-y-1 text-xs">
              {stats.distribution.map((count, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="w-4">{idx + 1}</span>
                  <div className="h-4 flex-1 rounded bg-[hsl(var(--surface2))]">
                    <div
                      className="h-4 rounded bg-emerald-600"
                      style={{ width: `${Math.min(100, count * 15)}%` }}
                    />
                  </div>
                  <span className="w-6 text-right">{count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {challengeOpen && (
        <div className="fixed inset-0 z-20 flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-sm rounded-xl border border-[hsl(var(--stroke))] bg-[hsl(var(--surface))] p-4">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-lg font-bold">Arkadaşına Meydan Oku</h2>
              <button
                type="button"
                onClick={() => setChallengeOpen(false)}
                className="rounded bg-[hsl(var(--surface2))] px-3 py-1 text-sm"
              >
                Kapat
              </button>
            </div>
            <p className="mb-3 text-xs text-[hsl(var(--muted))]">
              {wordLength} harfli kelime gir. Link oluşunca arkadaşına gönder.
            </p>
            <div className="flex gap-2">
              <input
                value={customWord}
                onChange={(event) => setCustomWord(event.target.value)}
                maxLength={wordLength}
                placeholder={`${wordLength} harfli kelime`}
                className="w-full rounded border border-[hsl(var(--stroke))] bg-[hsl(var(--surface2))] px-3 py-2 text-sm outline-none"
              />
              <button
                type="button"
                onClick={createChallengeLink}
                className="rounded bg-cyan-700 px-4 py-2 text-sm font-semibold text-white"
              >
                Link Üret
              </button>
            </div>
          </div>
        </div>
      )}

      {loseModalOpen && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/70 p-4">
          <div className="w-full max-w-sm rounded-xl border border-[hsl(var(--stroke))] bg-[hsl(var(--surface))] p-4 text-center">
            <h2 className="mb-2 text-2xl font-extrabold text-rose-400">BİLEMEDİN!</h2>
            <p className="mb-3 text-sm text-[hsl(var(--muted))]">Kelime: {targetWord}</p>
            {!loseImageHidden && (
              <img
                src="/bilemedin.png"
                alt="Bilemedin"
                onError={() => setLoseImageHidden(true)}
                className="mx-auto mb-3 max-h-56 w-auto rounded-lg border border-[hsl(var(--stroke))]"
              />
            )}
            <button
              type="button"
              onClick={() => setLoseModalOpen(false)}
              className="rounded bg-indigo-600 px-4 py-2 text-sm font-semibold text-white"
            >
              Tamam
            </button>
          </div>
        </div>
      )}

      <footer className="pb-2 text-center text-[11px] text-zinc-500">
        <p>Bağımsız Kelime Oyunu</p>
        <p className="text-[10px] opacity-90">Contact: zumerrgurlenn@gmail.com</p>
      </footer>
    </main>
  );
}
