import { Link } from "gatsby";
import React, { FC } from "react";

export type IconButtonProps = {
  url: string;
  icon: string;
};

const IconButton: FC<IconButtonProps> = ({ url, icon }) => (
  <Link to={url}>
    <i className={icon} />
  </Link>
);

export default IconButton;
