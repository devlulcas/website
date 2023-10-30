import { FIREBASE_AUTH_CERT_URL, FIREBASE_AUTH_URI, FIREBASE_CLIENT_CERT_URL, FIREBASE_CLIENT_EMAIL, FIREBASE_CLIENT_ID, FIREBASE_PRIVATE_KEY, FIREBASE_PRIVATE_KEY_ID, FIREBASE_PROJECT_ID, FIREBASE_TOKEN_URI } from '$env/static/private';
import type { ServiceAccount } from 'firebase-admin';
import { cert, getApps, initializeApp } from 'firebase-admin/app';

const activeApps = getApps();

const serviceAccount = {
  type: 'service_account',
  project_id: FIREBASE_PROJECT_ID,
  private_key_id: FIREBASE_PRIVATE_KEY_ID,
  private_key: FIREBASE_PRIVATE_KEY,
  client_email: FIREBASE_CLIENT_EMAIL,
  client_id: FIREBASE_CLIENT_ID,
  auth_uri: FIREBASE_AUTH_URI,
  token_uri: FIREBASE_TOKEN_URI,
  auth_provider_x509_cert_url: FIREBASE_AUTH_CERT_URL,
  client_x509_cert_url: FIREBASE_CLIENT_CERT_URL,
  universe_domain: 'googleapis.com',
};

export const app =
  activeApps.length === 0
    ? initializeApp({ credential: cert(serviceAccount as ServiceAccount) })
    : activeApps[0];
