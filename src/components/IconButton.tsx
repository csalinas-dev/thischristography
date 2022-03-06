import { Link } from "gatsby";
import React, { FC } from "react";
import { startsWith } from "lodash";
import { css, SerializedStyles } from "@emotion/react";
import * as breakpoints from "core/styles/breakpoints";

export type IconButtonProps = {
  url: string;
  icon: string;
  styles?: SerializedStyles;
};

const IconButton: FC<IconButtonProps> = ({ url, icon, styles }) => {
  const linkStyles = css`
    align-items: center;
    border-radius: 50%;
    display: flex;
    font-size: 1rem;
    height: 1.5rem;
    justify-content: center;
    width: 1.5rem;

    &:active {
      background-color: rgba(0, 0, 0, 0.12);
    }

    @media ${breakpoints.lg} {
      height: 2.5rem;
      width: 2.5rem;
    }

    ${styles}
  `;

  if (!startsWith(url, "/")) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" css={linkStyles}>
        <i className={icon} />
      </a>
    );
  }
  return (
    <Link to={url} css={linkStyles}>
      <i className={icon} />
    </Link>
  );
};

export default IconButton;
