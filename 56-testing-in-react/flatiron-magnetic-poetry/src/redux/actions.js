import words from '../data/data.js'

export const ADD_WORD = "ADD_WORD"
export const REMOVE_WORD = "REMOVE_WORD"
export const FETCH_WORDS = "FETCH_WORDS"




export function fetchWords() {
  return { type: FETCH_WORDS, payload: words }
}

export function addWord(word) {
  return { type: ADD_WORD, payload: word}
}

export function removeWord(word) {
  return { type: REMOVE_WORD, word: word}
}
