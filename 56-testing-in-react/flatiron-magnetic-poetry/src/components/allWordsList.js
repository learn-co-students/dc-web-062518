import React from 'react'
import { connect } from "react-redux";
import AllWordsListItem from "./allWordsListItem"


class AllWordsList extends React.Component {
  render(){
  return(
    <div className="words-container"><h1>Available Words</h1>
      {this.props.words.map(word =>
        <AllWordsListItem
          word={word}
        />
      )}
    </div>
  )
  }
}




const mapStateToProps = state => ({words: state.allWords})

export default connect(mapStateToProps)(AllWordsList)
