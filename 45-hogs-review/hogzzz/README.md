# Questions

1 - figure out your components
2 - build the static version (using mock data)
3 - what state do you need?

a. if it never changes, it might not need to be state
b. if it can be computed from the rest of the state, it should not be in state
c. state should not depend on props

all the pigs - change from [] => loaded data
what we are sorting by
greased or not (what is our filter)

(currentPig / detail pig)
(for each hogTile, is this tile showing details?)

4 - where should the state live?

filter - App
sort - App
detail - HogTile

App to pass filter into Filter
App to pass sort into Filter
  change functions into Filter

App to pass ? into the HogContainer

HogTile to manage detail on its own

5 - implement the data flow

set the initial state
get the state to update over time




- what should be a component?
draw boxes around parts of the mock

- what if you have to change the components?
go back to the mock, fit the component heirarchy to the new mock

- state to pass data vs. state of the application

a. if it never changes, it might not need to be state

- when should we have a state?

a. if it never changes, it might not need to be state
b. if it can be computed from the rest of the state, it should not be in state
c. state should not depend on props

Minimal necessary

- callback functions on a button
- radio buttons (value boolean / string)
- filtering
- structure / plan for getting the lab completed

Thinking in React
5 steps

- accessing the local files
- passing props up and down multiple levels???
- images to load

# Hogwarts: The React app for fans of prize-winning pigs

## React Week 1 Project

## Project goals:

1.  Create an index displaying all hog tiles ✅
2.  Render each hog name and picture in a tile ✅
3.  Show the hog's details upon a user's click ✅
4.  Allow users to sort the hogs based on name and weight ✅
5.  Filter the hogs that are greased

## Project requirements:

* functional and container components (at least one of each, likely you'll have several of each)
* components using state and props
* re-renders based on client-side events

## What we have so far:

* File containing all our hog data imported into App.js
* Folder of hog images
* App.js rendering Nav , Filter , and HogList components
* App passing hogs as a prop to HogList
* HogList mapping through hogs and rendering HogTiles for each hog object
* HogTiles are getting their own picture and rendering the image, name, and details in a card
* Filter html is finished, but nothing happens when you change the select option or check the checkbox

  1)Mock:

![mock](./mock.png)

2)Data and Data Flow:

App.js -->

* Primary stateful component
* state structure: { greased: boolean, sortType: string }
* Why are hogs not in state?
* As state changes, array of hogs passed down to HogList will change
* How do we get the app's state to change when filter changes or greased is checked/unchecked?

Filter.js -->

* has dropdown for filter type
* has checkbox for greased vs ungreased
* how do we get the changes on the filter component to the HogList component?

HogList.js -->

* probably just a container component
* Maps over the sorted/filtered hogs array (coming in as props from App)
* Renders a HogTile for each hog in array (don't forget unique keys!)
* Pass hog object to HogTile as props

HogTile.js -->

* Class based component so that it can get its own image (getImage function)
* How will we get the additional details to display on a user's click?

_EXTRA CREDIT FOR THE PERSON WHO CAN FIND THE EASTER EGG IN THIS APP_
