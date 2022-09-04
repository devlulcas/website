<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Form from '$lib/components/Form.svelte';
	import Section from '$lib/components/Section.svelte';
	import TinyMe from '$lib/components/TinyMe.svelte';
	import Title from '$lib/components/Title.svelte';
</script>

<Section>
	<Title id="contact">Get in contact</Title>

	<div class="contact">
		<TinyMe />

		<h3>Lorem, ipsum dolor.</h3>

		<Form />
	</div>

	<Footer />
</Section>

<style lang="scss">
	.contact {
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		align-items: center;
		width: 100%;
		height: 100%;
	}

	h3 {
		font-weight: 600;
		color: var(--special);
		font-size: 2rem;
		text-align: center;
	}
</style>
