# Intro to React - pt. 2

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

## New Problems

NPM
- introduce script tags to include libraries
- NPM + webpack

Webpack, Babel, JSX
- difficult to read React.createElement

Each child in an array or iterator should have a unique "key" prop.

## Package Management
Ruby
  - Gemfile (Gemfile.lock) (specify dependencies)
  - bundler (`bundle install`)
  - Gems
  - `require 'name-of-gem'`

NPM and Yarn
  - package.json
  - `npm install` or `yarn install`
  - module (package)
  - `const Name = require('name-of-module')`
  - `import Name from 'name-of-module'`

## Qs

difference between

`ReactDOM.render` and `render`

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
