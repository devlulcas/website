<!-- HTML -->
<main>
	<div class="wrapper content">
		<div class="presentation">
			<h1>Olá! Lucas aqui :D</h1>
			<p>
				Me chamo Lucas Alves Rego, presente por aí como Devlulcas. Sou um desenvolvedor web, curioso
				e um tagarela profissional.
			</p>
		</div>

		<div class="cta">
			<button>
				<i>X</i>
				Vamos conversar!
			</button>
			<a href="/">ou então veja mais do meu trabalho</a>
		</div>
	</div>
	<div class="wrapper">
		<div class="foreground" />
	</div>
</main>

<!-- STYLES - SCSS -->
<style lang="scss">
	main {
		height: calc(100vh - var(--header-height));
		position: relative;
		overflow: hidden;
	}

	.wrapper {
		width: 100%;
		height: 100%;
		position: absolute;

		@media screen and (min-width: 90rem) {
			width: 50%;
			position: static;
		}
	}

	.content {
		padding: 2rem 3rem;
	}

	.presentation {
		height: 50%;
		display: flex;
		flex-direction: column;

		@media screen and (min-width: 90rem) {
			padding: 2rem 3rem;
			justify-content: flex-end;
		}
	}

	h1 {
		font-size: 3rem;
		font-weight: 800;

		@media screen and (min-width: 90rem) {
			font-size: 4.6vw;
		}
	}

	p {
		font-size: 1.2rem;

		@media screen and (min-width: 90rem) {
			font-size: 2.2rem;
		}
	}

	.cta {
		height: 50%;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		padding-bottom: 10rem;

		@media screen and (min-width: 90rem) {
			padding: 2rem 3rem;
			height: fit-content;
		}
	}

	button {
		padding: 1rem 2rem;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		font-size: 1.6rem;
		border: 0;
		border-radius: 0.5rem;
		background: #000;
		color: #fff;

		@media screen and (min-width: 90rem) {
			font-size: 2rem;
			width: fit-content;
		}
	}

	a {
		margin-top: 1rem;
		text-align: center;
		font-size: 1.4rem;
		text-decoration: none;

		@media screen and (min-width: 90rem) {
			text-align: start;
		}
	}

	.foreground {
		position: absolute;
		background: #00f;
		height: 75rem;
		width: 75rem;
		z-index: -1;
		border-radius: 50%;
		right: calc(-75rem / 2);
		top: 2%;
	}
</style>
