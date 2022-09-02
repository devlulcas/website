<script lang="ts">
	import RadioButton from '$lib/RadioButton.svelte';
	import Skill from '$lib/Skill.svelte';
	import Section from './Section.svelte';
	import Title from './Title.svelte';

	// Skills

	let group: Skills = 'all';

	const skills = {
		langs: ['Javascript', 'Typescript', 'PHP'],
		design: ['Figma'],
		libs: ['Svelte', 'React'],
		idioms: ['English', 'Português'],
		etc: ['Html', 'Css', 'Sql'],
		tools: ['Git', 'Github']
	};

	type Skills = keyof typeof skills | 'all';

	const all = [
		...skills.langs,
		...skills.design,
		...skills.libs,
		...skills.idioms,
		...skills.tools,
		...skills.etc
	];

	$: show = group === 'all' ? all : skills[group];
</script>

<Section>
	<Title>skills</Title>

	<div class="options">
		<RadioButton bind:group name="skills" value="all" label="all" checked />

		<RadioButton bind:group name="skills" value="langs" label="langs" />

		<RadioButton bind:group name="skills" value="design" label="design" />

		<RadioButton bind:group name="skills" value="libs" label="libs" />

		<RadioButton bind:group name="skills" value="idioms" label="idioms" />
	</div>

	<div class="cards">
		{#each show as skill}
			<Skill name={skill} />
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
	}

	.cards {
		overflow-y: hidden;
	}
</style>
