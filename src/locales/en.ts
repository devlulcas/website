import type { Translation } from "./Translation";

const nav = {
	home: "Home",
	skills: "Skills",
	projects: "Projects",
	contact: "Contact",
	blog: "Blog"
};

const start = {
	salutation: "Hi!",
	presentation:
		"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, quos animi dicta itaque illum voluptates ea, voluptate necessitatibus quis accusantium suscipit aliquid sequi exercitationem quod soluta laborum maxime. Eos dolorem dolorum neque voluptatibus sunt alias dicta, error quos architecto iusto minus a ullam porro reiciendis, rerum fugiat corporis, maxime asperiores amet. Dignissimos quia voluptatem laborum sit! Sunt minima pariatur excepturi!"
};

const cta = {
	contact: "Contact me",
	connection: "or maybe",
	projects: "see what I've done"
};

const skills = {
	title: "SKILLS",
	categories: {
		all: "See all",
		langs: "Programming languages",
		design: "Design",
		libs: "Frameworks and libraries",
		idioms: "Idioms"
	}
};

const projects = {
	title: "PROJECTS",
	main: {
		first: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet accusamus odit architecto quam ullam. Placeat, molestiae, natus quia consectetur quod modi quaerat cumque voluptas dolores molestias, assumenda eaque omnis nostrum et aut temporibus culpa dolorum maxime eos?",
		second: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet accusamus odit architecto quam ullam. Placeat, molestiae, natus quia consectetur quod modi quaerat cumque voluptas dolores molestias, assumenda eaque omnis nostrum et aut temporibus culpa dolorum maxime eos?",
		third: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet accusamus odit architecto quam ullam. Placeat, molestiae, natus quia consectetur quod modi quaerat cumque voluptas dolores molestias, assumenda eaque omnis nostrum et aut temporibus culpa dolorum maxime eos?"
	},
	other: "Other projects"
};

const projectCard = {
	liveTitle: "Project website",
	codeTitle: "Project source code",
	more: "More information"
};

const contact = {
	title: "Contact",
	cta: "Let's talk",
	fields: {
		nameLabel: "How do you want to be called?",
		mailLabel: "What's your e-mail?",
		subjectLabel: "What's the subject?",
		messageLabel: "Leave a message"
	},
	submitButton: "Send e-mail"
};

const footer = {
	message: "made with love and sveltekit"
};

/**
 * Website translation - English
 */
export const en: Translation = {
	lang: "en",
	nav,
	start,
	cta,
	skills,
	projects,
	projectCard,
	contact,
	footer
};
