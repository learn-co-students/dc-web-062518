import { ADD_WORD, FETCH_WORDS, REMOVE_WORD } from "./actions.js"


const myWordsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_WORD:
      return [...state, action.payload]
    case REMOVE_WORD:
      return state.filter(word => word !== action.word)
    default:
      return state
  }
}

export default myWordsReducer
