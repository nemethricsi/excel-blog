import { CodeSnippet } from '@/components/CodeSnippet';

export const components = {
  pre: CodeSnippet,
  p: (props: any) => <p className="my-4 text-lg md:text-xl" {...props} />,
};
