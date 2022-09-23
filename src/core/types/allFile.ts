import { ImageDataLike } from "gatsby-plugin-image";

export type AllFile = {
  nodes: Array<File>;
};

export type File = {
  id: string;
  name: string;
  childImageSharp: ImageSharp;
};

export type ImageSharp = {
  original: {
    height: number,
    width: number,
  }
} & ImageDataLike;
