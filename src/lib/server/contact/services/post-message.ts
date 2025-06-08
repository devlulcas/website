import { firestore } from '../../database/lib/firebase';
import type { Message } from '../types/message';

export async function postMessage(data: Message) {
	const now = new Date();
	try {
		const docRef = firestore.collection('contacts').doc();
		await docRef.set({
			name: data.name,
			email: data.email,
			message: data.message,
			isSpam: false,
			createdAt: now.toISOString(),
			viewedAt: ''
		});

		console.log('Contact message sent successfully!', docRef.id);
		return true;
	} catch (error) {
		console.error(error);
		return false;
	}
}
