<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import Skills from '$lib/sections/Skills.svelte';
	import Title from '$lib/components/Title.svelte';
	import type { PageServerData } from './$types';
	import Contact from '$lib/sections/Contact.svelte';

	export let data: PageServerData;
</script>

<main>
	<Title id="home">home</Title>
</main>

<Section>
	<Title id="projects">projects</Title>
</Section>

<Skills />

<Contact />
