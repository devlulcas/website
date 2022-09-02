<script lang="ts">
	import Section from '$lib/Section.svelte';
	import Skills from '$lib/Skills.svelte';
	import type { PageServerData } from './$types';
	export let data: PageServerData;
</script>

<Skills />
<Section title="projects">Ok</Section>
<Section title="skills">Ok</Section>
<Section title="contact">Ok</Section>
