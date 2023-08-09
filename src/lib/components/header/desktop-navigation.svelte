<script lang="ts">
	import { t } from '$/lib/i18n';
	import { navigationLinks } from './header.store';

	let indicadorElement: HTMLSpanElement;

	function changeIndicatorPositionOnLinkHover(event: MouseEvent | FocusEvent) {
		const target = event.target as HTMLAnchorElement;

		console.log(target.offsetLeft, target.offsetWidth);

		indicadorElement.style.opacity = '1';
		indicadorElement.style.visibility = 'visible';

		indicadorElement.style.left = `${target.offsetLeft}px`;
		indicadorElement.style.width = `${target.offsetWidth}px`;
	}

	function hideIndicator() {
		const activeLink = document.querySelector<HTMLAnchorElement>('.lc-active');

		if (activeLink) {
			indicadorElement.style.left = `${activeLink.offsetLeft}px`;
			indicadorElement.style.width = `${activeLink.offsetWidth}px`;
		}

		indicadorElement.style.opacity = '0';
		indicadorElement.style.visibility = 'hidden';
	}
</script>

<div class="flex items-center gap-2 relative">
	{#each $navigationLinks as link}
		<a
			on:mouseover={changeIndicatorPositionOnLinkHover}
			on:focus={changeIndicatorPositionOnLinkHover}
			on:mouseleave={hideIndicator}
			href={link.href}
			class:lc-active={link.isActive}
			class="hidden relative lg:block px-3 py-2 rounded-xl text-sm font-medium"
		>
			{$t(link.label)}
		</a>
	{/each}

	<span class="lc-indicator" bind:this={indicadorElement} />
</div>

<style lang="postcss">
	.lc-active::before {
		content: '';
		position: absolute;
		transform: translateX(-50%);
		bottom: 0;
		left: 50%;
		width: 100%;
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
	}
</style>
