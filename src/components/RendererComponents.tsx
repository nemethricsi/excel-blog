import { CodeSnippet } from '@/components/CodeSnippet';

export const components = {
  pre: CodeSnippet,
  p: (props: any) => <p className="my-5 text-xl" {...props} />,
};
