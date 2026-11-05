# My Rhythm

## Enable login and cross-device sync

My Rhythm uses Firebase Authentication and Firestore for account login and real-time progress synchronization.

1. Create a Firebase project at https://console.firebase.google.com/
2. Add a Web app and copy its Firebase configuration object.
3. In `firebase-config.js`, replace `window.MY_RHYTHM_FIREBASE_CONFIG = null;` with the copied object.
4. In Firebase Authentication, enable Email/Password and Google sign-in.
5. Add your GitHub Pages domain and local development URL to Firebase Authentication > Settings > Authorized domains.
6. Create Firestore Database in production mode.
7. Publish these Firestore security rules:

```text
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /rhythm-users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

After configuration, the same account will synchronize completed tasks, day completion, music usage, and completed-week state between laptop, phone, TV, and other devices.
