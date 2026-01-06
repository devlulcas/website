<script lang="ts">
	import { t } from '$/lib/i18n';
	import { navigationLinks } from './header.store';

	let indicadorElement: HTMLSpanElement | undefined = $state();

	function changeIndicatorPositionOnLinkHover(event: MouseEvent | FocusEvent) {
		const target = event.target as HTMLAnchorElement;

		if (!indicadorElement) return;

		indicadorElement.style.opacity = '1';
		indicadorElement.style.visibility = 'visible';

		indicadorElement.style.left = `${target.offsetLeft}px`;
		indicadorElement.style.width = `${target.offsetWidth}px`;
	}

	function hideIndicator() {
		const activeLink = document.querySelector<HTMLAnchorElement>('.lc-active');

		if (!indicadorElement || !activeLink) return;

		if (activeLink) {
			indicadorElement.style.left = `${activeLink.offsetLeft}px`;
			indicadorElement.style.width = `${activeLink.offsetWidth}px`;
		}

		indicadorElement.style.opacity = '0';
		indicadorElement.style.visibility = 'hidden';
	}
</script>

<div class="relative flex items-center">
	{#each $navigationLinks as link}
		<a
			onmouseover={changeIndicatorPositionOnLinkHover}
			onfocus={changeIndicatorPositionOnLinkHover}
			onmouseleave={hideIndicator}
			href={link.href}
			class:lc-active={link.isActive}
			class="relative hidden rounded-xl px-3 py-2 text-sm font-medium lg:block"
		>
			{$t(link.label)}
		</a>
	{/each}

	<span class="lc-indicator" bind:this={indicadorElement}></span>
</div>

<style lang="postcss">
	@reference "tailwindcss";

	.lc-active::before {
		content: '';
		position: absolute;
		transform: translateX(-50%);
		bottom: 0;
		left: 50%;
		width: 90%;
		height: 0.25rem;
		background-color: var(--brand-600);
		border-radius: 0.25rem;
	}

	div:hover > .lc-active::before {
		background-color: var(--brand-100);
	}

	.lc-indicator {
		content: '';
		position: absolute;
		display: block;
		bottom: 0;
		width: 1.5rem;
		height: 0.25rem;
		background-color: var(--brand-300);
		border-radius: 0.25rem;
		transition: all 0.3s ease-in-out;
		opacity: 0;
		visibility: hidden;
		pointer-events: none;
	}
</style>
