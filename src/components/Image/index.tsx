import React, { FC, PropsWithChildren } from 'react';
import './index.scss';

export interface ImageProps {
  src: string,
  alt?: string,
  ratio?: number,
}

const Image: FC<ImageProps> = (props: PropsWithChildren<ImageProps>) => (
  <div className="image">
    <img
      alt={props.alt}
      style={{
        backgroundImage: `url(${props.src})`,
        paddingTop: props.ratio || '100%',
      }}
    />
  </div>
);

export default Image;