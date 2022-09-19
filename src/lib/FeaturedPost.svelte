<!-- TYPESCRIPT -->
<script lang="ts"></script>

<!-- HTML -->
<div class="container">
	<article>
		<div class="content">
			<div class="upper">
				<h2>Postagem em destaque</h2>

				<h3>Como commitar melhor usando conventional commits</h3>

				<p>10 de Junho de 2022</p>
			</div>

			<a href="/">Leia mais -></a>
		</div>

		<picture />
	</article>
</div>

<!-- STYLES - SCSS -->
<style lang="scss">
	.container {
		@media screen and (min-width: 90rem) {
			padding: 0 20rem;
		}
	}

	article {
		width: 100%;
		height: 25rem;
		border-radius: 0.5rem;
		background: #888888;
		padding: 1rem;
		display: flex;

		@media screen and (min-width: 90rem) {
			height: 50rem;
		}
	}

	.content {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 1rem;
		width: 50%;

		@media screen and (min-width: 90rem) {
			padding: 5rem 7.5rem;
		}
	}
	.upper {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	h2 {
		font-size: clamp(1.2rem, 1.2vw, 1.6rem);
	}

	h3 {
		font-size: clamp(1.4rem, 4vw, 4rem);
		font-weight: 500;
		word-wrap: break-word;
	}

	p {
		font-size: clamp(1rem, 1vw, 1.4rem);
	}

	a {
		text-decoration: none;
		font-size: clamp(1.2rem, 1.2vw, 1.6rem);
	}

	picture {
		width: 50%;
		height: 100%;
		border-radius: 0.5rem;
		background: #202020;
	}
</style>
