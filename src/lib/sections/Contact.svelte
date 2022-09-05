<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Form from '$lib/components/Form.svelte';
	import TinyMe from '$lib/components/TinyMe.svelte';
	import ascii from '$lib/assets/ascii.png';
</script>

<section class="section">
	<div class="container">
		<div class="main">
			<div class="title">
				<h2 id="contact">Get in contact</h2>
				<TinyMe />
			</div>

			<h3>Lorem, ipsum dolor.</h3>

			<Form />
		</div>

		<div class="art">
			<img src={ascii} alt="" />
		</div>
	</div>

	<Footer />
</section>

<style lang="scss">
	.container {
		display: flex;
		width: 100%;
		height: 100%;
	}

	.main {
		position: relative;
		padding: 0 1rem;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		width: 100%;
	}

	.title {
		display: flex;
		align-items: center;
		gap: 2rem;
	}

	h2 {
		font-weight: 900;
		font-size: 4rem;
	}

	h3 {
		font-weight: 600;
		color: var(--special);
		font-size: 2rem;
		text-align: center;
	}

	.art {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
