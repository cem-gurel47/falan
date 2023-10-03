import type { Author } from "./author";
import type { Asset } from "contentful";

export type Blog = {
  fields: {
    title: string;
    readTimeAsMinutes: number;
    image: Asset;
    category: string;
    author: Author;
    readCount: number;
    content: any;
  };
  metadata: {};
  sys: {
    id: string;
    updatedAt: string;
    createdAt: string;
  };
};
