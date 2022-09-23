import { Link } from "gatsby";
import React, { FC } from "react";
import { startsWith } from "lodash";
import { css, SerializedStyles } from "@emotion/react";
import { breakpoints } from "core/styles";

export type IconButtonProps = {
  icon: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  styles?: SerializedStyles;
  url: string;
};

const IconButton: FC<IconButtonProps> = ({ url, icon, styles, onClick }: IconButtonProps) => {
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

  if (!startsWith(url, "/" || onClick)) {
    return (
      <a
        css={linkStyles}
        href={url}
        onClick={onClick}
        rel="noopener noreferrer"
        target="_blank"
      >
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
