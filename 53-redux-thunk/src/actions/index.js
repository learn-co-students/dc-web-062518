import {
  FETCH_PAINTINGS,
  SELECT_ACTIVE_PAINTING,
  DELETE_PAINTING
} from "./types";
import artworks from "../data/artworks";

// action creator
// useful when we want to reuse an action
// moving our action logic out of our components
export function fetchPaintings() {
  return { type: FETCH_PAINTINGS, payload: artworks };
}

export function selectPainting(activeID) {
  return { type: SELECT_ACTIVE_PAINTING, id: activeID };
}

export function deletePainting(paintingId) {
  return { type: DELETE_PAINTING, id: paintingId };
}
