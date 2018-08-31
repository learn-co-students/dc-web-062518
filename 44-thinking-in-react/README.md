# Thinking in React

- Thinking in React
- Planning our state
- Planning our components
- Presentation and Container components
- Managing Async Data


## Qs

pass information from parent to child, from _child to parent_
reasoning about functions as props
how to debug in react
JSX and where it starts and stops
onClick - call a function with some data that's in scope, but later (arrow functions)
event pooling
_why_ to do the things we do


<button>
<Button>

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
