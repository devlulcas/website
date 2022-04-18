<script lang="ts">
	import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa/src/fa.svelte";

	export let href: string;
	export let label: string;
</script>

<a aria-label={label} class="more-info" {href} title={label}>
	<Fa icon={faEllipsis} />
</a>

<style lang="postcss">
	a {
		color: var(--black);
	}

	.more-info {
		font-size: 5rem;
		width: 6rem;
		height: 6rem;
		border-radius: 50%;
		background: var(--white);
		border: 0.2rem solid var(--black);
		box-shadow: 0 0.5rem var(--black);
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 0;
		transition: transform 0.3s;
	}

	.more-info:hover {
		transform: scale(1.1);
	}

	.more-info:hover svg {
		transform: rotate(360deg);
		color: var(--black);
	}

	.more-info svg {
		margin-right: 0;
		transition: transform 1s;
	}
</style>
