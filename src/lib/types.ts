export type BlogPostItem = {
  slug: string;
  title: string;
  subtitle?: string;
  date: string;
  tags?: string[];
  content: string;
};

export type ExperimentItem = {
  slug: string;
  name: string;
  title: string;
  description: string;
  date: string;
  url: string;
  content: string;
};

export type ProjectItem = {
  name: string;
  title: string;
  description: string;
  tags: string[];
  url: string;
};
