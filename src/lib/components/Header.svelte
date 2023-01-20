<script lang="ts">
	import DrawerButton from './DrawerButton.svelte';
	import LanguageSwitcher from './LanguageSwitcher.svelte';
	import MobileMenu from './MobileMenu.svelte';
	import NavItems from './NavItems.svelte';
	import ThemeSwitcher from './ThemeSwitcher.svelte';
	import { t } from '$lib/i18n';

	let mobileMenuIsOpen = false;
	const toggleNavigationModal = () => {
		mobileMenuIsOpen = !mobileMenuIsOpen;
	};

	const links = [
		{ label: $t('common.nav.home'), href: '/' },
		{ label: $t('common.nav.blog'), href: '/blog' },
		{ label: $t('common.nav.bookmarks'), href: '/bookmarks' },
		{ label: $t('common.nav.projects'), href: '/#projects' },
		{ label: $t('common.nav.skills'), href: '/#skills' },
		{ label: $t('common.nav.contact'), href: '/#contact' }
	];
</script>

<div class="placeholder" />

<header>
	<div class="menu-button">
		<DrawerButton active={mobileMenuIsOpen} on:click={toggleNavigationModal} />
	</div>

	<a href="/" class="logo">
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

	<div class="nav">
		<NavItems items={links} />
	</div>

	<div class="justify-end">
		<div class="flex gap-2">
			<ThemeSwitcher />
			<LanguageSwitcher />
		</div>
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
		padding: 1rem;
		background-color: hsl(0 0% 90% / 25%);
		color: var(--primary);
		backdrop-filter: blur(1rem);
	}

	header > * {
		width: 100%;
		display: flex;
		align-items: center;
	}

	.logo {
		justify-content: center;
	}

	.nav {
		display: none;
	}

	@media screen and (min-width: 90rem) {
		.menu-button {
			display: none;
		}

		.logo {
			justify-content: flex-start;
		}

		.nav {
			display: flex;
		}
	}
</style>
