<script lang="ts">
	import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa/src/fa.svelte";

	// Props
	export let icon: IconDefinition;
	export let label: string;
</script>

<a href="/">
	<Fa {icon} aria-label={label} />
	{label}
</a>

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

		@media screen and (max-width: 100rem) {
			gap: 1rem;
			padding: 1rem;
			outline: 1px solid violet;
			font-weight: 1000;
			color: var(--on-primary);
			font-size: clamp(2rem, 4vh, 3rem);
		}
	}
</style>
