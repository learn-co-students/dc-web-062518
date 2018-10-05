import React from "react"
import {connect} from "react-redux"
import { addWord } from "../redux/actions"


const wordStyle={
  display: "inline-block",
  padding: "10px",
  border: "1px solid grey",
  borderRadius: "10px",
  margin: "2px"
}


const AllWordsListItem = (props) => {
  return (
    <div style={wordStyle} onClick={() => props.addWord(props.word)}>{props.word}</div>
  )
}

export default connect(null, {addWord})(AllWordsListItem)
