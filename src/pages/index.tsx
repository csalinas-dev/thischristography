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

const SplashOverlay = styled.div`
  color: #fff;
  left: 0;
  padding: 2rem;
  position: absolute;
  right: 0;
  text-align: center;
  top: 28vh;
  z-index: 1;
`;

const AnnouncementLabel = styled.div`
  font-family: montserrat, sans-serif;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  margin-bottom: 1.25rem;
  opacity: 0.7;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
  text-transform: uppercase;
`;

const AnnouncementTitle = styled.h2`
  font-family: utopia-std, serif;
  font-size: 2.5rem;
  font-weight: 400;
  font-style: italic;
  line-height: 1.2em;
  margin: 0 0 1.25rem;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
`;

const AnnouncementBody = styled.p`
  font-size: 1.1rem;
  line-height: 1.6em;
  margin: 0.5rem auto;
  max-width: 36rem;
  opacity: 0.9;
  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.5);
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
      <SplashOverlay>
        <AnnouncementLabel>Announcement</AnnouncementLabel>
        <AnnouncementTitle>This Christography is Closing</AnnouncementTitle>
        <AnnouncementBody>
          After several wonderful years of capturing your most meaningful
          moments, This Christography is no longer accepting new photoshoot
          bookings.
        </AnnouncementBody>
        <AnnouncementBody>
          Thank you sincerely to every client who trusted me with your memories.
          The photography collection and prints store will remain available.
        </AnnouncementBody>
      </SplashOverlay>
      <Main>
        <PageTitle>Albuquerque Photography</PageTitle>
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
