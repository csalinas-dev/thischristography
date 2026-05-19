import React, { FC } from "react";
import { graphql } from "gatsby";
import { css } from "@emotion/react";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";

import { Layout } from "components";
import styled from "@emotion/styled";
import { PageTitle, Paragraph, Section } from "core/styles";

interface Props {
  data: {
    bgImage: ImageDataLike;
    fgImage: ImageDataLike;
  };
}

const backgroundImage = css`
  height: 100vh;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;
`;

const foregroundImage = css`
  border-radius: 1rem;
  width: 100%;
`;

const Main = styled.div`
  margin-top: 100vh;
`;

const AnnouncementBanner = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  margin: 3rem 0;
  padding: 2.5rem;
  position: relative;
  text-align: center;

  &::before {
    background: #fff;
    content: "Announcement";
    font-family: montserrat, sans-serif;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    padding: 0 0.75rem;
    position: absolute;
    text-transform: uppercase;
    top: -0.625rem;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
  }
`;

const AnnouncementTitle = styled.h2`
  font-family: utopia-std, serif;
  font-size: 2rem;
  font-weight: 400;
  font-style: italic;
  line-height: 1.2em;
  margin: 0 0 1.5rem;
`;

const AnnouncementBody = styled.p`
  font-size: 1.25rem;
  line-height: 1.5em;
  margin: 0.75rem 0;
  opacity: 0.8;
`;

const IndexPage: FC<Props> = ({ data: { bgImage, fgImage } }: Props) => {
  // Get Background Image
  let bgContent = <div>Missing Homepage Image</div>;
  if (bgImage) {
    const image = getImage(bgImage);
    if (image) {
      bgContent = (
        <GatsbyImage
          alt="White Sands National Park by This Christography"
          css={backgroundImage}
          objectFit="cover"
          image={image}
        />
      );
    }
  }

  // Get Foreground Image
  let fgContent = <div>Missing Image</div>;
  if (fgImage) {
    const image = getImage(fgImage);
    if (image) {
      fgContent = (
        <GatsbyImage
          alt="Albuquerque Night Lights by This Christography"
          css={foregroundImage}
          objectFit="cover"
          image={image}
        />
      );
    }
  }

  return (
    <Layout home={true}>
      {bgContent}
      <Main>
        <PageTitle>Albuquerque Photography</PageTitle>
        <AnnouncementBanner>
          <AnnouncementTitle>
            This Christography is Closing
          </AnnouncementTitle>
          <AnnouncementBody>
            After several wonderful years of capturing your most meaningful
            moments, This Christography is no longer accepting new photoshoot
            bookings.
          </AnnouncementBody>
          <AnnouncementBody>
            It has been an incredible honor to photograph so many families,
            graduates, events, and landscapes across New Mexico and beyond.
            Thank you sincerely to every client who trusted me with your
            memories.
          </AnnouncementBody>
          <AnnouncementBody>
            The photography collection and prints store will remain available.
          </AnnouncementBody>
        </AnnouncementBanner>
        <Paragraph>
          This Christography is a photography business based in Albuquerque, New
          Mexico, specializing in family portraits, personal portraits, graduation
          portraits, automotive, aviation, and landscape photography. Chris
          Salinas has spent years capturing moments and creating memories that
          last a lifetime, inspired by talented photographers such as Peter
          McKinnon, Pat Kay, Alan Palander, Becki Peckham, and Brandon Woelfel.
        </Paragraph>
        <Paragraph>
          In addition to portrait and commercial photography, Chris is an
          accomplished landscape photographer, showcasing stunning images from
          all over the country through his online store. With a keen eye for
          detail and a love of travel, Chris has captured breathtaking images
          from across the country.
        </Paragraph>
        {fgContent}
        <Section>
          <PageTitle>Prints</PageTitle>
          <Paragraph>
            All of the landscape images you see are available to purchase from
            the online store, shipped directly to you. There are plenty of
            printing options — including lustre prints, metal prints, canvas
            prints, and pre-framed prints. Just choose the photo and the desired
            size, and receive your very own This Christography photo!
          </Paragraph>
        </Section>
      </Main>
    </Layout>
  );
};
export default IndexPage;

export const query = graphql`
  query HomepageImage {
    bgImage: imageSharp(
      fluid: { originalName: { eq: "thischristography-20200912.jpg" } }
    ) {
      id
      gatsbyImageData
    }
    fgImage: imageSharp(
      fluid: {
        originalName: { eq: "fa43f008-1974-425a-849b-9a084e14b752.jpg" }
      }
    ) {
      id
      gatsbyImageData
    }
  }
`;
