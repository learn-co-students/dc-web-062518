## React Router

https://reacttraining.com/react-router/web/guides/philosophy

### React vs Rails Routing (Client vs. Server)

Rails - backend was doing all the routing
React - client should do routing, more to it than that

#### UI elements of routing
Urls map to particular pages
Navbar
url changes as we click things
 (content changes to match)
backward and forward - history
refresh / sharable

- why routing?
- window.history .pushState() .back() .forward() .go()

just a browser API

### Set Up
- `npm install --save react-router-dom`

### Thinking in React-Router

state - in our component state
state in the url

Single Source of truth!
only keep state in one place or another - not in both!!!

Where should paintingId go?
in the url!


### BrowserRouter
- 'Plumbing'
- Will use 1 place in our application (and one place only) at the very top level

### Route
- Conditionally render a certain component based on if the path of the url matches the path prop
- What if we leave out the path prop?
  - always renders
- exact (match exactly)

- component: which component should I  render?
  - we can't pass other props in component={About}
  - do we get the props?
- render, (children)
  - use a function

### Link and NavLink
- Changes the url we see in the browser without a reload, must have a 'to' prop
- Re-renders components based on new url

### Nested Routes and Route Props
- Switch can go anywhere!
- route props: match, location, history

### Switch
- Pick one of the following routes (the first that matches) and load that component
- Don't look at the others (like an if/ else if/ else if)
- Takes in no props
- Order matters

### withRouter and HOCs
- Gives Route props to any component

### Revisiting BrowserRouter
- Why do we need it?
- How does it work?
