import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { breakpoints, whiteframes } from "core/styles";
import { File } from "core/types/allFile";
import { getImageGroups } from "core/lib/getImageGroups";

interface Props {
  title: string;
  images: File[];
}

const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 100%;

  @media ${breakpoints.md} {
    flex-direction: row;
  }
`;

const imageStyles = css`
  border-radius: 0.5rem;
  box-shadow: ${whiteframes.shadows[8]};
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 100%;

  @media ${breakpoints.md} {
    flex: 1 1 0px;
    width: auto;

    :not(:first-of-type) {
      margin-left: 2rem;
    }

    :not(:last-of-type){
      margin-right: 2rem;
    }
  }
`;

export const CollectionLayout = ({ title, images }: Props) => {
  const rows = getImageGroups(images);
  const count = images.length;
  return (
    <>
      {rows.map((row, i) => (
        <Row key={`row-${i}`}>
          {row.map(({ id, childImageSharp: imageData }: File, j: number) => {
            const image = getImage(imageData);
            if (!image) return undefined;
            return (
              <GatsbyImage
                alt={`${title} by This Christography. Image ${
                  j + 1
                } of ${count}`}
                css={imageStyles}
                image={image}
                key={id}
              />
            );
          })}
        </Row>
      ))}
    </>
  );
};
