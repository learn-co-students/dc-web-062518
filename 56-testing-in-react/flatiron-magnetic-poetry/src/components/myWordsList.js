import React from 'react'
import { connect } from "react-redux";
import MyWordsListItem from "./myWordsListItem"


class MyWordsList extends React.Component {
  render(){
  return(
    <div className="words-container"><h1>My Poetry</h1>
      {this.props.words ? this.props.words.map(word =>
        <MyWordsListItem
          word={word}
        />
    ) : null}
    </div>
  )
  }
}




const mapStateToProps = state => ({words: state.myWords})

export default connect(mapStateToProps)(MyWordsList)
