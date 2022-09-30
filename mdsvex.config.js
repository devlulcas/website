import rehypeAutolink from 'rehype-autolink-headings';

import rehypeSlug from 'rehype-slug';

import relativeImages from 'mdsvex-relative-images';

import rehypeHighlight from 'rehype-highlight';

// Suporte a linguagens de programação que me interessam
import dart from 'highlight.js/lib/languages/dart';
import dockerfile from 'highlight.js/lib/languages/dockerfile';
import elixir from 'highlight.js/lib/languages/elixir';
import kotlin from 'highlight.js/lib/languages/kotlin';
import typescript from 'highlight.js/lib/languages/typescript';
import javascript from 'highlight.js/lib/languages/javascript';
import rust from 'highlight.js/lib/languages/rust';
import go from 'highlight.js/lib/languages/go';
import php from 'highlight.js/lib/languages/php';
import css from 'highlight.js/lib/languages/css';
import scss from 'highlight.js/lib/languages/scss';
import python from 'highlight.js/lib/languages/python';
import pgsql from 'highlight.js/lib/languages/pgsql';

export const languages = {
	dart,
	dockerfile,
	elixir,
	kotlin,
	typescript,
	javascript,
	rust,
	go,
	php,
	css,
	scss,
	python,
	pgsql
};

export const mdsvexConfig = {
	extensions: ['.svx', '.md'],
	smartypants: {
		dashes: 'oldschool'
	},
	remarkPlugins: [relativeImages],
	rehypePlugins: [rehypeSlug, [rehypeHighlight, languages], [rehypeAutolink, { behavior: 'wrap' }]]
};
