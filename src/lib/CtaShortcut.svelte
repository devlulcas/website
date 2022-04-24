<script lang="ts">
	import { faArrowRight, faHeart } from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa/src/fa.svelte";

	import { content } from "$stores/Translation";
</script>

<!--HTML-->
<div>
	<span class="button">
		<a href="/#contact">
			<Fa icon={faHeart} />
			{$content.cta.contact}
		</a>
	</span>

	<span> {$content.cta.connection} </span>

	<span>
		<a href="/#projects"> {$content.cta.projects} <Fa icon={faArrowRight} /> </a>
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

		@media screen and (max-width: 70rem) {
			flex-direction: column;
			font-size: 1rem;
			margin-bottom: 1rem;
		}
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

		@media screen and (max-width: 70rem) {
			font-size: 1rem;
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
			animation: shakeWhileMovingDown 0.5s infinite;

			&::after {
				display: none;
			}

			&:hover {
				animation: jump 0.5s infinite;
			}

			@media screen and (max-width: 70rem) {
				border-radius: 0.8rem;
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

	@keyframes jump {
		0% {
			transform: translateY(10%);
		}

		50% {
			transform: translateY(-5%);
		}

		100% {
			transform: translateY(15%);
		}
	}
</style>
