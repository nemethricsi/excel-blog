import { getFunctionsList } from '@/helpers/file-helpers';
import Link from 'next/link';

export default async function ExcelFunctions() {
  const functions = await getFunctionsList();

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {functions.map(({ slug, title }) => (
        <Link key={slug} href={`/fuggvenyek/${slug}`}>
          <article className="flex  h-full items-center rounded-md bg-white p-5 shadow transition-colors hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-700">
            {title}
          </article>
        </Link>
      ))}
    </div>
  );
}
