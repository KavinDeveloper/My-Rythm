import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCK9oOo2d9y-8fotWXmr-jkplLK5e1sI74",
  authDomain: "my-rythm-c0dfa.firebaseapp.com",
  projectId: "my-rythm-c0dfa",
  storageBucket: "my-rythm-c0dfa.firebasestorage.app",
  messagingSenderId: "78731741204",
  appId: "1:78731741204:web:d91651a0e12b74a4963f01",
  measurementId: "G-MBNL6GMP2F"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const syncButton = document.querySelector("#cloudSync");
const syncIcon = document.querySelector("#cloudSyncIcon");
const syncLabel = document.querySelector("#cloudSyncLabel");
let currentUser = null;
let syncTimer = null;
let applyingRemote = false;

const syncedPrefixes = [
  "weekend-plan-",
  "my-rhythm-completed-"
];
const syncedKeys = [
  "my-rhythm-music-volume",
  "my-rhythm-rescue-plan"
];

function setSyncStatus(label, connected = false, icon = connected ? "✓" : "☁") {
  syncLabel.textContent = label;
  syncIcon.textContent = icon;
  syncButton.classList.toggle("connected", connected);
}

function collectSyncedState() {
  const state = {};
  for (let index = 0; index < localStorage.length; index += 1) {
    const key = localStorage.key(index);
    if (key && (syncedKeys.includes(key) || syncedPrefixes.some((prefix) => key.startsWith(prefix)))) {
      state[key] = localStorage.getItem(key) ?? "";
    }
  }
  return state;
}

function mergeSyncedState(localState, cloudState) {
  const merged = { ...localState };
  for (const [key, cloudValue] of Object.entries(cloudState || {})) {
    if (key.startsWith("weekend-plan-") || key.startsWith("my-rhythm-completed-")) {
      if (localState[key] === "done" || cloudValue === "done") merged[key] = "done";
      else merged[key] = cloudValue || "";
    } else if (!(key in localState) || localState[key] === "") {
      merged[key] = cloudValue;
    }
  }
  return merged;
}

async function saveCloudState() {
  if (!currentUser) return;
  try {
    setSyncStatus("Saving...", true, "↻");
    await setDoc(doc(db, "rhythmUsers", currentUser.uid), {
      state: collectSyncedState(),
      updatedAt: serverTimestamp()
    }, { merge: true });
    setSyncStatus("Synced", true, "✓");
  } catch (error) {
    console.error("Cloud sync failed:", error);
    setSyncStatus("Sync failed", false, "!");
  }
}

function scheduleCloudSave() {
  if (!currentUser) return;
  window.clearTimeout(syncTimer);
  syncTimer = window.setTimeout(saveCloudState, 700);
}

async function restoreCloudState() {
  if (!currentUser) return;
  try {
    setSyncStatus("Loading...", true, "↻");
    const snapshot = await getDoc(doc(db, "rhythmUsers", currentUser.uid));
    const cloudState = snapshot.exists() ? snapshot.data().state || {} : {};
    const merged = mergeSyncedState(collectSyncedState(), cloudState);

    applyingRemote = true;
    for (const [key, value] of Object.entries(merged)) {
      if (localStorage.getItem(key) !== value) localStorage.setItem(key, value);
    }
    applyingRemote = false;

    window.dispatchEvent(new CustomEvent("my-rhythm-cloud-restored"));
    await saveCloudState();
  } catch (error) {
    console.error("Cloud restore failed:", error);
    setSyncStatus("Sync failed", false, "!");
  }
}

syncButton.addEventListener("click", async () => {
  if (currentUser) {
    await saveCloudState();
    return;
  }
  try {
    setSyncStatus("Opening sign-in...", false, "↻");
    await signInWithPopup(auth, new GoogleAuthProvider());
  } catch (error) {
    console.error("Google sign-in failed:", error);
    setSyncStatus("Sign-in failed", false, "!");
  }
});

onAuthStateChanged(auth, async (user) => {
  currentUser = user;
  if (!user) {
    setSyncStatus("Sign in to sync", false);
    return;
  }
  setSyncStatus("Connecting...", true, "↻");
  await restoreCloudState();
});

const originalSetItem = Storage.prototype.setItem;
Storage.prototype.setItem = function patchedSetItem(key, value) {
  originalSetItem.call(this, key, String(value));
  if (!applyingRemote && currentUser &&
      (syncedKeys.includes(key) || syncedPrefixes.some((prefix) => key.startsWith(prefix)))) {
    scheduleCloudSave();
  }
};
