import {
  ERROR,
  LOADING_PAINTINGS,
  LOADED_PAINTINGS,
  SELECT_ACTIVE_PAINTING,
  UPDATE_PAINTING,
  SELECT_GALLERY
} from "./types";
// import artworks from "../data/artworks";

// action creator
// useful when we want to reuse an action
// moving our action logic out of our components
export function fetchPaintings() {
  return function(dispatch) {
    dispatch({ type: LOADING_PAINTINGS });
    fetch(`http://localhost:3000/paintings`)
      .then(res => res.json())
      .then(paintings => {
        dispatch({ type: LOADED_PAINTINGS, payload: paintings });
      })
      .catch(err =>
        dispatch({ type: ERROR, err: "failed to fetch paintings" })
      );
  };
}

export function selectPainting(activeID) {
  return { type: SELECT_ACTIVE_PAINTING, id: activeID };
}

// not only changes state, but also
// persists the change
// thunk action (function) instead of a normal action
// send our patch request from the thunk action
// update the state
// What should state be before and after our patch?
export function deletePainting(paintingId) {
  return function(dispatch) {
    fetch(`http://localhost:3000/paintings/${paintingId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ deleted: true })
    })
      .then(res => res.json())
      .then(json => {
        dispatch({ type: UPDATE_PAINTING, id: paintingId, painting: json });
      });
  };
}

export function likePainting(paintingId) {
  return function(dispatch, getState) {
    let painting = getState().paintings.find(
      painting => painting.id === paintingId
    );
    // bad, because this is in our store
    // painting.likes = painting.likes || 0;
    // painting.likes ||= 0
    let likes = painting.likes || 0;
    let payload = { likes: likes + 1 };

    fetch(`http://localhost:3000/paintings/${paintingId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(json => {
        dispatch({ type: UPDATE_PAINTING, id: paintingId, painting: json });
      });
  };
}

export function selectGallery(name) {
  return { type: SELECT_GALLERY, name };
}
