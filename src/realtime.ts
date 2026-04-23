import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth";
import {
  get,
  getDatabase,
  off,
  onValue,
  ref,
  serverTimestamp,
  set,
  update,
} from "firebase/database";

export type RoomParticipant = {
  name: string;
  attempts: number;
  solved: boolean;
  elapsedSeconds: number;
  updatedAt?: number;
};

export type RoomSnapshot = {
  code: string;
  wordLength: number;
  targetWord: string;
  hostId?: string;
};

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const isConfigured = Object.values(firebaseConfig).every(Boolean);

let db: ReturnType<typeof getDatabase> | null = null;
let auth: ReturnType<typeof getAuth> | null = null;

function ensureFirebase() {
  if (!isConfigured) {
    throw new Error("Firebase yapılandırması eksik.");
  }
  if (!db || !auth) {
    const app = initializeApp(firebaseConfig);
    db = getDatabase(app);
    auth = getAuth(app);
  }
  return { db, auth };
}

async function ensureAnonAuth() {
  const { auth } = ensureFirebase();
  if (!auth.currentUser) {
    await signInAnonymously(auth);
  }
  return auth.currentUser!.uid;
}

function randomCode() {
  return Math.random().toString(36).slice(2, 8).toUpperCase();
}

export function hasRealtimeConfig() {
  return isConfigured;
}

export async function createRoom(
  wordLength: number,
  targetWord: string,
  playerName: string,
) {
  const uid = await ensureAnonAuth();
  const { db } = ensureFirebase();
  let code = randomCode();

  for (let i = 0; i < 3; i += 1) {
    const roomRef = ref(db, `rooms/${code}`);
    const existing = await get(roomRef);
    if (!existing.exists()) break;
    code = randomCode();
  }

  await set(ref(db, `rooms/${code}`), {
    createdAt: serverTimestamp(),
    wordLength,
    targetWord,
    hostId: uid,
  });

  await set(ref(db, `rooms/${code}/players/${uid}`), {
    name: playerName,
    attempts: 0,
    solved: false,
    elapsedSeconds: 0,
    updatedAt: Date.now(),
  });

  return { code, uid, hostId: uid };
}

export async function joinRoom(code: string, playerName: string) {
  const uid = await ensureAnonAuth();
  const { db } = ensureFirebase();
  const roomRef = ref(db, `rooms/${code}`);
  const snap = await get(roomRef);
  if (!snap.exists()) return null;

  const data = snap.val() as RoomSnapshot & { players?: Record<string, RoomParticipant> };

  await update(ref(db, `rooms/${code}/players/${uid}`), {
    name: playerName,
    attempts: data.players?.[uid]?.attempts ?? 0,
    solved: data.players?.[uid]?.solved ?? false,
    elapsedSeconds: data.players?.[uid]?.elapsedSeconds ?? 0,
    updatedAt: Date.now(),
  });

  return {
    code,
    uid,
    hostId: data.hostId ?? uid,
    wordLength: data.wordLength,
    targetWord: data.targetWord,
  };
}

export function subscribePlayers(
  code: string,
  onChange: (players: Array<{ id: string } & RoomParticipant>) => void,
) {
  const { db } = ensureFirebase();
  const playersRef = ref(db, `rooms/${code}/players`);
  const handler = onValue(playersRef, (snap) => {
    const value = snap.val() ?? {};
    const list = Object.entries(value).map(([id, payload]) => ({
      id,
      ...(payload as RoomParticipant),
    }));
    list.sort((a, b) => {
      if (a.solved !== b.solved) return a.solved ? -1 : 1;
      if (a.attempts !== b.attempts) return a.attempts - b.attempts;
      return a.elapsedSeconds - b.elapsedSeconds;
    });
    onChange(list);
  });
  return () => off(playersRef, "value", handler);
}

export async function updatePlayerProgress(
  code: string,
  uid: string,
  payload: Pick<RoomParticipant, "attempts" | "solved" | "elapsedSeconds">,
) {
  const { db } = ensureFirebase();
  await update(ref(db, `rooms/${code}/players/${uid}`), {
    ...payload,
    updatedAt: Date.now(),
  });
}

