<script>
	import RadioButton from "../RadioButton.svelte";
	import Skill from "../Skill.svelte";

	// Skills

	const programmingLanguages = ["Javascript", "Typescript", "PHP"];
	const design = ["Figma"];
	const libs = ["Svelte", "React"];
	const idioms = ["English", "Português"];
	const tools = ["Git", "Github"];
	const etc = ["Html", "Css", "Sql"];

	const all = [...programmingLanguages, ...design, ...libs, ...idioms, ...tools, ...etc];
</script>

<section id="skills" class="piece piece--padding">
	<h2 class="piece__title">SKILLS</h2>

	<div class="skills__options">
		<RadioButton label="See all" name="skills" value="all" checked />
		<RadioButton label="Programming languages" name="skills" value="languages" />
		<RadioButton label="Design" name="skills" value="design" />
		<RadioButton label="Frameworks and libraries" name="skills" value="libs" />
		<RadioButton label="Idioms" name="skills" value="idioms" />
	</div>

	<div class="skills__cards">
		{#each all as skill}
			<Skill name={skill} />
		{/each}
	</div>
</section>

<style lang="postcss">
	.skills__options,
	.skills__cards {
		display: flex;
		justify-content: center;
		gap: 1rem;
		flex-wrap: wrap;
		margin-top: 2%;
	}
</style>
