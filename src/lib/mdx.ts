import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const CONTENT_PATH = path.join(process.cwd(), 'content');

export type BlogPost = {
  slug: string;
  title: string;
  subtitle?: string;
  date: string;
  tags?: string[];
  content: string;
};

export type WorkItem = {
  slug: string;
  title: string;
  description: string;
  date: string;
  type: 'project' | 'prototype';
  link?: string;
  content: string;
};

export async function getBlogPosts(): Promise<BlogPost[]> {
  const postsPath = path.join(CONTENT_PATH, 'writing');
  if (!fs.existsSync(postsPath)) return [];

  const files = fs.readdirSync(postsPath).filter((f) => f.endsWith('.mdx'));

  const posts = files.map((file) => {
    const filePath = path.join(postsPath, file);
    const source = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(source);

    return {
      slug: file.replace('.mdx', ''),
      title: data.title,
      subtitle: data.subtitle,
      date: data.date,
      tags: data.tags,
      content,
    } as BlogPost;
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export async function getBlogPostBySlug(
  slug: string,
): Promise<BlogPost | null> {
  const filePath = path.join(CONTENT_PATH, 'writing', `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const source = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(source);

  return {
    slug,
    title: data.title,
    subtitle: data.subtitle,
    date: data.date,
    tags: data.tags,
    content,
  } as BlogPost;
}

export async function getWorkItems(): Promise<WorkItem[]> {
  const worksPath = path.join(CONTENT_PATH, 'works');
  if (!fs.existsSync(worksPath)) return [];

  const files = fs.readdirSync(worksPath).filter((f) => f.endsWith('.mdx'));

  const works = files.map((file) => {
    const filePath = path.join(worksPath, file);
    const source = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(source);

    return {
      slug: file.replace('.mdx', ''),
      title: data.title,
      description: data.description,
      date: data.date,
      type: data.type,
      link: data.link,
      content,
    } as WorkItem;
  });

  return works.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export async function getWorkItemBySlug(
  slug: string,
): Promise<WorkItem | null> {
  const filePath = path.join(CONTENT_PATH, 'works', `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const source = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(source);

  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    type: data.type,
    link: data.link,
    content,
  } as WorkItem;
}
