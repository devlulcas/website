import { PRIVATE_FIREBASE_ADMIN_SERVICE_ACCOUNT } from '$env/static/private';
import admin from 'firebase-admin';

let firebaseClient: admin.app.App | null = null;
let firestoreClient: admin.firestore.Firestore | null = null;

export function getFirebaseAdminClient(): admin.app.App {
	try {
		if (firebaseClient) return firebaseClient;

		// Check if app already exists
		const existingApp = admin.apps.find((app) => app?.name === 'devlulcas-website');
		if (existingApp) {
			firebaseClient = existingApp;
			return firebaseClient;
		}

		const credential = admin.credential.cert(JSON.parse(PRIVATE_FIREBASE_ADMIN_SERVICE_ACCOUNT));
		firebaseClient = admin.initializeApp({ credential }, 'devlulcas-website');
		return firebaseClient;
	} catch (error) {
		console.error('Error initializing Firebase:', error);
		throw error;
	}
}

export function getFirestoreClient(): admin.firestore.Firestore {
	try {
		if (firestoreClient) return firestoreClient;
		const firebase = getFirebaseAdminClient();
		firestoreClient = firebase.firestore();
		return firestoreClient;
	} catch (error) {
		console.error('Error getting Firestore client:', error);
		throw error;
	}
}

export const firebase = getFirebaseAdminClient();
export const firestore = getFirestoreClient();
