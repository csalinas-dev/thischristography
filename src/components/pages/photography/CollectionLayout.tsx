import styled from "@emotion/styled";
import { whiteframes } from "core/styles";
import React from "react";

interface Props {
  caption: string,
  images: string[]
}

const Image = styled.img`
  box-shadow: ${whiteframes.shadows[12]};
  margin: 64px 0;
  width: 100%;
`;

/*
===============================================================================
  LAYOUT ALGORITHM
===============================================================================
1. Compute the portrait groups.
  If length == 3, return 3 in a single group.
  If length >= 2, take 2. Repeat process with the rest.
  Otherwise, stop processing. There are 0 or 1 images.
2. Compare number of landscapes (NOL) with the number of portrait groups (NOPG).
  Remove excess until NOPG and NOL are within 1.
    Take the first n+1, where n is the smaller of the two groups.
      For example, if NOPG is 2 and NOL is 5, only take the first 3 of NOL.
  Start with the bigger value, and alternate.
    Using above example: L, PG, L, PG, L
*/
export const CollectionLayout = ({ caption, images }: Props) => (
  <>
    {images.map((url: any, i: number) => (
      <Image key={url} src={url} alt={`${i}. ${caption}`} />
    ))}
  </>
);
