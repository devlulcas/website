import { PRIVATE_FIREBASE_ADMIN_SERVICE_ACCOUNT } from "$env/static/private";
import admin from "firebase-admin";

export const firebase = admin.initializeApp({
  credential: admin.credential.cert((JSON.parse(PRIVATE_FIREBASE_ADMIN_SERVICE_ACCOUNT)))
});

export const firestore = firebase.firestore();
