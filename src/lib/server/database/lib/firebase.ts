import { website } from '$/lib/assets/config/website';
import { PRIVATE_FIREBASE_ADMIN_SERVICE_ACCOUNT } from '$env/static/private';
import admin from 'firebase-admin';

export const firebase = admin.initializeApp(
  {
    credential: admin.credential.cert(JSON.parse(PRIVATE_FIREBASE_ADMIN_SERVICE_ACCOUNT))
  },
  website.url
);

export const firestore = firebase.firestore();
