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

// Adiciona IDs em títulos para melhor navegação e etc
import rehypeSlug from 'rehype-slug';

// Syntax highlight
import { languages } from './languages';

const parser = unified().use(remarkParse).use(remarkGfm).use(remarkFrontmatter, ['yaml']);

const runner = unified()
	.use(remarkRehype)
	.use(rehypeSlug)
	.use(rehypeHighlight, { languages })
	.use(rehypeStringify);

interface Metadata {
	title: string;
	thumbnail: string;
	alt: string;
	tags: string[];
	date: string;
	excerpt: string;
}

type Locale = 'pt' | 'en' | 'es';

export async function parseMarkdownFile(filepath: string, locale: Locale = 'pt') {
	const virtualFile = readSync(filepath);
	const ast = parser.parse(virtualFile);

	let metadata: Metadata | null = null;

	const yamlNode = ast.children[0].type === 'yaml' ? ast.children[0] : null;

	// Interpreta metadados YAML
	if (yamlNode) {
		metadata = yaml.load(yamlNode.value) as Metadata;

		// Remove os metadados da ast
		ast.children = ast.children.slice(1, ast.children.length);

		// Data transformada corretamente para o formato do Brasil
		const date = new Date(metadata.date);

		if (locale === 'pt') {
			metadata.date = date.toLocaleDateString('pt-br');
		}

		if (locale === 'en') {
			metadata.date = date.toLocaleDateString('en-us');
		}
	}

	// Transforma o AST em string
	let content = runner.stringify(runner.runSync(ast));

	// Metadados padrão
	if (!metadata) {
		metadata = {
			title: 'Error!',
			date: '?',
			alt: 'not-found',
			tags: ['not found', 'inexistent'],
			thumbnail: '/favicon.png',
			excerpt: 'Incorrect metadata'
		};

		content = 'Missing Frontmatter! Incorrect or incomplete metadata!';
	}

	return { metadata, content };
}
