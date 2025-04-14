import { website } from '$/lib/assets/config/website';
import { GLOBAL_POSTS } from '$/lib/server/posts/services/get-posts';

export const prerender = true;

type FeedItem = {
  title: string;
  slug: string;
  publishDate: string;
  content: string;
};

const feedUpdated = new Date();

const xml = (posts: FeedItem[]) => `<?xml version="1.0" encoding="utf-8"?>
  <feed xmlns="http://www.w3.org/2005/Atom">
    <title>${website.title} - Blog</title>
    <link href="${website.url}/rss.xml" rel="self"/>
    <link href="${website.url}"/>
    <id>${website.url}/</id>
    <updated>${feedUpdated.toISOString()}</updated>
    <author>
      <name>Adam Sanderson</name>
    </author>
    <subtitle>${website.description}</subtitle>
    <generator>SvelteKit</generator>
${posts
    .map(
      (post) => `    <entry>
        <title>${post.title}</title>
        <link href="${website.url}/blog/${post.slug}/"/>
        <id>${website.url}/blog/${post.slug}/</id>
        <updated>${new Date(post.publishDate).toISOString()}</updated>
        <published>${new Date(post.publishDate).toISOString()}</published>
        <content type="html"><![CDATA[${post.content}]]></content>
      </entry>`
    )
    .join('\n')}
  </feed>`;


export async function GET() {
  const feedItems: FeedItem[] = GLOBAL_POSTS.map((post) => ({
    title: post.title,
    slug: post.slug,
    publishDate: post.date,
    content: post.renderedHtml,
  }));

  const headers = {
    'Cache-Control': 'max-age=0, s-maxage=3600',
    'Content-Type': 'application/xml'
  };

  const body = xml(feedItems);

  return new Response(body, { headers });
}
