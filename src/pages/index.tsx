import React, { FC } from "react";
import { graphql } from "gatsby";
import { css } from "@emotion/react";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";

import { Layout } from "components";
import styled from "@emotion/styled";
import { PageTitle, Paragraph, Section, SubTitle } from "core/styles";

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
    <Layout>
      {bgContent}
      <Main>
        <PageTitle>Albuquerque Photography</PageTitle>
        <Paragraph>
          Christopher Salinas Jr., a.k.a. This Christography, is a photographer based in Albuquerque, New Mexico.
          Specializing in portraits, automotive, aviation, and landscape
          photography.
        </Paragraph>
        {fgContent}
        <Paragraph>
          He loves to travel to new places, capturing Earth in
          all its beauty. All of the landscape images that you see will be
          available to purchase from the online store, shipped directly to you.
          There are plenty of printing options! Including lustre prints, metal
          prints, canvas prints, and pre-framed prints. Just choose the photo and the desired size, submit, and receive your very own This Christography photo!
        </Paragraph>
        <Section>
          <PageTitle>Photoshoot Pricing</PageTitle>
          <Paragraph>
            More information coming soon. In the meantime, contact Chris for
            more information.
          </Paragraph>
          <TableResponsive>
            <Table>
              <tbody>
                <tr>
                  <td>Portrait Session</td>
                  <td>$250</td>
                  <td>Individual, Couples, Family, Maternity, etc...</td>
                </tr>
                <tr>
                  <td>UNM Graduates</td>
                  <td>$75</td>
                  <td>
                    Pictures taken at Hodgin Hall and other spots around main
                    campus.
                  </td>
                </tr>
                <tr>
                  <td>All Other Graduates</td>
                  <td>$150</td>
                  <td>
                    Pictures taken at a location of your choosing (see travelling
                    fees below).
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
                <tr>
                  <td>Wedding Photography</td>
                  <td>Starting at $1250</td>
                  <td>Contact Chris for more information.</td>
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
            All photoshoots require a non-refundable booking fee of $50.00 or
            50% of the travelling fee, whichever is greater. The amount will go
            towards your total balance.
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
      fluid: { originalName: { eq: "fa43f008-1974-425a-849b-9a084e14b752.jpg" } }
    ) {
      id
      gatsbyImageData
    }
  }
`;
