import React from "react"
import {connect} from "react-redux"
import { removeWord } from "../redux/actions"

const wordStyle={
  display: "inline-block",
  padding: "10px",
  border: "1px solid grey",
  borderRadius: "10px",
  margin: "2px"
}

const MyWordsListItem = (props) => {
  return (
    <div style={wordStyle} onClick={() => props.removeWord(props.word)}>{props.word}</div>
  )
}
export { MyWordsListItem }
export default connect(null, {removeWord})(MyWordsListItem)
