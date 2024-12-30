<script lang="ts">
	import icon from '$/lib/assets/images/icon.svg';
	import { faBars } from '@fortawesome/free-solid-svg-icons';
	import { Fa } from 'svelte-fa';
	import DesktopNavigation from './desktop-navigation.svelte';
	import LocaleForm from './locale-form.svelte';
	import MobileNavigation from './mobile-navigation.svelte';
	import ThemeForm from './theme-form.svelte';

	let open = $state(false);
</script>

<header
	class="sticky top-0 z-50 flex h-[--header-height] items-center justify-center gap-2 bg-gradient-to-b from-background/75 to-transparent md:container md:pt-1 print:h-0"
>
	<nav
		class="flex h-full w-full items-center justify-between gap-2 border bg-card/75 p-1 text-card-foreground backdrop-blur-md dark:bg-card/75 md:rounded-2xl print:hidden"
	>
		<a href="/">
			<img class="h-10 w-10 rounded lg:rounded-xl" src={icon} alt="Lucas Alves Rego" />
		</a>

		<div class="flex h-full min-w-fit items-center gap-1">
			<DesktopNavigation />
			<LocaleForm />
			<ThemeForm />

			<button
				title="Menu"
				aria-label="Menu"
				onclick={() => (open = !open)}
				class="flex h-10 w-10 items-center justify-center rounded-lg border bg-background/90 text-foreground backdrop-blur-md md:rounded-xl lg:hidden"
			>
				<Fa icon={faBars} class="h-6 w-6" />
			</button>
		</div>
	</nav>
</header>

<MobileNavigation {open} />
