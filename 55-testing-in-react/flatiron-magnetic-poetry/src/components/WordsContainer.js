import React from 'react'
import AllWordsList from "./allWordsList"
import MyWordsList from "./myWordsList"
import Header from "./Header"
import { Grid, Container } from 'semantic-ui-react'
import { fetchWords } from "../redux/actions"
import { connect } from 'react-redux'

class WordsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchWords();
  }

  render() {
    return (
      <Container>
        <Header />
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column>
              <AllWordsList />
            </Grid.Column>
            <Grid.Column>
              <MyWordsList />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default connect(null, {fetchWords})(WordsContainer)
