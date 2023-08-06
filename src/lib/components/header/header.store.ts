import { page } from '$app/stores';
import { derived } from 'svelte/store';

export type NavigationLink = {
	label: string;
	href: string;
	isActive?: boolean;
};

export const navigationLinks = derived(page, ($page) => {
	return [
		{ label: 'Home', href: '/', isActive: $page.url.pathname === '/' },
		{ label: 'About', href: '/about', isActive: $page.url.pathname === '/about' },
		{ label: 'Contact', href: '/#contact', isActive: $page.url.pathname === '/contact' },
		{ label: 'Blog', href: '/blog', isActive: $page.url.pathname === '/blog' }
	];
});
