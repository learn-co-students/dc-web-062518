# React Under the Hood

- Revisiting Webpack, NPM, Babel
- Presentation and Container components
- Managing Async Data
- Revisiting the Component Lifecycle
- Virtual DOM
- Higher Order Components

## Qs

Functional Components vs. Class Components

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
