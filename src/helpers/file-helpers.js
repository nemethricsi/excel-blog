import fs from 'fs/promises';
import matter from 'gray-matter';
import path from 'path';
import React from 'react';

export async function getBlogPostList() {
  const fileNames = await readDirectory('/content/posts');

  const blogPosts = [];

  for (let fileName of fileNames) {
    const rawContent = await readFile(`/content/posts/${fileName}`);

    const { data: frontmatter } = matter(rawContent);

    blogPosts.push({
      slug: fileName.replace('.mdx', ''),
      title: frontmatter.title,
      abstract: frontmatter.abstract,
      publishedOn: frontmatter.publishedOn,
    });
  }

  return blogPosts.sort((p1, p2) =>
    p1.publishedOn < p2.publishedOn ? 1 : -1
  );
}

export const loadBlogPost = React.cache(async function loadBlogPost(slug) {
  const rawContent = await readFile(`/content/posts/${slug}.mdx`);

  const { data: frontmatter, content } = matter(rawContent);

  return { frontmatter, content };
});

export async function getFunctionsList() {
  const fileNames = await readDirectory('/content/functions');

  const excelFunctions = [];

  for (let fileName of fileNames) {
    const rawContent = await readFile(`/content/functions/${fileName}`);

    const { data: frontmatter } = matter(rawContent);

    excelFunctions.push({
      slug: fileName.replace('.mdx', ''),
      title: frontmatter.title,
    });
  }

  return excelFunctions;
}

export const loadFunction = React.cache(async function loadFunction(slug) {
  const rawContent = await readFile(`/content/functions/${slug}.mdx`);

  const { data: frontmatter, content } = matter(rawContent);

  return { frontmatter, content };
});

const readFile = (localPath) => {
  return fs.readFile(path.join(process.cwd(), localPath), 'utf8');
};

const readDirectory = (localPath) => {
  return fs.readdir(path.join(process.cwd(), localPath));
};
