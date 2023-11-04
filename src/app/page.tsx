import Link from 'next/link';
import { getBlogPostList } from '@/helpers/file-helpers';

export default async function Home() {
  const blogPosts = await getBlogPostList();

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">Hello</div>
  );
}
