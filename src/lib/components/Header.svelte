<script lang="ts">
	import DrawerButton from './DrawerButton.svelte';
	import MobileMenu from './MobileMenu.svelte';
	import NavItems from './NavItems.svelte';
	import { t } from '$lib/i18n';
	import LocaleForm from './LocaleForm.svelte';
	import ThemeForm from './ThemeForm.svelte';

	let mobileMenuIsOpen = false;
	const toggleNavigationModal = () => {
		mobileMenuIsOpen = !mobileMenuIsOpen;
	};

	$: links = [
		{ label: $t('common.nav.home'), href: '/' },
		{ label: $t('common.nav.blog'), href: '/blog' },
		{ label: $t('common.nav.bookmarks'), href: '/bookmarks' },
		{ label: $t('common.nav.projects'), href: '/#projects' },
		{ label: $t('common.nav.skills'), href: '/#skills' },
		{ label: $t('common.nav.contact'), href: '/#contact' },
		{ label: $t('common.nav.uses'), href: '/uses' }
	];
</script>

<div class="placeholder" />

<header class="px-1 md:px-[20%] bg-opacity-80 dark:bg-opacity-20 bg-gray-100 dark:bg-gray-800">
	<div class="block xl:hidden">
		<DrawerButton active={mobileMenuIsOpen} on:click={toggleNavigationModal} />
	</div>

	<a href="/" class="flex items-center justify-center xl:justify-start">
		<img
			src="/favicon.png"
			alt="logo"
			width={32}
			height={35}
			decoding="async"
			loading="lazy"
			style="aspect-ratio: auto {32} / {35};"
		/>
	</a>

	<div class="hidden xl:flex">
		<NavItems items={links} />
	</div>

	<div class="flex items-center gap-2 justify-end">
		<ThemeForm />
		<LocaleForm />
	</div>
</header>

{#if mobileMenuIsOpen}
	<MobileMenu items={links} toggle={toggleNavigationModal} />
{/if}

<style>
	.placeholder {
		height: var(--header-height);
	}

	header {
		z-index: 10;
		position: fixed;
		top: 0;
		width: 100%;
		height: var(--header-height);
		display: flex;
		align-items: center;
		backdrop-filter: blur(1rem);
	}

	header > * {
		width: 100%;
	}
</style>
