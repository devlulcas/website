<!-- TYPESCRIPT -->
<script lang="ts">
	import Footer from '$lib/Footer.svelte';
	import Heading from '$lib/Heading.svelte';
</script>

<!-- HTML -->
<div class="container">
	<form method="POST" action="?/contact">
		<Heading id="contact">Contato</Heading>

		<div>
			<label for="sender">Seu e-mail</label>
			<input type="email" name="sender" id="sender" />
		</div>

		<div>
			<label for="content">Mensagem</label>
			<textarea name="content" id="content" rows="10" />
		</div>

		<button>
			Enviar
			<i>#</i>
		</button>

		<Footer />
	</form>
</div>

<!-- STYLES - SCSS -->
<style lang="scss">
	.container {
		height: calc(100vh - var(--header-height));
		background-image: url(https://i.pinimg.com/564x/ae/e7/3b/aee73b42b77dc16d0c3f513165218c3f.jpg);
		background-position: center;
		overflow: hidden;

		@media screen and (min-width: 90rem) {
			display: flex;
			align-items: center;
		}
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		height: 100%;
		backdrop-filter: blur(1rem);
		padding: 2rem;
		justify-content: center;

		@media screen and (min-width: 90rem) {
			width: 50%;
			padding: 5rem;
		}
	}

	label {
		font-size: 1.4rem;
		font-weight: 600;
	}

	input,
	textarea {
		width: 100%;
		margin-top: 0.5rem;
		padding: 1rem;
		background: #fff;
		border-radius: 0.5rem;
		color: black;
		border: 0.2rem solid black;
		box-shadow: 0.5rem 0.5rem 0 black;
	}

	textarea {
		resize: none;
	}

	button {
		display: flex;
		gap: 1rem;
		width: fit-content;
		border-radius: 0.25rem;
		padding: 1rem 3rem;
		color: black;
		font-weight: 600;
		box-shadow: rgb(0 0 0 / 4%) 0px 0px 24px;
		font-size: 1.4rem;
		background: white;
		text-decoration: none;
		border: 0.2rem solid black;
		box-shadow: 0.5rem 0.5rem 0 black;
		margin-bottom: 2rem;
	}
</style>
