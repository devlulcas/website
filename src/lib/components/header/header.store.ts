import { page } from '$app/stores';
import { derived } from 'svelte/store';

export type NavigationLink = {
  label: string;
  href: string;
  isActive?: boolean;
};

export const navigationLinks = derived(page, ($page) => {
  return [
    { label: 'common.header.home', href: '/', isActive: $page.url.pathname === '/' },
    { label: 'common.header.about', href: '/about', isActive: $page.url.pathname === '/about' },
    {
      label: 'common.header.contact',
      href: '/#contact',
      isActive: $page.url.pathname === '/contact',
    },
    { label: 'common.header.blog', href: '/blog', isActive: $page.url.pathname === '/blog' },
    {
      label: 'common.header.bookmarks',
      href: '/bookmarks',
      isActive: $page.url.pathname === '/bookmarks',
    },
    {
      label: 'common.header.microblog',
      href: '/microblog',
      isActive: $page.url.pathname === '/microblog',
    },
  ];
});
