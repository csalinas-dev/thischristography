import React, { FC, useEffect, useState } from "react";
import dateformat from 'dateformat';
import styled from "@emotion/styled";

const Footer = styled.footer`
  align-items: center;
  display: flex;
  grid-area: footer;
  flex-flow: column nowrap;
  justify-content: center;
  padding: 4rem 0;
`;

const Modified = styled.div`
  margin-top: 1rem;
`;

const FooterWrapper: FC = () => {
  const [modified, setModified] = useState<Date | null>(null);

  useEffect(() => {
    const get = async () => {
      const response = await fetch(
        "https://api.github.com/repos/casjr13/thischristography/branches/main"
      );
      const data = await response.json();

      const date = data?.commit?.commit?.author?.date;
      if (date) {
        setModified(new Date(date));
      }
    };

    get();
  }, []);

  return (
    <Footer>
      <span>
        &copy; 2019 - {new Date().getFullYear()} This Christography. All Rights
        Reserved.
      </span>
      <Modified>{modified && <small>Last Modified: {dateformat(modified, "mmmm dS, yyyy")}</small>}</Modified>
    </Footer>
  );
};

export default FooterWrapper;
