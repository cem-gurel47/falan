import type { Author } from "./author";

export type Article = {
  id: string;
  title: string;
  date: string;
  readTime: number;
  imageUrl: string;
  category: string;
  author: Author;
  content: string;
};
