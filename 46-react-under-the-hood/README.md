# React Under the Hood

- Revisiting Webpack, NPM, Babel

- Virtual DOM
- Presentation and Container components
- Functional Components vs. Class Components

- Higher Order Components

- Managing Async Data
(loading initial data - componentDidMount)

GET a subset (filter / search)
How?
Also on a submit or onChange
triggered by an event listener
written in a callback

GET a particular one
onClick = {this.fetchPokemon}
or
(componentDidMount on component that has the data, fetch)
(refetch on componentDidUpdate)

PATCH - triggered by some UI action

POST - create / makes a new record
submit button
triggered by some UI action (or other window action)
How?
Callback function in a event listener!

DELETE
- UI action
- X - componentWillUnmount

- Revisiting the Component Lifecycle
managing async data - mostly through events!
lifecycle methods - setup for timer, manual dom interaction
using DOM properties (scroll, height)


## SearchBar

client side filter
or
fetch on change

## Webpack

allows us to import _stuff_ (can be js, css, images)
creates a 'bundle'

## NPM
node package manager
manages our environment, like Gemfile in ruby

## Babel

Converts syntax between different versions of javascript
https://astexplorer.net/




## Qs

- browser compatibility


- managing async data + component lifecycle
  - fetching + data from a form
- callback functions (when to use them)
- dynamic input (click plus, gives another text field)
  -  for loop inside of render
- Use react-router-dom
- filtering function (hogs)
- passing data 'up'
- debugging in React
  - currently guessing and checking

## Thinking in React

https://reactjs.org/docs/thinking-in-react.html

Step 1: Break The UI Into A Component Hierarchy
  -> aww app to draw heirarchy

Step 2: Build A Static Version in React
  -> use mock data

Step 3: Identify The Minimal (but complete) Representation Of UI State

```
team: []number
allPokemon: []Pokemon
detailPokemonId: number
searchInput: string
```
compute anything that can be computed (don't store anything in state more than once)


Step 4: Identify Where Your State Should Live

lowest component that can pass the props to all of the children that need it
(App)


Step 5: Add Inverse Data Flow
