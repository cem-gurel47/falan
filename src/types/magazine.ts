import type { Asset } from "contentful";
import type { Blog } from "./blog";

export type Magazine = {
  fields: {
    name: string;
    magazinePdf: Asset;
    coverImage: Asset;
    blogPosts: Blog[];
    calameoLink: string;
  };
  metadata: {};
  sys: {
    id: string;
    updatedAt: string;
    createdAt: string;
  };
};

export interface ContentfulResponse {
  limit: number;
  skip: number;
  total: number;
  items: {
    fields: {
      name: string;
      magazinePdf: Asset;
      coverImage: Asset;
      blogPosts: Blog[];
    };
    metadata: {};
    sys: {
      id: string;
      updatedAt: string;
      createdAt: string;
    };
  }[];
}
