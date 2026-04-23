import { useEffect, useMemo, useRef, useState } from "react";
import { RAW_WORDS } from "./words";

const WORD_LENGTH = 6;
const MAX_GUESSES = 6;

const DICTIONARY = Array.from(
  new Set(
    RAW_WORDS.map((word) => word.toLocaleUpperCase("tr-TR")).filter(
      (word) => [...word].length === WORD_LENGTH,
    ),
  ),
);

const TURKISH_KEYS = [
  ["E", "R", "T", "Y", "U", "I", "O", "P", "Ğ", "Ü"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ş", "İ"],
  ["ENTER", "Z", "C", "V", "B", "N", "M", "Ö", "Ç", "SİL"],
];

type LetterState = "correct" | "present" | "absent" | "unknown";
type Theme = "dark" | "light";

type GameStats = {
  played: number;
  wins: number;
  currentStreak: number;
  bestStreak: number;
  distribution: number[];
};

const STATS_KEY = "wordle-tr6-stats";
const THEME_KEY = "wordle-tr6-theme";

const INITIAL_STATS: GameStats = {
  played: 0,
  wins: 0,
  currentStreak: 0,
  bestStreak: 0,
  distribution: Array(MAX_GUESSES).fill(0),
};

function getDailyWord(words: string[]) {
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
  const result: LetterState[] = Array(WORD_LENGTH).fill("absent");
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

  const [statsOpen, setStatsOpen] = useState(false);
  const challengeWord = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    const encoded = params.get("challenge");
    if (!encoded) return null;
    const decoded = decodeWord(encoded);
    if (!decoded || decoded.length !== WORD_LENGTH) return null;
    return decoded;
  }, []);

  const targetWord = challengeWord ?? getDailyWord(DICTIONARY);
  const playableWords = useMemo(
    () => new Set([...DICTIONARY, targetWord]),
    [targetWord],
  );

  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [message, setMessage] = useState("6 harfli kelimeyi bul.");
  const [customWord, setCustomWord] = useState("");
  const resultSavedRef = useRef(false);

  const won = guesses.some((guess) => guess === targetWord);
  const lost = guesses.length >= MAX_GUESSES && !won;
  const finished = won || lost;

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  }, [stats]);

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
  }, [finished, won, guesses.length]);

  function addLetter(letter: string) {
    if (finished) return;
    if (currentGuess.length >= WORD_LENGTH) return;
    setCurrentGuess((prev) => prev + letter);
  }

  function removeLetter() {
    if (finished) return;
    setCurrentGuess((prev) => prev.slice(0, -1));
  }

  function submitGuess() {
    if (finished) return;
    if (currentGuess.length !== WORD_LENGTH) {
      setMessage(`Kelime ${WORD_LENGTH} harfli olmalı.`);
      return;
    }
    if (!/^[A-ZÇĞİIÖŞÜ]{6}$/u.test(currentGuess)) {
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
    const score = won ? guesses.findIndex((g) => g === targetWord) + 1 : "X";
    const header = challengeWord
      ? `WordleTR Meydan ${score}/${MAX_GUESSES}`
      : `WordleTR Günlük ${score}/${MAX_GUESSES}`;
    const rows = guesses
      .map((guess) =>
        evaluateGuess(guess, targetWord)
          .map((state) =>
            state === "correct" ? "🟩" : state === "present" ? "🟨" : "⬛",
          )
          .join(""),
      )
      .join("\n");

    const text = `${header}\n${rows}\n${window.location.href}`;
    navigator.clipboard.writeText(text).then(() => {
      setMessage("Sonuç panoya kopyalandı.");
    });
  }

  function createChallengeLink() {
    const word = normalize(customWord);
    if (word.length !== WORD_LENGTH) {
      setMessage(`${WORD_LENGTH} harfli bir kelime gir.`);
      return;
    }
    const encoded = encodeWord(word);
    const url = `${window.location.origin}${window.location.pathname}?challenge=${encoded}`;
    navigator.clipboard.writeText(url).then(() => {
      setMessage("Meydan okuma linki panoya kopyalandı.");
    });
  }

  function restartGame() {
    setGuesses([]);
    setCurrentGuess("");
    resultSavedRef.current = false;
    setMessage("Yeni oyun basladi. 6 harfli kelimeyi bul.");
  }

  const winRate = stats.played ? Math.round((stats.wins / stats.played) * 100) : 0;

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col gap-4 bg-[hsl(var(--bg))] px-3 pb-[max(env(safe-area-inset-bottom),12px)] pt-4 text-[hsl(var(--text))] sm:px-4">
      <header className="space-y-2 text-center">
        <div className="flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={() => setStatsOpen(true)}
            className="rounded-lg border border-[hsl(var(--stroke))] bg-[hsl(var(--surface))] px-3 py-2 text-xs font-semibold"
          >
            Istatistik
          </button>
          <h1 className="text-xl font-bold sm:text-2xl">WORDLE TR - 6 HARF</h1>
          <button
            type="button"
            onClick={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
            className="rounded-lg border border-[hsl(var(--stroke))] bg-[hsl(var(--surface))] px-3 py-2 text-xs font-semibold"
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </div>
        <p className="text-xs text-[hsl(var(--muted))]">
          {challengeWord ? "Arkadaş meydan okuması" : "Günün kelimesi modu"}
        </p>
      </header>

      <section className="rounded-xl border border-[hsl(var(--stroke))] bg-[hsl(var(--surface))] p-3 shadow-sm">
        <p className="mb-2 text-center text-sm text-emerald-500">{message}</p>
        <div className="grid grid-rows-6 gap-2">
          {board.map((row, rowIdx) => {
            const states =
              row.length === WORD_LENGTH && rowIdx < guesses.length
                ? evaluateGuess(row, targetWord)
                : [];
            return (
              <div key={rowIdx} className="grid grid-cols-6 gap-1.5">
                {Array.from({ length: WORD_LENGTH }).map((_, colIdx) => {
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
        {TURKISH_KEYS.map((row, idx) => (
          <div key={idx} className="flex justify-center gap-1">
            {row.map((key) => {
              const state = keyStates.get(key) ?? "unknown";
              const color =
                state === "correct"
                  ? "bg-green-600"
                  : state === "present"
                    ? "bg-yellow-600"
                    : state === "absent"
                      ? "bg-zinc-600"
                      : "bg-[hsl(var(--surface2))]";
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => handleVirtualKey(key)}
                  className={`min-h-11 rounded px-2 py-3 text-xs font-semibold active:scale-95 ${key === "ENTER" || key === "SİL" ? "min-w-14" : "min-w-7"} ${color}`}
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
        <div className="flex gap-2">
          <input
            value={customWord}
            onChange={(event) => setCustomWord(event.target.value)}
            maxLength={WORD_LENGTH}
            placeholder="6 harfli kelime"
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
      </section>

      {statsOpen && (
        <div className="fixed inset-0 z-20 flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-sm rounded-xl border border-[hsl(var(--stroke))] bg-[hsl(var(--surface))] p-4">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-lg font-bold">Istatistikler</h2>
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
    </main>
  );
}
