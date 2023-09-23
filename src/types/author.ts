import type { Asset } from "contentful";

export interface Author {
  fields: {
    name: string;
    biography: string;
    image: Asset;
    twitterUrl?: string;
    linkedinUrl?: string;
  };
  metadata: {};
  sys: {
    id: string;
    updatedAt: string;
    createdAt: string;
  };
}

export interface ContentfulResponse {
  limit: number;
  skip: number;
  total: number;
  items: {
    fields: {
      name: string;
      biography: string;
      image: Asset;
    };
    metadata: {};
    sys: {};
  }[];
}
