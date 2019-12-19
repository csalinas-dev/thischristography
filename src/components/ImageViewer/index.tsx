import ViewerImage from './ViewerImage';
import React, { FC, useContext, useEffect, SyntheticEvent } from 'react';
import { ImageViewerContext } from 'containers/ImageViewer/context';
import { indexOf, map } from 'lodash';
import { selectImage } from 'containers/ImageViewer/actions';
import './index.scss';

const ImageViewer: FC = () => {
  const { state, dispatch } = useContext(ImageViewerContext);
  const { selected } = state;

  useEffect(() => {
    const body = document.body;

    if (selected) {
      body.classList.add('overflow-hidden');
    } else {
      body.classList.remove('overflow-hidden');
    }
  }, [selected]);

  if (!selected) {
    return null;
  }

  const currentIndex = indexOf(state.images, state.selected);

  return (
    <div id="image-viewer">
      <button className="btn-close" onClick={handlerExit}>
        <i className="fas fa-times" />
      </button>
      {currentIndex > 0 &&
        <button className="btn-prev" onClick={handlerPrevious}>
          <i className="fas fa-chevron-left" />
        </button>
      }
      {currentIndex < (state.images.length - 1) &&
        <button className="btn-next fas fa-chevron-right" onClick={handlerNext} />
      }
      {map(state.images, ViewerImage)}
    </div>
  );

  function handlerExit() {
    const action = selectImage(null);
    dispatch(action);
  }

  function handlerPrevious() {
    const prevIndex = currentIndex - 1;
    const prev = state.images[prevIndex];
    const action = selectImage(prev);
    dispatch(action);
  }

  function handlerNext() {
    const nextIndex = currentIndex + 1;
    const next = state.images[nextIndex];
    const action = selectImage(next);
    dispatch(action);
  }

  function keydownHandler(event: SyntheticEvent) {
    // Handle Keydown for next, prev, and exit
  }
};

export default ImageViewer;