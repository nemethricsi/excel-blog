import { components } from '@/components/RendererComponents';
import { loadBlogPost } from '@/helpers/file-helpers';
import { MDXRemote } from 'next-mdx-remote/rsc';
import dayjs from 'dayjs';

export default async function SinglePost({
  params: { postSlug },
}: {
  params: { postSlug: string };
}) {
  const { frontmatter, content } = await loadBlogPost(postSlug);

  return (
    <main className="p-10 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-5">{frontmatter.title}</h1>
      <p className="text-xl font-extralight">
        {dayjs(frontmatter.publishedOn).format('YYYY-MM-DD')}
      </p>

      <div>
        <MDXRemote source={content} components={components} />
      </div>
    </main>
  );
}
