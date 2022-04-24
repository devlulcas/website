<script lang="ts">
	import Footer from "$lib/Footer.svelte";
	import Form from "$lib/Form.svelte";
	import { content } from "$stores/Translation";
</script>

<section id="contact" class="piece contact">
	<h2 class="piece__title">{$content.contact.title}</h2>

	<div class="contact">
		<img width="75px" src="/me_transparent.png" alt="me" />
		<h3>{$content.contact.cta}</h3>
		<Form />
	</div>

	<Footer />
</section>

<style lang="postcss">
	.contact {
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		align-items: center;
		width: 100%;
	}

	h3 {
		font-weight: 600;
		color: var(--special);
		font-size: 2rem;
		text-align: center;
	}
</style>
