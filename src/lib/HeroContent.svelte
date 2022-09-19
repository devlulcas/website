<!-- HTML -->
<div class="container">
	<section>
		<h1>Olá! Lucas aqui :D</h1>
		<p>
			Me chamo Lucas Alves Rego, presente por aí como Devlulcas. Sou um desenvolvedor web, curioso e
			um tagarela profissional.
		</p>
	</section>

	<div class="cta">
		<a href="/">
			<i>X</i>
			Vamos conversar!
		</a>
	</div>
</div>

<!-- STYLES - SCSS -->
<style lang="scss">
	.container {
		height: 100%;
		width: 100%;
		max-width: 1160px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 0 2.5rem;

		@media screen and (min-width: 90rem) {
			padding: 0 5rem;
		}
	}

	h1 {
		line-height: 1.25;
		font-weight: 700;
		margin-bottom: 1.5rem;
		font-size: clamp(34px, 6vw, 64px);
	}

	p {
		font-size: 20px;
		line-height: 1.5;
		color: gray;
		margin-bottom: 3rem;
		max-width: 36rem;
	}

	.cta {
		display: flex;
		flex-direction: column;
	}

	a {
		display: flex;
		gap: 1rem;
		width: fit-content;
		border-radius: 0.25rem;
		padding: 1rem 3rem;
		color: white;
		font-weight: 600;
		box-shadow: rgb(0 0 0 / 4%) 0px 0px 24px;
		font-size: 1.4rem;
		background: linear-gradient(76.35deg, #041c6a 15.89%, #1947e5 89.75%);
		text-decoration: none;
	}
</style>
