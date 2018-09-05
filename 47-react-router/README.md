## React Router

https://reacttraining.com/react-router/web/guides/philosophy

### React vs Rails Routing (Client vs. Server)
- why routing?
- window.history .pushState() .back() .forward() .go()

### Set Up
- `npm install --save react-router-dom`

### BrowserRouter
- 'Plumbing'
- Will use 1 place in our application (and one place only) at the very top level

### Route
- Conditionally render a certain component based on if the path of the url matches the path prop
- What if we leave out the path prop?
- component, render, (children)

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

### withRouter and HOCs
- Gives Route props to any component

### Revisiting BrowserRouter
- Why do we need it?
- How does it work?
