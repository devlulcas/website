import { writable } from 'svelte/store';

export const contactData = writable({ name: '', email: '', subject: 'Proposta', message: '' });
