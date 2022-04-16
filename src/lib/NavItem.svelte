<script lang="ts">
	import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa/src/fa.svelte";

	// Props
	export let icon: IconDefinition;
	export let label: string;
	export let href: string;

	const hrefLocation = href.charAt(0);
	const localLinks = ["#", "/"];
</script>

{#if localLinks.includes(hrefLocation)}
	<!--Local links-->
	<a sveltekit:prefetch {href}>
		<Fa {icon} aria-label={label} />
		{label}
	</a>
{:else}
	<!--External links-->
	<a href="http://{href}" target="_blank" rel="noopener noreferrer">
		<Fa {icon} aria-label={label} />
		{label}
	</a>
{/if}

<style lang="postcss">
	a {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 1rem;

		text-decoration: none;
		color: var(--on-primary);
		font-weight: 1000;
		font-size: clamp(1rem, 1.2rem, 1vw);

		&:hover {
			color: var(--special);
		}

		@media screen and (max-width: 70rem) {
			justify-content: center;
			width: 100%;
			gap: 1rem;
			padding: 1rem;
			font-weight: 1000;
			color: var(--on-primary);
			font-size: clamp(2rem, 4vh, 3rem);
		}
	}
</style>
