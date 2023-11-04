export type FrontMatter = {
  abstract: string;
  publishedOn: string;
  title: string;
};

export type BlogPost = FrontMatter & {
  slug: string;
};
