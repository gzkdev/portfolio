import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPostItem, ExperimentItem } from './types';

const CONTENT_PATH = path.join(process.cwd(), 'content');

export async function getBlogPosts(): Promise<BlogPostItem[]> {
  const postsPath = path.join(CONTENT_PATH, 'blog');
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
    } as BlogPostItem;
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export async function getBlogPostBySlug(
  slug: string,
): Promise<BlogPostItem | null> {
  const filePath = path.join(CONTENT_PATH, 'blog', `${slug}.mdx`);
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
  } satisfies BlogPostItem;
}

export async function getExperiments(): Promise<ExperimentItem[]> {
  const experimentsPath = path.join(CONTENT_PATH, 'experiments');
  if (!fs.existsSync(experimentsPath)) return [];

  const files = fs
    .readdirSync(experimentsPath)
    .filter((f) => f.endsWith('.mdx'));

  const experiments = files.map((file) => {
    const filePath = path.join(experimentsPath, file);
    const source = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(source);

    return {
      slug: file.replace('.mdx', ''),
      name: data.name,
      title: data.title,
      description: data.description,
      date: data.date,
      url: data.url,
      content,
    } as ExperimentItem;
  });

  return experiments.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export async function getExperimentBySlug(
  slug: string,
): Promise<ExperimentItem | null> {
  const filePath = path.join(CONTENT_PATH, 'experiments', `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const source = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(source);

  return {
    slug,
    name: data.name,
    title: data.title,
    description: data.description,
    date: data.date,
    url: data.url,
    content,
  } as ExperimentItem;
}
