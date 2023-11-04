import Link from 'next/link';
import { getBlogPostList } from '@/helpers/file-helpers';

export default async function BlogHome() {
  const blogPosts = await getBlogPostList();

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {blogPosts.map(({ slug, title }) => (
        <Link key={slug} href={`/blog/${slug}`}>
          <article className="rounded-md  bg-white p-5 shadow transition-colors hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-700">
            {title}
          </article>
        </Link>
      ))}
    </div>
  );
}
