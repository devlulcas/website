<script lang="ts">
	import CtaShortcut from "$lib/CtaShortcut.svelte";
</script>

<div id="start" class="piece">
	<picture class="banner">
		<img src="./me.png" alt="lucas alves rego" />
	</picture>

	<section class="content">
		<div class="content__container">
			<p class="content__abstract">
				<strong>Olá</strong>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque adipisci delectus quasi deleniti
				atque velit, pariatur reprehenderit repellat placeat iusto? Sit numquam magnam placeat magni
				voluptatem adipisci blanditiis veritatis praesentium harum obcaecati, at eos dicta voluptatum
				dolore ab perferendis nulla fugit, soluta impedit. Porro qui deserunt ex quia sit commodi sed
				earum magni tempore velit vitae unde temporibus, dolor quas a corporis totam architecto.
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
		height: 100%;
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
	}

	.content {
		background: var(--primary-light);
		display: grid;
		place-items: center;
	}

	.content__container {
		width: clamp(70%, 80%, 100%);
	}

	.content__abstract {
		font-size: 2rem;
		margin-bottom: 10%;

		& strong {
			display: block;
			font-size: 5rem;
		}

		@media screen and (max-width: 70rem) {
			font-size: 1.2rem;
			margin-bottom: 5%;
		}
	}
</style>
