import { useEffect, useMemo, useState } from "react";

const WORD_LENGTH = 6;
const MAX_GUESSES = 6;

const DICTIONARY = Array.from(
  new Set(
    [
      "ankara",
      "bardak",
      "defter",
      "balkon",
      "kartal",
      "kasaba",
      "mevsim",
      "kumsal",
      "orman",
      "yıldız",
      "zeytin",
      "toprak",
      "meydan",
      "oyuncu",
      "başarı",
      "sevinç",
      "renkli",
      "yazlık",
      "saatçi",
      "vitrin",
      "mutfak",
      "günlük",
      "kuşluk",
      "deniz",
      "ulaşım",
      "koltuk",
      "parlak",
      "dolap",
      "gömlek",
      "yastık",
      "adana",
      "akbaba",
      "altlık",
      "ananas",
      "anıtlar",
      "aralık",
      "bahane",
      "bakkal",
      "balina",
      "bavul",
      "bebek",
      "beyaz",
      "bilet",
      "ceviz",
      "damla",
      "derman",
      "dostça",
      "elbise",
      "fındık",
      "fırın",
      "futbol",
      "gazete",
      "görsel",
      "halıcı",
      "hamur",
      "hatıra",
      "hediye",
      "incir",
      "kadife",
      "kalem",
      "kamera",
      "karpız",
      "kiraz",
      "kitap",
      "kömür",
      "köpek",
      "limon",
      "makara",
      "market",
      "masal",
      "memnun",
      "morluk",
      "nohut",
      "oda",
      "orkide",
      "otobüs",
      "panjur",
      "patika",
      "peynir",
      "piknik",
      "resim",
      "rüzgar",
      "salata",
      "sandal",
      "saray",
      "sepet",
      "sokak",
      "soyad",
      "sucuk",
      "sürahi",
      "taksit",
      "tarife",
      "tatil",
      "tombul",
      "trafik",
      "uçurum",
      "ulusal",
      "umutlu",
      "vapur",
      "yaprak",
      "yorgan",
      "zafer",
      "zaman",
      "zekalı",
      "zincir",
    ]
      .map((word) => word.toLocaleUpperCase("tr-TR"))
      .filter((word) => [...word].length === WORD_LENGTH),
  ),
);

const TURKISH_KEYS = [
  ["E", "R", "T", "Y", "U", "I", "O", "P", "Ğ", "Ü"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ş", "İ"],
  ["ENTER", "Z", "C", "V", "B", "N", "M", "Ö", "Ç", "SİL"],
];

type LetterState = "correct" | "present" | "absent" | "unknown";

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

  const won = guesses.some((guess) => guess === targetWord);
  const lost = guesses.length >= MAX_GUESSES && !won;
  const finished = won || lost;

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
    if (!playableWords.has(currentGuess)) {
      setMessage("Bu kelime sözlükte yok.");
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
    navigator.clipboard.writeText(text);
    setMessage("Sonuç panoya kopyalandı.");
  }

  function createChallengeLink() {
    const word = normalize(customWord);
    if (word.length !== WORD_LENGTH) {
      setMessage(`${WORD_LENGTH} harfli bir kelime gir.`);
      return;
    }
    const encoded = encodeWord(word);
    const url = `${window.location.origin}${window.location.pathname}?challenge=${encoded}`;
    navigator.clipboard.writeText(url);
    setMessage("Meydan okuma linki panoya kopyalandı.");
  }

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-6 p-4 text-white">
      <header className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">WORDLE TR - 6 HARF</h1>
        <p className="text-sm text-gray-300">
          {challengeWord ? "Arkadaş meydan okuması" : "Günün kelimesi modu"}
        </p>
      </header>

      <section className="rounded-xl border border-zinc-700 bg-zinc-900/80 p-4">
        <p className="mb-3 text-sm text-emerald-300">{message}</p>
        <div className="grid grid-rows-6 gap-2">
          {board.map((row, rowIdx) => {
            const states =
              row.length === WORD_LENGTH && rowIdx < guesses.length
                ? evaluateGuess(row, targetWord)
                : [];
            return (
              <div key={rowIdx} className="grid grid-cols-6 gap-2">
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
                          : "bg-zinc-900 border-zinc-600";
                  return (
                    <div
                      key={`${rowIdx}-${colIdx}`}
                      className={`flex h-12 items-center justify-center rounded border text-xl font-bold ${color}`}
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

      <section className="space-y-2 rounded-xl border border-zinc-700 bg-zinc-900/80 p-4">
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
                      ? "bg-zinc-700"
                      : "bg-zinc-800";
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => handleVirtualKey(key)}
                  className={`rounded px-2 py-3 text-xs font-semibold ${color}`}
                >
                  {key}
                </button>
              );
            })}
          </div>
        ))}
      </section>

      <section className="grid gap-3 rounded-xl border border-zinc-700 bg-zinc-900/80 p-4 md:grid-cols-2">
        <button
          type="button"
          onClick={shareResult}
          className="rounded bg-emerald-600 px-4 py-3 font-semibold disabled:opacity-50"
          disabled={!finished}
        >
          Sonucu Paylaş
        </button>
        <div className="flex gap-2">
          <input
            value={customWord}
            onChange={(event) => setCustomWord(event.target.value)}
            maxLength={WORD_LENGTH}
            placeholder="6 harfli kelime"
            className="w-full rounded border border-zinc-600 bg-zinc-800 px-3 py-2 outline-none"
          />
          <button
            type="button"
            onClick={createChallengeLink}
            className="rounded bg-indigo-600 px-4 py-2 font-semibold"
          >
            Link Üret
          </button>
        </div>
      </section>
    </main>
  );
}
