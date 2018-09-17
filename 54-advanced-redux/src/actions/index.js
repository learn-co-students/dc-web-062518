import {
  FETCH_PAINTINGS,
  SELECT_ACTIVE_PAINTING,
  DELETE_PAINTING,
  SELECT_GALLERY
} from "./types";
// import artworks from "../data/artworks";

// action creator
// useful when we want to reuse an action
// moving our action logic out of our components
export function fetchPaintings() {
  return function(dispatch) {
    fetch(`http://localhost:3000/paintings`)
      .then(res => res.json())
      .then(paintings => {
        dispatch({ type: FETCH_PAINTINGS, payload: paintings });
      });
  };
}

export function selectPainting(activeID) {
  return { type: SELECT_ACTIVE_PAINTING, id: activeID };
}

export function deletePainting(paintingId) {
  return { type: DELETE_PAINTING, id: paintingId };
}

export function selectGallery(name) {
  return { type: SELECT_GALLERY, name };
}
