# Intro to React

- Understand build tools and show how webpack works
- Explain why React and declarative programming is special
- Start to understand the Virtual DOM
- See what a React Component actually is (an object, made by a class or function)
- Build custom components and see initial JSX

## Problems in Mod 3

Webpack
- file got long
- file management woes

React
- handling lots of renders
- clearing the DOM correctly

Patterns when using React
- lots of fetch
- don't know what's doing what - tracing becomes hard
- adding a feature is hard - have to rewrite things
- complex dependencies when adding / removing elements
- global variables to manage state

## React and the Virtual DOM

## Creating and rendering components

## Challenge

From this starter code:
```
// <div class="ui inverted orange menu">
//     <a class='item'>
//       <h2 class="ui header">
//         <i class="paw icon"></i>
//         <div class="content">
//           ZooKeepr
//         </div>
//         <div class="sub header">
//           Keep track of your animals
//         </div>
//       </h2>
//     </a>
//   </div>
```

Write a function NavBar that we can use like this:
```
const Navbar = props => {
  // ...
};

ReactDOM.render(
  Navbar({
    title: 'ZooKeepr',
    icon: 'paw',
    color: 'green',
    description: 'keep track of your animals'
  }),
  document.getElementById('main')
);
```
