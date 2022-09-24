// Uma interface de processamento de texto usando syntax trees
// Entrada -> Parser -> Syntax Tree (Os plugins agem aqui) -> Compiler -> Saída
import { unified } from 'unified';

// Adiciona suporte a markdown para o unified -> MD AST
import remarkParse from 'remark-parse';

// Adiciona suporte ao github flavored markdown que é o sabor de markdown que eu costumo escrever
import remarkGfm from 'remark-gfm';

// Adiciona suporte a YAML e TOML
import remarkFrontmatter from 'remark-frontmatter';

// Migra de MD AST (Markdown Abstract Tree) para H AST (HTML Abstract tree)
import remarkRehype from 'remark-rehype';

// Adiciona syntax highlight ao output do rehype em tempo de compilação
import rehypeHighlight from 'rehype-highlight';

// Responsável por tornar o AST em uma string outra vez
import rehypeStringify from 'rehype-stringify';

// Converte um caminho para um arquivo virtual
import { readSync } from 'to-vfile';

// Usado para converter o YAML existente nos arquivos markdown
import yaml from 'js-yaml';

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
import html from 'highlight.js/lib/languages/html';
import css from 'highlight.js/lib/languages/css';
import scss from 'highlight.js/lib/languages/scss';
import python from 'highlight.js/lib/languages/python';
import pgsql from 'highlight.js/lib/languages/pgsql';

const languages = {
	dart,
	dockerfile,
	elixir,
	kotlin,
	typescript,
	javascript,
	rust,
	go,
	php,
	html,
	css,
	scss,
	python,
	pgsql
};

const parser = unified().use(remarkParse).use(remarkGfm).use(remarkFrontmatter, ['yaml']);

const runner = unified().use(remarkRehype).use(rehypeHighlight, { languages }).use(rehypeStringify);

export async function parseMarkdownFile(filepath: string) {
	const virtualFile = readSync(filepath);
	const tree = parser.parse(virtualFile);
	let metadata = null;

	if (tree.children.length > 0 && tree.children[0].type == 'yaml') {
		metadata = yaml.load(tree.children[0].value) as { date: string };
		tree.children = tree.children.slice(1, tree.children.length);
		metadata.date = `${metadata.date}`;
	}

	let content = runner.stringify(runner.runSync(tree));

	if (!metadata) {
		metadata = {
			title: 'Error!',
			date: '?',
			excerpt: 'Missing Frontmatter! Expected at least a title and a date!'
		};

		content = 'Missing Frontmatter! Expected at least a title and a date!';
	}

	return { metadata, content };
}
