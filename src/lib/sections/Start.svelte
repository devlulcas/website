<script lang="ts">
	import { content } from "$stores/Translation";

	import CtaShortcut from "$lib/CtaShortcut.svelte";
</script>

<div id="start" class="piece">
	<picture class="banner">
		<img src="./me.png" alt="lucas alves rego" />
	</picture>

	<section class="content">
		<div class="content__container">
			<p class="content__abstract">
				<strong>{$content.start.salutation}</strong>
				{$content.start.presentation}
			</p>

			<CtaShortcut />
		</div>
	</section>
</div>

<style lang="postcss">
	.piece {
		display: flex;
		flex-direction: column;

		@media screen and (min-width: 70rem) {
			flex-direction: row;
		}
	}

	.banner,
	.content {
		width: 100%;
		min-height: 100%;
	}

	.banner {
		position: relative;
		background: var(--secondary);
		overflow: hidden;

		& img {
			position: absolute;
			height: 100%;
			width: auto;
			transform: rotate(35deg) translate(-20%, 25%);
		}

		@media screen and (max-width: 70rem) {
			min-height: 30vh;
		}
	}

	.content {
		background: var(--primary-light);
		display: flex;
		justify-content: center;
		align-items: center;

		@media screen and (max-width: 70rem) {
			align-items: start;
			height: 70vh;
		}
	}

	.content__container {
		width: clamp(80%, 90%, 100%);
	}

	.content__abstract {
		font-size: min(3.5vh, 2vw);
		margin-bottom: 10%;

		& strong {
			display: block;
			font-size: 5rem;
		}

		@media screen and (max-width: 70rem) {
			font-size: 1.2rem;
			margin-bottom: 3%;

			& strong {
				font-size: 3rem;
			}
		}
	}
</style>
