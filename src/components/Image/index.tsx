import React, { FC, PropsWithChildren } from 'react';
import './index.scss';

export interface ImageProps {
  id: string,
  src: string,
  alt?: string,
  height?: number,
  width?: number,
}

/**
 * Responsive image that keeps aspect ratio. Provide a height and width to override aspect ratio. Default ratio is 1:1.
 * @param image 
 */
const Image: FC<ImageProps> = (image: PropsWithChildren<ImageProps>) => {
  let ratio = 1;
  if (image.height && image.width) {
    ratio = image.height / image.width;
  }

  return (
    <div className="image" key={`image-${image.id}`} style={{ paddingTop: `${ratio * 100}%` }}>
      <img src={image.src} alt={image.alt} />
    </div>
  );
};

export default Image;