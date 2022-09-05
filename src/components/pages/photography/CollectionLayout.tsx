import React from "react";
import { css } from "@emotion/react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { whiteframes } from "core/styles";
import { File } from "core/types/allFile";
import { getImageGroups } from "core/lib/getImageGroups";

interface Props {
  title: string;
  images: File[];
}

const imageStyles = css`
  border-radius: 0.5rem;
  box-shadow: ${whiteframes.shadows[12]};
  margin: 64px 0;
  width: 100%;
`;

export const CollectionLayout = ({ title, images }: Props) => {
  const rows = getImageGroups(images);
  const count = images.length;
  const collectionImages = images.map(
    ({ id, childImageSharp: imageData }: File, i: number) => {
      const image = getImage(imageData);
      if (!image) return undefined;
      return (
        <GatsbyImage
          alt={`${title} by This Christography. Image ${i+1} of ${count}`}
          css={imageStyles}
          image={image}
          key={id}
        />
      );
    }
  );
  return <>{collectionImages}</>;
};
