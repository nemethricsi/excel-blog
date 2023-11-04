import { Code } from 'bright';

export const CodeSnippet = (props: any) => {
  return (
    <Code
      {...props}
      theme="one-dark-pro"
      className="dark:border dark:border-slate-700"
    />
  );
};
