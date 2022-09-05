import { File } from "../types/allFile";

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

// Takes array of portraits and convert to AoA for portrait groups
export const getPortraitGroups = (portraits: File[]): File[][] => {
  if (portraits.length === 3) return [portraits];
  if (portraits.length >= 2) {
    return [portraits.slice(0,2), ...getPortraitGroups(portraits.slice(2))];
  }
  return [];
};

export const getImageGroups = (images: File[]) => {
  const portraits = images.filter(
    ({
      childImageSharp: {
        original: { height, width },
      },
    }) => height > width
  );
  const landscapes = images.filter((i) => !portraits.includes(i));
  console.log(portraits, landscapes);
  const portraitGroups = getPortraitGroups(portraits);
  console.log(portraitGroups);
};
