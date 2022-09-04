<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import Skills from '$lib/sections/Skills.svelte';
	import Title from '$lib/components/Title.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<main>
	<Title id="home">home</Title>
</main>

<Section>
	<Title id="projects">projects</Title>
</Section>

<Skills />

<Section>
	<Title id="contact">contact</Title>

	{data.post}

	<footer>
		<ul>
			<li>
				<a href="/">github</a>
				<a href="/">linkedin</a>
				<a href="/">blog</a>
			</li>
		</ul>
	</footer>
</Section>
