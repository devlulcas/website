<script lang="ts">
	import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa/src/fa.svelte";

	export let href: string;
	export let label: string;
</script>

<a
	aria-label={label}
	class="more-info"
	{href}
	title={label}
	target="_blank"
	rel="noopener noreferrer"
>
	<div class="icon">
		<Fa class="a" icon={faEllipsis} />
	</div>
</a>

<style lang="postcss">
	a {
		color: var(--primary);
	}

	.more-info {
		height: 95%;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		aspect-ratio: 1/1;
		font-size: 8vh;
		background: var(--on-primary);
		border: 0.2rem solid var(--primary);
		box-shadow: 0 0.5rem var(--primary);
		transition: transform 0.3s;

		&:hover {
			transform: scale(1.1);
		}
	}

	.icon {
		display: flex;
		transition: transform 1s;

		&:hover {
			transform: rotate(360deg);
		}
	}
</style>
