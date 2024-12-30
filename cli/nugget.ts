import fs from 'node:fs';
import path from 'node:path';
import * as tr from './lib';

try {
	tr.clear();
	const title = await tr.read('Title');

	tr.log(tr.t('Title: ').color('cyan').style('bold').build() + title);
	const slug = await tr.read('Slug');

	const replaceChars = (slug: string) => {
		const s = slug
			.toLowerCase()
			.replace(/ /g, '-')
			.replace(/[^a-z0-9-]/g, '');
		if (s !== slug) {
			tr.log(tr.t('Slug: ').color('yellow').style('bold').build() + s);
			return s;
		}
		return slug;
	};

	let newSlug = replaceChars(slug);

	const confirmSlug = await tr.confirm('Do you want to use this slug?');

	if (!confirmSlug) {
		newSlug = await tr.read('Slug');
		replaceChars(newSlug);
	}

	const content = {
		title,
		slug: newSlug,
		year: new Date().getFullYear()
	};

	const filepath = path.join(
		process.cwd(),
		'content',
		'nuggets',
		content.year.toString(),
		content.slug,
		'index.md'
	);
	tr.log(tr.t('Filepath: ').color('cyan').style('bold').build() + filepath);

	const text = `# ${content.title.toUpperCase()}\n\n`;
	tr.log(tr.t('Content:').color('cyan').style('bold').build());
	tr.log(text);

	const confirmSave = await tr.confirm('Do you want to save this content?');

	if (confirmSave) {
		tr.log(tr.t('Saving...').color('green').style('bold').build());

		if (!fs.existsSync(path.dirname(filepath))) {
			fs.mkdirSync(path.dirname(filepath), { recursive: true });
			tr.log(tr.t('Saved!').color('green').style('bold').build());
			fs.writeFileSync(filepath, text);

			tr.log(tr.t('File created:').color('cyan').style('bold').build());
			tr.log(filepath);
		} else {
			tr.log(tr.t('Directory already exists.').color('yellow').style('bold').build());
		}
	} else {
		tr.log(tr.t('Canceled!').color('red').style('bold').build());
	}
} catch (error) {
	console.error(error);
}
