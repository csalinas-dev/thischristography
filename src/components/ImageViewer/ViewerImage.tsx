import classnames from 'classnames';
import React, { FC, PropsWithChildren, useContext } from 'react';
import { ImageInfo } from 'shared/models/ImageInfo';
import { ImageViewerContext } from 'containers/ImageViewer/context';
import './ViewerImage.scss';

const ViewerImage: FC<ImageInfo> = (image: PropsWithChildren<ImageInfo>) => {
  const { state } = useContext(ImageViewerContext);

  const containerClasses = classnames(
    'viewer-image-container',
    { active: state.selected && state.selected.id === image.id }
  );

  return (
    <div className={containerClasses} key={`viewer-image-${image.id}`}>
      <img src={image.url} alt={image.name} className="viewer-image" />
    </div>
  );
};

export default ViewerImage;