import React, { FC, PropsWithChildren } from 'react';
import './index.scss';

export interface ImageProps {
  src: string,
  alt?: string,
  height?: number,
  width?: number,
}

/**
 * Responsive image that keeps aspect ratio. Provide a height and width to override aspect ratio. Default ratio is 1:1.
 * @param props 
 */
const Image: FC<ImageProps> = (props: PropsWithChildren<ImageProps>) => {
  let ratio = 1;
  if (props.height && props.width){
    ratio = props.height / props.width;
  }

  return (
    <div className="image">
      <img
        alt={props.alt}
        style={{
          backgroundImage: `url(${props.src})`,
          paddingTop: `${ratio * 100}%`,
        }}
      />
    </div>
  );
};

export default Image;