import { components } from '@/components/RendererComponents';
import { loadBlogPost } from '@/helpers/file-helpers';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { ArrowLeft } from 'react-feather';

export default async function SinglePost({
  params: { postSlug },
}: {
  params: { postSlug: string };
}) {
  const { frontmatter, content } = await loadBlogPost(postSlug);

  return (
    <div className="mx-auto max-w-6xl">
      <Link
        href="/blog"
        className="mb-4 inline-block rounded-2xl bg-neutral-200 p-4 hover:bg-neutral-300  dark:bg-slate-700 dark:hover:bg-slate-600"
      >
        <ArrowLeft strokeWidth={4} />
      </Link>
      <h1 className="text-2xl font-bold md:text-3xl">
        {frontmatter.title}
      </h1>
      <div>
        <MDXRemote source={content} components={components} />
      </div>
    </div>
  );
}
