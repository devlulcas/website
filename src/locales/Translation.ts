import type { Lang } from "./Lang";

export type Translation = {
	lang: Lang;

	nav: {
		home: string;
		skills: string;
		projects: string;
		contact: string;
		blog: string;
	};

	start: {
		salutation: string;
		presentation: string;
	};

	cta: {
		contact: string;
		connection: string;
		projects: string;
	};

	skills: {
		title: string;
		categories: {
			all: string;
			langs: string;
			design: string;
			libs: string;
			idioms: string;
		};
	};

	projects: {
		title: string;
		main: {
			first: string;
			second: string;
			third: string;
		};

		other: string;
	};

	projectCard: {
		liveTitle: string;
		codeTitle: string;
		more: string;
	};

	contact: {
		title: string;
		cta: string;
		fields: {
			nameLabel: string;
			mailLabel: string;
			subjectLabel: string;
			messageLabel: string;
		};
		submitButton: string;
	};

	footer: {
		message: string;
	};
};
