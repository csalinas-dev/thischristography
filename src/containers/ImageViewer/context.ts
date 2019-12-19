import { createContext } from 'react';
import { ImageViewerActions } from './actions';
import { ImageViewerState, initialImageViewerState } from './state';
import { ReducedContext } from 'shared/util/ReducedContext';

const defaultImageViewerContext: ReducedContext<ImageViewerActions, ImageViewerState> = {
  state: initialImageViewerState,
  dispatch: () => {}
};

export const ImageViewerContext = createContext(defaultImageViewerContext);