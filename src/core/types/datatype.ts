import { ImageDataLike } from "gatsby-plugin-image";

export type DataType = {
  allFile: AllFile,
}

export type AllFile = {
  nodes: Array<File>,
}

export type File = {
  name: string,
  childImageSharp: ImageDataLike,
  childMarkdownRemark: ChildMarkdownRemark,
}

export type ChildMarkdownRemark = {
  id: string,
  frontmatter: Collections,
};

export type Collections = Collection;

export type Collection = {
  id: string,
  caption: string,
  thumbnail: string,
  title: string,
}