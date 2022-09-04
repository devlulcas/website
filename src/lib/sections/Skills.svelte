<script lang="ts">
	import RadioButton from '$lib/components/RadioButton.svelte';
	import Skill from '$lib/components/Skill.svelte';
	import Section from '$lib/components/Section.svelte';
	import Title from '$lib/components/Title.svelte';
	import { all, skills, type Skills } from '$constants/skills';

	let group: Skills = 'all';

	$: show = group === 'all' ? all : skills[group];
</script>

<Section>
	<Title id="skills">skills</Title>

	<div class="options">
		<RadioButton bind:group name="skills" value="all" label="all" checked />

		<RadioButton bind:group name="skills" value="langs" label="langs" />

		<RadioButton bind:group name="skills" value="design" label="design" />

		<RadioButton bind:group name="skills" value="libs" label="libs" />

		<RadioButton bind:group name="skills" value="idioms" label="idioms" />
	</div>

	<div class="cards">
		{#each show as skill}
			<Skill name={skill.name} src={skill.image} />
		{/each}
	</div>
</Section>

<style lang="scss">
	.options,
	.cards {
		display: flex;
		justify-content: center;
		gap: 1rem;
		flex-wrap: wrap;
		overflow-y: visible;
	}
</style>
