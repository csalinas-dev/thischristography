import React, { FC } from "react";
import styled from "@emotion/styled";
import { Layout } from "components";
import { breakpoints, PageTitle, Paragraph } from "core/styles";

import me from "assets/images/me.jpg";

const AboutLayout = styled.div`
  display: grid;
  grid-template-areas:
    "profile"
    "bio";
  gap: 4rem;

  @media ${breakpoints.lg} {
    grid-template-areas: "profile bio";
    grid-template-columns: 2fr 5fr;
  }
`;

const Profile = styled.div`
  grid-area: profile;
  text-align: center;
`;

const Portrait = styled.img`
  border-radius: 50%;
  margin: 2rem 0;
  max-width: 500px;
  width: 100%;
`;

const Name = styled.h1`
`;

const Bio = styled.div`
  grid-area: bio;
`;

const About: FC = () => (
  <Layout>
    <AboutLayout>
      <Profile>
        <Portrait src={me} />
        <Name>Christopher Salinas Jr.</Name>
      </Profile>
      <Bio>
        <PageTitle>About Me</PageTitle>
        <Paragraph>
          I am a freelance photographer based in Albuquerque, NM that
          specializes in portraits, weddings, automotive, and landscapes. I have
          been practicing photography for about 15 years now, but only started
          practicing professionally in March of 2019.
        </Paragraph>
        <Paragraph>
          My interest and motivation for photography is to capture and present
          all photos as close to realistic as possible. The final images
          presented to you will be my best efforts to mimic exactly as I saw at
          the time I took the photo. This mainly involves editing the lighting
          and color of the images. However, I can alter the photos upon request
          to remove acne, wounds, or other blemishes.
        </Paragraph>
        <Paragraph>
          As photography is a side-venture for me, I am a full-time software
          engineer for an IT/software company in Albuquerque, NM. I received my
          Bachelor's of Science in Computer Science (BSCS) from the University of
          New Mexico in December of 2020. Go Lobos!
        </Paragraph>
      </Bio>
    </AboutLayout>
  </Layout>
);

export default About;
