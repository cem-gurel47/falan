import type { Asset } from "contentful";

export type Content = {
  fields: {
    heroImage: Asset;
    heroTitle: string;
    heroDescription: string;
    magazinePagePrimaryTitle: string;
    magazinePageSecondaryText: string;
    magazinePageDescription: string;
  };
  metadata: {};
  sys: {
    id: string;
    updatedAt: string;
    createdAt: string;
  };
};
