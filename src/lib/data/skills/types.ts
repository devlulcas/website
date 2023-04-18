export type SkillType =
	| 'humanLanguage'
	| 'programmingLanguage'
	| 'framework'
	| 'tool'
	| 'css'
	| 'learning'
	| 'design'
	| 'library'
	| 'database'
	| 'jsRuntime';

export type Skill = {
	title: string;
	icon: string;
	type: SkillType;
};

export type SkillsTypeTranslation = Record<SkillType, string>;
