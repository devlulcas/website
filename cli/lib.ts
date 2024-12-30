const backgroundColors = {
	black: '40',
	red: '41',
	green: '42',
	yellow: '43',
	blue: '44',
	magenta: '45',
	cyan: '46',
	white: '47'
} as const;
type BackgroundColor = keyof typeof backgroundColors;

const textColors = {
	black: '30',
	red: '31',
	green: '32',
	yellow: '33',
	blue: '34',
	magenta: '35',
	cyan: '36',
	white: '37'
} as const;
type TextColor = keyof typeof textColors;

const styles = {
	reset: '0',
	bold: '1',
	dim: '2',
	italic: '3',
	underline: '4',
	inverse: '7',
	hidden: '8',
	strikethrough: '9'
} as const;
type Style = keyof typeof styles;

class TextBuilder {
	private text: string;

	constructor(text: string) {
		this.text = text;
	}

	color(color: TextColor): this {
		this.text = `\x1b[${textColors[color]}m${this.text}\x1b[0m`;
		return this;
	}

	background(color: BackgroundColor): this {
		this.text = `\x1b[${backgroundColors[color]}m${this.text}\x1b[0m`;
		return this;
	}

	style(style: Style): this {
		this.text = `\x1b[${styles[style]}m${this.text}\x1b[0m`;
		return this;
	}

	build(): string {
		return this.text;
	}
}

export const t = (text: string) => new TextBuilder(text);

import readline from 'node:readline';

export const clear = () => {
	console.clear();
};

export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const read = (question: string) =>
	new Promise<string>((resolve) => {
		const rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout
		});

		const formated = t('>>> ' + question + ': ')
			.color('cyan')
			.style('bold')
			.build();
		rl.question(formated, (answer) => {
			rl.close();
			resolve(answer);
		});
	});

export const confirm = (question: string) =>
	new Promise<boolean>((resolve) => {
		const rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout
		});

		const formated = t('>>> ' + question + ' (y/n): ')
			.color('cyan')
			.style('bold')
			.build();
		rl.question(formated, (answer) => {
			rl.close();
			resolve(answer === 'y');
		});
	});

export const log = (message: TextBuilder | string) => {
	console.log(message instanceof TextBuilder ? message.build() : message);
};
