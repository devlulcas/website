<!-- TYPESCRIPT -->
<script lang="ts">
	import Image from './Image.svelte';
	import MenuButton from './MenuButton.svelte';
	import MobileMenu from './MobileMenu.svelte';
	import NavItems from './NavItems.svelte';

	let mobileMenuIsOpen = false;
	const toggleNavigationModal = () => {
		mobileMenuIsOpen = !mobileMenuIsOpen;
	};

	const links = [
		{ label: 'Home', href: '#' },
		{ label: 'Projects', href: '#' },
		{ label: 'Blog', href: '#' },
		{ label: 'Skills', href: '#' },
		{ label: 'Contact', href: '#' }
	];
</script>

<!-- HTML -->
<div class="placeholder" />
<header>
	<div class="wrapper menu-button">
		<MenuButton active={mobileMenuIsOpen} on:click={toggleNavigationModal} />
	</div>

	<a href="/" class="wrapper logo">
		<Image alt="logo" src="/favicon.png" height={35} width={35} />
	</a>

	<div class="wrapper nav">
		<NavItems items={links} />
	</div>

	<div class="wrapper">
		<div>EN</div>
	</div>
</header>

{#if mobileMenuIsOpen}
	<MobileMenu items={links} toggle={toggleNavigationModal} />
{/if}

<!-- STYLES - SCSS -->
<style lang="scss">
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
		background: #ccc;
	}

	.wrapper {
		width: 100%;
		display: flex;
		align-items: center;

		&:last-child {
			justify-content: flex-end;
		}
	}

	.menu-button {
		@media screen and (min-width: 90rem) {
			display: none;
		}
	}

	.logo {
		justify-content: center;

		@media screen and (min-width: 90rem) {
			justify-content: flex-start;
		}
	}

	.nav {
		display: none;

		@media screen and (min-width: 90rem) {
			display: flex;
		}
	}
</style>
