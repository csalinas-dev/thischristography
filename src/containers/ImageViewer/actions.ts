import { Action } from 'shared/models/Action';
import { ImageInfo } from 'shared/models/ImageInfo';

type UpdateImageViewer = Action<"IMAGE_VIEWER/UPDATE", Array<ImageInfo>>;
export const updateImageViewer = (images: Array<ImageInfo>): UpdateImageViewer => ({
  type: "IMAGE_VIEWER/UPDATE",
  value: images
});

type ResetImageViewer = Action<"IMAGE_VIEWER/RESET", Array<ImageInfo>>;
export const resetImageViewer = (): ResetImageViewer => ({
  type: "IMAGE_VIEWER/RESET",
  value: []
});

type SelectImage = Action<"IMAGE_VIEWER/SELECT", ImageInfo | null>;
export const selectImage = (image: ImageInfo | null): SelectImage => ({
  type: "IMAGE_VIEWER/SELECT",
  value: image
});

export type ImageViewerActions = UpdateImageViewer | ResetImageViewer | SelectImage;