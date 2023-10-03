export interface BlogTagInterface {
  id: number;
  name: string;
  name_en: string;
  name_ru: string;
}

export interface BlogCommentInterface {
  id: number;
  created: string;
  modified: string;
  name: string;
  email: string;
  context: string;
  post: number;
}

export interface BlogCategoryInterface {
  id: number;
  created: string;
  modified: string;
  title: string;
  title_en: string;
  title_ru: string;
  active: boolean;
}

export interface BlogInterface {
  id: number;
  created: string;
  modified: string;
  title: string;
  title_en: string;
  title_ru: string;
  author: string;
  content: string;
  content_en: string;
  content_ru: string;
  image: string;
  publication_date: string;
  source: string;
  category: BlogCategoryInterface;
  tag: BlogTagInterface[];
  comments: BlogCommentInterface[];
}

export interface BlogListInterface {
  count: number;
  next: string | null;
  previous: string | null;
  results: BlogInterface[];
}
