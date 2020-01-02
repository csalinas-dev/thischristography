import React from "react";
import { ImageViewerActions } from "./actions";
import { ImageViewerState } from "./state";

export const ImageViewerReducer: React.Reducer<ImageViewerState, ImageViewerActions> = (state, action) => {
  switch (action.type) {
    case "IMAGE_VIEWER/UPDATE":
    case "IMAGE_VIEWER/RESET":
      return {
        ...state,
        images: action.value
      };
    case "IMAGE_VIEWER/SELECT":
      return {
        ...state,
        selected: action.value
      };
    default:
      return state;
  }
};
