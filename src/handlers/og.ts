import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import fs from 'node:fs/promises';
import path from 'node:path';

interface OgHandlerParams {
	text: string;
}

const fontFilePath = path.join(process.cwd(), 'src/lib/assets/fonts/inter-black.ttf');
const fontData = await fs.readFile(fontFilePath);
const height = 630;
const width = 1200;
const logo = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAzMDEgMzI5Ij48cGF0aCBmaWxsPSIjMDBDNTFGIiBkPSJtMCA3MyA1My00MCA1MSAxMSA0OC0yMSA1MSAxMCA0OC0zM2g1MHYzMjlIMFY3M1oiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTYwIDI1MGMwIDItNSA0LTExIDQtNSAwLTEwLTItMTAtNCAwLTMgNS0xIDEwLTEgNiAwIDExLTIgMTEgMVptLTI4LTIxYTkgOSAwIDEgMS0xOCAwIDkgOSAwIDAgMSAxOCAwWm01MyAwYTkgOSAwIDEgMS0xOCAwIDkgOSAwIDAgMSAxOCAwWiIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yNDEgMTkzYzQgMyA3IDcgOCAxMSAwIDQtMyA4LTcgMTItMiAzLTE5IDIwLTE5IDIyIDAtNi00LTExLTEwLTExbC01IDdhNjUgNjUgMCAwIDAgMi0yNmMtMTgtNS00Ny0xMy01NC0yOCAwIDAtMzEgMjUtNjggMzBhNTcgNTcgMCAwIDAgMiAyNGwtNS03Yy01IDAtOSA1LTkgMTEtMS0yLTE1LTctMTgtOS00LTQtOC04LTgtMTJzMy04IDYtMTJjMy0zIDUtNiA1LTggMS0yLTEtNi0yLTktMi01LTMtMTEtMi0xNCAyLTQgNi02IDExLTkgMy0yIDctMyA4LTVsMi0xMGMxLTUgMS0xMCA0LTEzIDMtMiA4LTMgMTQtM2w5LTEgNi03YzMtNSA2LTEwIDEwLTExIDMtMSA4IDEgMTMgNGw5IDNjMiAwIDYtMiA5LTUgNC0yIDktNSAxMy01IDQgMSA3IDUgMTEgOWw2IDdoMTBsNy0xIDcgMmMzIDIgNCA3IDYgMTJ2MWwzIDkgOSA0YzUgMSAxMCAzIDEyIDYgMiA0IDEgOSAwIDE0LTEgNC0yIDgtMSAxMCAwIDIgMyA1IDYgOFoiLz48L3N2Zz4=`;

export const ogHandler = async ({ text }: OgHandlerParams) => {
	const svg = await satori(
		{
			type: 'div',
			props: {
				style: {
					width: '100%',
					height: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					backgroundColor: '#020617',
					color: '#fff',
					fontSize: '96px',
					fontWeight: '900',
					textTransform: 'uppercase'
				},
				children: [
					{
						type: 'img',
						props: {
							src: logo,
							style: {
								margin: '0 20px',
								width: '301px',
								height: '329px'
							}
						}
					},
					{
						type: 'div',
						props: {
							style: {
								width: '600px',
								wordBreak: 'break-word'
							},
							children: text
						}
					}
				]
			}
		},
		{
			height,
			width,
			fonts: [
				{
					name: 'Inter Latin',
					data: fontData,
					style: 'normal'
				}
			]
		}
	);

	const resvg = new Resvg(svg, {
		fitTo: {
			mode: 'width',
			value: width
		}
	});

	const image = resvg.render();

	return image.asPng();
};
