<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { clickOutside } from './click-outside';
	import { focusTrap } from './focus-trap';
	import { navigationLinks } from './header.store';

	export let open = true;

	const closeModal = () => {
		open = false;
	};

	const getDelay = (index: number) => {
		return Math.abs(index - $navigationLinks.length) * 75;
	};
</script>

<svelte:window on:keydown={(event) => event.key === 'Escape' && closeModal()} />

{#if open}
	<button
		in:fade={{ duration: 100 }}
		out:fade={{ duration: 100, delay: 200 }}
		use:focusTrap={{ returnFocus: !open }}
		class="fixed p-2 w-full h-full inset-0 backdrop-blur-md bg-gray-950/50 z-50 flex items-end justify-center"
	>
		<nav
			in:fly={{ y: 100, duration: 250, delay: 200 }}
			out:fly={{ y: 100, duration: 200 }}
			use:clickOutside={{ onOutsideClick: closeModal }}
			class="w-full flex border rounded-xl flex-col gap-2 p-2 bg-white/95 dark:bg-black/75"
		>
			{#each $navigationLinks as link, index}
				<a
					on:click={closeModal}
					in:fly={{ y: 100, duration: 350, delay: getDelay(index) + 100 }}
					href={link.href}
					class="flex items-center bg-background text-foreground px-4 p-2 h-12 border rounded-xl text-sm font-medium"
				>
					{link.label}
				</a>
			{/each}
		</nav>
	</button>
{/if}
