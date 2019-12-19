import classnames from 'classnames';
import React, { FC, PropsWithChildren, useContext } from 'react';
import { ImageInfo } from 'shared/models/ImageInfo';
import { ImageViewerContext } from 'containers/ImageViewer/context';
import './ViewerImage.scss';

const ViewerImage: FC<ImageInfo> = (image: PropsWithChildren<ImageInfo>) => {
  const { state } = useContext(ImageViewerContext);

  const imageClasses = classnames(
    'viewer-image',
    { active: state.selected && state.selected.id === image.id }
  );

  return (
    <div className="viewer-image-container">
      <img
        alt={image.name}
        className={imageClasses}
        key={`viewer-image-${image.id}`}
        src={image.url}
      />
    </div>
  );
};

export default ViewerImage;