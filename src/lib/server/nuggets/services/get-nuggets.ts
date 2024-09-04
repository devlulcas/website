import { website } from '$/lib/assets/config';
import { parse as parseHtml } from 'node-html-parser';
import { readingTime } from 'reading-time-estimator';
import { z } from 'zod';
import { detectLanguage } from '../../posts/lib/detect-language';
import type { Nugget } from '../types';

export async function getNuggets(): Promise<Nugget[]> {
  const nuggetFiles = import.meta.glob('/content/nuggets/**/**/*.md');

  const metadataPromises = Object.entries(nuggetFiles).map(
    async ([filepath, resolver]) => {
      const resolverData = await resolver();

      const resolverDataSchema = z.object({
        metadata: z.unknown(),
        default: z.object({
          render: z.function().returns(
            z.object({
              html: z.string(),
            })
          ),
        }),
      });

      const parsedData = resolverDataSchema.parse(resolverData);

      const slug =
        filepath
          .replace(/(\/index)?\.md/, '')
          .split('/')
          .pop() ?? filepath;

      const rendered = parsedData.default.render();
      const language = detectLanguage(rendered.html);

      const expectedReadingTime = readingTime(
        rendered.html,
        300,
        language.code
      );

      const firstImage = parseHtml(rendered.html).querySelector('img');

      rendered.html = firstImage
        ? rendered.html.replace(firstImage.toString(), '')
        : rendered.html;

      const imageSrc = firstImage?.attributes.src ?? website.image;

      const image = new URL(imageSrc, website.url).toString();

      return {
        year: filepath.split('/')[3],
        language,
        slug,
        readingTime: expectedReadingTime.minutes,
        content: rendered.html,
        image,
      };
    }
  );

  const postsMetadata = await Promise.all(metadataPromises);

  console.log('>>>>>>>>>>>>> postsMetadata');
  console.log(postsMetadata);
  console.log('<<<<<<<<<<<<< postsMetadata');

  return postsMetadata;
}
