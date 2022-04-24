/**
 * That store is basically the same that https://github.com/doceazedo used in his portfolio
 */

import { writable } from "svelte/store";
import { browser } from "$app/env";
import { content as translations } from "$/locales";
import type { Lang } from "$/locales/Lang";

// Altera a propriedade lang do HTML (mesmo processo que ocorre na mudança de tema, mas com outra propriedade)
const updateAria = (code: string) => browser && document.documentElement.setAttribute("lang", code);

const initContent = () => {
	let defaultLang = translations.en;

	// Com essa api podemos obter a linguagem do navegador, esse treco é capaz de lidar com PT-BR e PT-PT
	if (browser && navigator.language.startsWith("pt")) {
		defaultLang = translations.pt;
	}

	const { subscribe, set } = writable(defaultLang);

	updateAria(defaultLang.lang);

	return {
		subscribe,

		// Chamado para atualizar o idioma
		change: (lang: Lang) => {
			set(lang === "pt" ? translations.pt : translations.en);
			updateAria(lang);
		}
	};
};

export const content = initContent();
