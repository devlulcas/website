<script lang="ts">
	import { locale } from '$lib/i18n';
	import type { Skill, SkillType } from '../data/skills';

	export let skill: Skill;

	type SkillsTypeTranslation = Record<SkillType, string>;

	$: translateSkillType = (type: SkillType) => {
		const en: SkillsTypeTranslation = {
			database: 'Database',
			design: 'Design',
			humanLanguage: 'Idiom',
			jsRuntime: 'JS Runtime',
			library: 'Library',
			programmingLanguage: 'Programming language',
			framework: 'Framework',
			tool: 'Tool',
			css: 'CSS',
			learning: 'Learning'
		};

		const ptBr: SkillsTypeTranslation = {
			database: 'Banco de dados',
			design: 'Design',
			humanLanguage: 'Idioma',
			jsRuntime: 'Ambiente JS',
			library: 'Biblioteca',
			programmingLanguage: 'Linguagem de programação',
			framework: 'Framework',
			tool: 'Ferramenta',
			css: 'CSS',
			learning: 'Aprendendo'
		};

		if ($locale === 'en') return en[type];

		return ptBr[type];
	};
</script>

<div
	class="relative aspect-square flex flex-col items-center justify-center gap-2 p-1 bg-gray-100 dark:bg-gray-800 rounded-sm overflow-hidden"
>
	<span
		class="w-full p-2 absolute top-0 left-0 text-xs font-semibold bg-opacity-25 bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-200 truncate"
	>
		{translateSkillType(skill?.type)}
	</span>

	<img src={skill.icon} alt={skill.title} class="w-8 h-8 md:w-10 md:h-10" />

	<span
		class="w-full text-center p-2 absolute bottom-0 left-0 text-md font-semibold truncate text-gray-800 dark:text-gray-100"
	>
		{skill.title}
	</span>
</div>
