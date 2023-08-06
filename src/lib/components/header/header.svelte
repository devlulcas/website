<script lang="ts">
	import icon from '$/lib/assets/images/icon.svg';
	import { MenuIcon } from 'lucide-svelte';
	import DesktopNavigation from './desktop-navigation.svelte';
	import MobileNavigation from './mobile-navigation.svelte';
	import ThemeForm from './theme-form.svelte';

	let open = false;
</script>

<header
	class="lc-grid h-[--header-height] flex items-center justify-center gap-2 md:p-1 sticky top-0 z-50"
>
	<nav
		class="col-span-12 col-start-1 lg:col-span-8 lg:col-start-3 border md:rounded-2xl h-full flex items-center justify-between gap-2 py-1 px-2 bg-card/95 dark:bg-card/75 backdrop-blur-md text-card-foreground"
	>
		<a href="/">
			<img class="h-10 w-10 rounded-full" src={icon} alt="Lucas Alves Rego" />
		</a>

		<div class="flex items-center gap-2">
			<DesktopNavigation />
			<ThemeForm />

			<button
				on:click={() => (open = !open)}
				class="lg:hidden bg-background/90 backdrop-blur-md rounded-lg h-12 w-12 border flex items-center justify-center text-foreground"
			>
				<MenuIcon size={24} class="text-foreground" />
			</button>
		</div>
	</nav>
</header>

<MobileNavigation {open} />
