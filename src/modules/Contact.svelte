<!-- TYPESCRIPT -->
<script lang="ts">
	import Footer from '$lib/Footer.svelte';
	import Heading from '$lib/Heading.svelte';
</script>

<!-- HTML -->
<div class="container">
	<form action="" method="post">
		<Heading>Contato</Heading>
		<input type="email" name="sender" id="" />
		<input type="text" name="content" id="" />

		<button>Enviar</button>
	</form>
	<Footer />
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

		@media screen and (min-width: 90rem) {
			width: 50%;
			padding: 5rem;
			justify-content: center;
		}
	}

	input {
		width: 100%;
		padding: 0.5rem 1rem;
		border: 0.2rem solid black;
		background: #fff;
		border-radius: 0.5rem;
		color: black;
	}

	button {
		border: none;
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
