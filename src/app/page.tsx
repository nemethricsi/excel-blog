import { getBlogPostList } from '@/helpers/file-helpers';
import Link from 'next/link';

export default async function Home() {
  const blogPosts = await getBlogPostList();

  return (
    <main className="p-5">
      <h1 className="text-4xl font-bold mb-10">Excel Blog</h1>
      <div className="flex flex-col gap-4">
        {blogPosts.map(({ title, abstract, publishedOn, slug }) => {
          return (
            <Link key={slug} href={`/post/${slug}`}>
              <div className="p-5 border rounded-md">
                <h3 className="text-xl mb-3 font-semibold">{title}</h3>
                <p>{abstract}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
