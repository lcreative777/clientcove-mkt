import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '~/lib/site';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = (await getCollection('blog', ({ data }) => !data.draft))
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());

  return rss({
    title: `${SITE.name} — Blog`,
    description: 'Engineering posts, customer case studies, and notes on running service businesses.',
    site: context.site ?? SITE.url,
    items: posts.map(p => ({
      link: `/blog/${p.id}`,
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.pubDate,
      author: p.data.author,
      categories: p.data.tags,
    })),
    customData: '<language>en-us</language>',
  });
}
