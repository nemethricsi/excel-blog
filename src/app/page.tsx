import { getBlogPostList } from '@/helpers/file-helpers';
import Link from 'next/link';

export default async function Home() {
  const blogPosts = await getBlogPostList();

  return (
    <main className="p-5">
      <h1 className="mb-10 text-4xl font-bold">Excel Blog</h1>
      <div className="flex flex-col gap-4">
        {blogPosts.map(({ title, abstract, slug }) => {
          return (
            <Link key={slug} href={`/post/${slug}`}>
              <div className="rounded-md border p-5">
                <h3 className="mb-3 text-xl font-semibold">{title}</h3>
                <p>{abstract}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
