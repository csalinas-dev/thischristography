import React, { FC, SyntheticEvent } from "react";
import { graphql } from "gatsby";
import { css } from "@emotion/react";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";

import { Layout } from "components";
import styled from "@emotion/styled";
import { breakpoints, PageTitle, Paragraph, Section, SubTitle } from "core/styles";

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
  position: relative;
`;

const TableResponsive = styled.div`
  overflow-x: auto;
  width: 100%;
`;

const Table = styled.table`
  border-collapse: collapse;

  td {
    border: 1px solid rgba(0, 0, 0, 0.24);
    padding: 0.5rem 0.75rem;
    white-space: nowrap;
  }

  tr:nth-child(2n + 1) td {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;

const ItemLabel = styled.div`
  margin-bottom: 0.5rem;
`;

const PricingButton = styled.a`
  align-items: center;
  color: rgb(0,0,0);
  display: flex;
  flex-flow: column;
  font-family: montserrat, sans-serif;
  font-size: 2rem;
  gap: .5rem;
  justify-content: center;
  left: 50%;
  opacity: .54;
  position: absolute;
  text-shadow: 0px 1px 5px rgba(0,0,0,.14);
  top: -15rem;
  transform: translateY(-100%) translateX(-50%);
  transition: opacity ease-in-out 300ms;
  z-index: 9999;
  width: 100%;

  i {
    color: rgba(0,0,0,0.54);
    font-size: 3rem
  }

  &:hover {
    opacity: 1;
  }

  &,
  &:active,
  &:visited,
  &:hover {
    text-decoration: none;
    outline: none;
  }

  @media (${breakpoints.lg}) {
    width: auto;
  }
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

  const scrollToPricing = (e: SyntheticEvent) => {
    e.preventDefault();

    const pricing = document.querySelector('#pricing') as HTMLElement | null;
    const bounds = pricing?.getBoundingClientRect();
    const pricingTop = bounds?.top;
    if (!pricingTop) return;

    window.scrollTo({
      top: pricingTop + window.scrollY,
      behavior: "smooth",
    });
  }

  return (
    <Layout>
      {bgContent}
      
      <Main>
        <PricingButton href="#" onClick={scrollToPricing}>
          <span>VIEW PRICING</span>
          <i className="fa-solid fa-chevron-down" />
        </PricingButton>
        <PageTitle>Albuquerque Photography</PageTitle>
        <Paragraph>
          This Christography is a photography business based in Albuquerque, New
          Mexico, that offers a unique blend of family portraits, personal
          portraits, graduation portraits, automotive, aviation, and landscape
          photography. The photographer behind This Christography, Chris
          Salinas, has a passion for capturing moments and creating memories
          that last a lifetime. Inspired by talented photographers such as Peter
          McKinnon, Pat Kay, Alan Palander, Becki Peckham, and Brandon Woelfel,
          Chris strives to create images that are both beautiful and inspiring.
        </Paragraph>
        <Paragraph>
          With a focus on capturing natural, candid moments, Chris provides a
          personalized experience for each of his clients. Whether you're
          looking for family portraits to hang on your wall, graduation
          portraits to commemorate a milestone, or aviation and automotive
          photography to showcase your passion, Chris will work with you to
          create images that truly reflect your individuality and style.
        </Paragraph>
        <Paragraph>
          In addition to his portrait and commercial photography services, Chris
          is also an accomplished landscape photographer, showcasing his
          stunning images from all over the country through his online store.
          With a keen eye for detail and a love of travel, Chris is constantly
          on the move, capturing breathtaking images from across the country.
        </Paragraph>
        <Paragraph>
          At This Christography, Chris is dedicated to providing his clients
          with high-quality, professional photography services that truly
          capture the essence of life. Whether you're looking for portraits that
          capture the love and laughter of your family, or landscape images that
          showcase the beauty of the world around us, Chris has the skills and
          expertise to bring your vision to life.
        </Paragraph>
        {fgContent}
        <Paragraph>
          All of the landscape images that you see are available to purchase
          from the online store, shipped directly to you. There are plenty of
          printing options! Including lustre prints, metal prints, canvas
          prints, and pre-framed prints. Just choose the photo and the desired
          size, submit, and receive your very own This Christography photo!
        </Paragraph>
        <Section id="pricing">
          <PageTitle>Pricing</PageTitle>
          <TableResponsive>
            <Table>
              <tbody>
                <tr>
                  <td>Portrait Session</td>
                  <td>$250</td>
                  <td>Individual, Couples, Family, Maternity, etc...</td>
                </tr>
                <tr>
                  <td>UNM Grad Photos</td>
                  <td>$75</td>
                  <td>
                    Pictures taken at Hodgin Hall and other spots around main
                    campus.
                  </td>
                </tr>
                <tr>
                  <td>Non-UNM Grad Photos</td>
                  <td>$150</td>
                  <td>
                    Pictures taken at a location of your choosing (see
                    travelling fees below).
                  </td>
                </tr>
                <tr>
                  <td>Automotive Session</td>
                  <td>$100</td>
                  <td>
                    Exterior and interior photos of your vehicle. Rolling shots
                    are an additional $50.
                  </td>
                </tr>
              </tbody>
            </Table>
          </TableResponsive>
          <SubTitle>Travelling Fees</SubTitle>
          <Paragraph>
            Using the one-way distance from Albuquerque to the location of the
            shoot, the round trip fee is $75 for every 50 miles. For example
          </Paragraph>
          <ul className="fa-ul">
            <li>
              <span className="fa-li">
                <i className="fas fa-route" />
              </span>
              <ItemLabel>0 - 50 miles: included in price.</ItemLabel>
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-route" />
              </span>
              <ItemLabel>50 - 100 miles: $75</ItemLabel>
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-route" />
              </span>
              <ItemLabel>100 - 150 miles: $150</ItemLabel>
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-route" />
              </span>
              <ItemLabel>150 - 200 miles: $225</ItemLabel>
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-route" />
              </span>
              <ItemLabel>and so on...</ItemLabel>
            </li>
          </ul>
        </Section>
        <Section>
          <PageTitle>Session Information</PageTitle>
          <Paragraph>
            A photoshoot consists of a 1 to 2 hour session at a location of your
            choosing (ask Chris for recommendation, if you need help choosing).
            You may bring multiple outfits, but please let Chris know ahead of
            time.
          </Paragraph>
          <Paragraph>
            All photoshoots require a{" "}
            <strong>non-refundable booking fee</strong> of{" "}
            <em>$50.00 or 50% of the travelling fee, whichever is greater</em>.
            The amount will go towards your total balance.
          </Paragraph>
          <Paragraph>
            At the end of your session, you may pay the remaining balance:
          </Paragraph>
          <ul className="fa-ul">
            <li>
              <span className="fa-li">
                <i className="fas fa-money-bill-wave" />
              </span>
              <ItemLabel
                css={css`
                  display: inline-block;
                  margin-bottom: 0.5rem;
                `}
              >
                In person using cash.
              </ItemLabel>
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-credit-card" />
              </span>
              <ItemLabel
                css={css`
                  margin-bottom: 0.5rem;
                `}
              >
                In person using debit or credit card.
              </ItemLabel>
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-file-invoice-dollar" />
              </span>
              <ItemLabel
                css={css`
                  margin-bottom: 0.5rem;
                `}
              >
                Online through a Square invoice (using debit or credit card).
              </ItemLabel>
            </li>
          </ul>
          <Paragraph>
            Debit/credit card processing is handled by{" "}
            <a href="https://squareup.com/us/en">Square Inc.</a>
          </Paragraph>
          <Paragraph>
            Final images will not be delivered until payment has been received.
          </Paragraph>
          <Paragraph>Checks will not be accepted.</Paragraph>
        </Section>
      </Main>
    </Layout>
  );
};
export default IndexPage;

export const query = graphql`
  query HomepageImage {
    bgImage: imageSharp(
      fluid: { originalName: { eq: "thischristography-20201010.jpg" } }
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
