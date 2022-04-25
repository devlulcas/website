import type { Translation } from "./Translation";

const nav = {
	home: "Início",
	skills: "Habilidades",
	projects: "Projetos",
	contact: "Contato",
	blog: "Blog"
};

const start = {
	salutation: "Olá!",
	presentation:
		"Me chamo Lucas Alves Rego e sou um desenvolvedor web focado em criar software de qualidade para resolver problemas reais. Eu gosto de compartilhar conhecimento e sempre que possível faço isso no meu blog publicando sobre novas tecnologias e técnicas que estou aprendendo e como está sendo o processo. Trabalho tanto como desenvolvedor frontend, quanto como desenvolvedor backend. Além de programador eu também tenho um pé no mundo do design."
};

const cta = {
	contact: "Entre em contato",
	connection: "ou",
	projects: "veja o que eu fiz"
};

const skills = {
	title: "HABILIDADES",
	categories: {
		all: "Todas",
		langs: "Linguagens de programação",
		design: "Design",
		libs: "Frameworks e bibliotecas",
		idioms: "Idiomas"
	}
};

const projects = {
	title: "PROJETOS",

	main: {
		first: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet accusamus odit architecto quam ullam. Placeat, molestiae, natus quia consectetur quod modi quaerat cumque voluptas dolores molestias, assumenda eaque omnis nostrum et aut temporibus culpa dolorum maxime eos?",
		second: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet accusamus odit architecto quam ullam. Placeat, molestiae, natus quia consectetur quod modi quaerat cumque voluptas dolores molestias, assumenda eaque omnis nostrum et aut temporibus culpa dolorum maxime eos?",
		third: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet accusamus odit architecto quam ullam. Placeat, molestiae, natus quia consectetur quod modi quaerat cumque voluptas dolores molestias, assumenda eaque omnis nostrum et aut temporibus culpa dolorum maxime eos?"
	},

	other: "Outros projetos"
};

const projectCard = {
	liveTitle: "Website do projeto",
	codeTitle: "Código do projeto",
	more: "Mais informações"
};

const contact = {
	title: "Contato",
	cta: "Vamos bater um papo?",
	fields: {
		nameLabel: "Como deseja ser chamado?",
		mailLabel: "Qual o seu e-mail?",
		subjectLabel: "Qual o assunto?",
		messageLabel: "Deixe uma mensagem"
	},
	submitButton: "Enviar e-mail"
};

const footer = {
	message: "feito com amor e sveltekit"
};

/**
 * Website translation - Portuguese
 */
export const pt: Translation = {
	lang: "pt",
	nav,
	start,
	cta,
	skills,
	projects,
	projectCard,
	contact,
	footer
};
