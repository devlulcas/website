<script lang="ts">
	import { t } from '$lib/i18n';
	import { skillsUsedAtWork, otherSkills } from '../data/skills';
	import SkillCard from './SkillCard.svelte';
</script>

<p
	class="text-center md:text-left text-sm md:text-base font-semibold text-gray-800 mb-2 dark:text-gray-200"
>
	{$t('homepage.skills.about')}
</p>

<p
	class="text-center md:text-left text-sm md:text-base font-semibold text-gray-600 mb-2 dark:text-gray-200 mt-3"
>
	{$t('homepage.skills.atWork')}:
</p>

<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-4">
	{#each skillsUsedAtWork as skill}
		<SkillCard {skill} />
	{/each}
</div>

<p
	class="text-center md:text-left text-sm md:text-base font-semibold text-gray-600 mb-2 dark:text-gray-200 mt-3"
>
	{$t('homepage.skills.other')}:
</p>

<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-4">
	{#each otherSkills as skill}
		<SkillCard {skill} />
	{/each}
</div>
