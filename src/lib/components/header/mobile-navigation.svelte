<script lang="ts">
	import { t } from '$/lib/i18n';
	import { fade, fly } from 'svelte/transition';
	import { clickOutside } from './click-outside';
	import { focusTrap } from './focus-trap';
	import { navigationLinks } from './header.store';

	interface Props {
		open?: boolean;
	}

	let { open = $bindable(true) }: Props = $props();

	const closeModal = () => {
		open = false;
	};

	const getDelay = (index: number) => {
		return Math.abs(index - $navigationLinks.length) * 75 + 100;
	};
</script>

<svelte:window onkeydown={(event) => event.key === 'Escape' && closeModal()} />

{#if open}
	<button
		in:fade={{ duration: 100 }}
		out:fade={{ duration: 100, delay: 200 }}
		use:focusTrap={{ returnFocus: !open }}
		class="fixed inset-0 z-50 flex h-[100dvh] w-full items-end justify-center bg-gray-950/50 p-2 backdrop-blur-md"
	>
		<nav
			in:fly={{ y: 100, duration: 250, delay: 200 }}
			out:fly={{ y: 100, duration: 200 }}
			use:clickOutside={{ onOutsideClick: closeModal }}
			class="flex w-full flex-col gap-2 rounded-xl border bg-white/95 p-2 dark:bg-black/75"
		>
			{#each $navigationLinks as link, index}
				<a
					onclick={closeModal}
					in:fly={{ y: 100, duration: 350, delay: getDelay(index) }}
					href={link.href}
					class="bg-background text-foreground flex h-12 items-center rounded-xl border p-2 px-4 text-sm font-medium"
				>
					{$t(link.label)}
				</a>
			{/each}
		</nav>
	</button>
{/if}
