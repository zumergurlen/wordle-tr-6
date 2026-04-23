import { useEffect, useMemo, useRef, useState } from "react";
import { RAW_WORDS } from "./words";

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
const KB_DEFAULT = 1.3;

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

  const [wordLength, setWordLength] = useState<number>(challengeWord?.length ?? 6);
  const [hasStarted, setHasStarted] = useState<boolean>(Boolean(challengeWord));
  const dictionaryForLength = useMemo(
    () => WORDS_BY_LENGTH[wordLength] ?? WORDS_BY_LENGTH[6] ?? [],
    [wordLength],
  );
  const targetWord = challengeWord ?? getDailyWord(dictionaryForLength);
  const playableWords = useMemo(
    () => new Set([...(dictionaryForLength ?? []), targetWord]),
    [dictionaryForLength, targetWord],
  );

  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [message, setMessage] = useState(`${wordLength} harfli kelimeyi bul.`);
  const [customWord, setCustomWord] = useState("");
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const resultSavedRef = useRef(false);

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
      setMessage("Sonuç panoya kopyalandı.");
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
      setMessage("Meydan okuma linki panoya kopyalandı.");
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
    setMessage(`Yeni oyun basladi. ${wordLength} harfli kelimeyi bul.`);
  }

  function changeWordLength(nextLen: number) {
    if (challengeWord) return;
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

      <header className="-mx-3 bg-black px-3 py-3 sm:-mx-4 sm:px-4">
        <div className="mx-auto flex w-full max-w-md items-center justify-between gap-2">
          {hasStarted ? (
            <button
              type="button"
              onClick={goBackHome}
              className="rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-xs font-semibold text-zinc-100"
            >
              ← Geri
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setStatsOpen(true)}
              className="rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-xs font-semibold text-zinc-100"
            >
              İstatistik
            </button>
          )}
          <h1 className="flex items-center gap-2 text-xl font-bold sm:text-2xl">
            <img src="/logo.svg" alt="Kelime Oyunu logosu" className="h-7 w-7 rounded-md" />
            KELİME OYUNU
          </h1>
          <button
            type="button"
            onClick={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
            className="rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-xs font-semibold text-zinc-100"
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </div>
        <p className="mx-auto mt-1 w-full max-w-md text-center text-xs text-zinc-400">
          {challengeWord ? "Arkadaş meydan okuması" : "Günün kelimesi modu"}
        </p>
      </header>

      {!hasStarted && !challengeWord && (
        <section className="rounded-2xl border border-[hsl(var(--stroke))] bg-[hsl(var(--surface))] p-5 shadow-sm sm:p-6">
          <h2 className="mb-2 text-center text-xl font-bold sm:text-2xl">Oyun Ayarı</h2>
          <p className="mb-4 text-center text-sm text-[hsl(var(--muted))] sm:text-base">
            Harf sayısını seç, sonra oyuna başla.
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
      )}

      {hasStarted && (
        <>
          <section className="rounded-xl border border-[hsl(var(--stroke))] bg-[hsl(var(--surface))] p-3 shadow-sm">
        <div className="mb-2 flex items-center justify-between">
          <span className="rounded-full border border-cyan-500/40 bg-cyan-950/60 px-3 py-1 text-xs font-semibold text-cyan-300">
            {timerText}
          </span>
          <span className="text-center text-sm text-emerald-500">{message}</span>
          <span className="w-[62px]" />
        </div>
        <div className="grid grid-rows-6 gap-2">
          {board.map((row, rowIdx) => {
            const states =
              row.length === wordLength && rowIdx < guesses.length
                ? evaluateGuess(row, targetWord)
                : [];
            return (
              <div
                key={rowIdx}
                className="grid gap-1.5"
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
                      className={`flex aspect-square items-center justify-center rounded border text-lg font-bold uppercase sm:text-xl ${color}`}
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

      <section className="sticky bottom-0 z-10 space-y-2 rounded-xl border border-[hsl(var(--stroke))] bg-[hsl(var(--surface))]/95 p-3 backdrop-blur">
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
          <div key={idx} className="flex justify-center gap-1">
            {row.map((key) => {
              const state = keyStates.get(key) ?? "unknown";
              const color =
                state === "correct"
                  ? "bg-green-600 text-white"
                  : state === "present"
                    ? "bg-yellow-600 text-white"
                    : state === "absent"
                      ? "bg-zinc-800 text-zinc-400"
                      : "bg-zinc-500 text-white";
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => handleVirtualKey(key)}
                  style={{
                    minHeight: `${48 * keyboardScale}px`,
                    minWidth: `${(key === "ENTER" || key === "SİL" ? 62 : 32) * keyboardScale}px`,
                    fontSize: `${13 * keyboardScale}px`,
                    paddingInline: `${9 * keyboardScale}px`,
                    paddingBlock: `${10 * keyboardScale}px`,
                  }}
                  className={`rounded font-semibold active:scale-95 ${color}`}
                >
                  {key}
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
    </main>
  );
}
