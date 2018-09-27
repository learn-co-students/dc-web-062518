import { ADD_WORD, FETCH_WORDS, REMOVE_WORD } from "./actions.js"



const allWordsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_WORDS:
      return [...action.payload]
    default:
      return state;
  }
}


export default allWordsReducer;
