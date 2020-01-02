import ViewerImage from './ViewerImage';
import React, { FC, useContext, useEffect } from 'react';
import { ImageViewerContext } from 'containers/ImageViewer/context';
import { indexOf, map } from 'lodash';
import { selectImage } from 'containers/ImageViewer/actions';
import './index.scss';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const ImageViewer: FC = () => {
  const { state: { selected, images }, dispatch } = useContext(ImageViewerContext);

  useEffect(() => {
    // Add key down listener and remove ability to scroll
    document.body.classList.add('overflow-hidden');
    window.addEventListener("keydown", handleKey, true);

    return () => {
      // Remove key down listener and add ability to scroll
      document.body.classList.remove('overflow-hidden');
      window.removeEventListener("keydown", handleKey, true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  // Calculate Indices
  const lastIndex = images.length - 1;
  const currentIndex = indexOf(images, selected);
  const prevIndex = currentIndex === 0 ? lastIndex : (currentIndex - 1);
  const nextIndex = currentIndex === lastIndex ? 0 : (currentIndex + 1)

  return (
    <div id="image-viewer">
      <OverlayTrigger
        placement="left"
        overlay={<Tooltip id="tooltip-close" className="d-none d-lg-inline-block">Escape</Tooltip>}
      >
        <button className="btn-close" onClick={exit}>
          <i className="fas fa-times"/>
        </button>
      </OverlayTrigger>
      <OverlayTrigger
        placement="right"
        overlay={<Tooltip id="tooltip-prev" className="d-none d-lg-inline-block">Left Arrow</Tooltip>}
      >
        <button className="btn-prev" onClick={() => move(prevIndex)}>
          <i className="fas fa-chevron-left"/>
        </button>
      </OverlayTrigger>
      <OverlayTrigger
        placement="left"
        overlay={<Tooltip id="tooltip-next" className="d-none d-lg-inline-block">Right Arrow</Tooltip>}
      >
        <button className="btn-next" onClick={() => move(nextIndex)}>
          <i className="fas fa-chevron-right"/>
        </button>
      </OverlayTrigger>
      {map(images, ViewerImage)}
    </div>
  );

  function exit() {
    const action = selectImage(null);
    dispatch(action);
  }

  function move(index: number) {
    const action = selectImage(images[index]);
    dispatch(action);
  }

  function handleKey(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowLeft':
        move(prevIndex);
        break;
      case 'ArrowRight':
        move(nextIndex);
        break;
      case 'Escape':
        exit();
        break;
      default:
        break;
    }
  }
};

export default ImageViewer;