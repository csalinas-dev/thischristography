export type Collection = {
  id: string,
  frontmatter: CollectionFrontmatter,
};

export type CollectionFrontmatter = {
  slug: string,
  title: string,
  caption: string,
  thumbnail: string,
  images: string[],
};