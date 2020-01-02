import { ImageInfo } from "shared/models/ImageInfo";

export interface ImageViewerState {
  images: Array<ImageInfo>;
  selected: ImageInfo | null;
}

export const initialImageViewerState: ImageViewerState = {
  images: [],
  selected: null,
};