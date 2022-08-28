import { File } from "./allFile";

export type Collection = {
  id: string;
  frontmatter: CollectionFrontmatter;
  thumbnailImg: File;
};

export type CollectionFrontmatter = {
  slug: string;
  title: string;
  caption: string;
  thumbnail: string;
  images: string[];
};
