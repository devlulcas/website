<script lang="ts">
	import { faHeart } from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa/src/fa.svelte";
</script>

<!--HTML-->
<div>
	<span class="button">
		<a href="/#contact">
			<Fa icon={faHeart} />
			Contact me
		</a>
	</span>

	<span> or maybe </span>

	<span>
		<a href="/#projects">see what I've done</a>
	</span>
</div>

<!--CSS-->
<style lang="postcss">
	div {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 1.2rem;
		gap: 1ch;
		font-weight: bold;
	}

	a {
		text-decoration: none;
		width: fit-content;
		position: relative;
		font-size: 2vh;
		color: var(--secondary);

		&::after {
			content: "";
			display: block;
			width: 0;
			height: 0.2rem;
			background: var(--secondary);
			position: absolute;
			transition: all 0.4s ease-in-out;
		}
	}

	span:hover {
		& a::after {
			width: 100%;
		}
	}

	.button {
		& a {
			display: inline-block;
			border-radius: 1rem;
			background: var(--on-primary);
			border: 0.2rem solid var(--primary);
			box-shadow: 0 0.1rem 0 0 var(--primary);
			display: block;
			padding: 0.5rem 0.8rem;
			color: var(--primary);
			transition: transform 0.2s;

			&::after {
				display: none;
			}

			&:hover {
				animation: shakeWhileMovingDown 0.5s infinite;
			}
		}
	}

	@keyframes shakeWhileMovingDown {
		0% {
			transform: rotateZ(0) scale(1.1);
		}
		50% {
			transform: rotateZ(3deg) scale(1.1);
		}
		100% {
			transform: rotateZ(0) scale(1.1);
		}
	}
</style>
