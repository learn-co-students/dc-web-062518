### Testing In React

## Table of  Contents
- TDD - what is is good for?
- Introduction to Jest
- Writing your first Jest test
- Intro to Enzyme
- Prepping your code for enzyme Tests
- Writing your first enzyme tests
- Jest snapshots Introduction
- writing your first jest snapshots
- testing your first snapshot works


## What is Test- Driven Development?
Test Driven Development (TDD) involves writing tests first for what behaviors you want your code to have, then writing your code around those tests.

It utilizes a short development cycle, called red-green-refactor:
Red: Write the test, run test suite, watch test fail
Green: Write the code to pass the test, run the test suite, watch the test pass
Refactor: Refactor the code

# Pros
- Forces you to design your code before implementing
- Module code is easier to test, so TDD forces good architecture
- Increased confidence that code behaves as expected
- Easier collaboration - team members can edit code with confidence
- Good documentation

# Cons
- Takes time, and slow down the initial development
- Can be difficult to learn best practices, knowing what to test, etc.
- Forces you to think about the expected outcome before implementing


## Introduction to Jest
For testing your React app, the React Team recommend using Jest and Enzyme.
We'll get to Enzyme in a little bit, for now let's focus on using Jest.

Jest is test framework and frame runner created by Facebook (which also built React). It provides code coverage reposts to determine how strongly tested your app is.

Jest has a 'zero configuration' experience, meaning it's ready to use as-is. If you use create-react-app, Jest comes pre-configured with your applicaiton.

## Writing Your First Jest Test
```
describe("Number checker", () => {
  it("adds two and two together and equals 4", () => {
    expect(2 + 2).toEqual(4)
    })
  })
```
Let's break down what this code is doing:
`describe` and `it` define code blocks. They contain information about what the test is doing, and a callback function with the test data.
`describe` is used to group tests together - if you have more than one test for an element, you can contain them all within a `describe` block.

```
describe("myFunction", () => {
  it("returns true if the input is even", () => {
    expect(myFunction(2)).toEqual(true)
    })
  it("returns false if the input is odd", () => {
    expect(myFunction(3)).toEqual(false)
    })
  })
```

`expect` allows you to check if a value meets certain conditions. `toEqual` is a matcher - which allows you to validate different conditions. There are lots of matchers like `.toBeNull`, `toBeLessThan(number)`, etc.


To run your Jest tests use the command `npm test`. Jest launches in watch mode (like npm start), so every time you save a file, the tests are re-run.


## Writing Jest Tests for Our Code
Now let's write a test to make sure our reducers are working. We have a reducer called `allWordsReducer` that, when given an action of `{type: "FETCH_WORDS", payload: data }` should return all the elements contained in `data`.

To test this we will need to create a new file called `redux/allWordsReducer.test.js`. In the file, we'll need to import `allWordsReducer` and React.

```
import React from 'react'
import allWordsReducer from './allWordsReducer'

describe("allWordsReducer", () => {
  it("Returns an array of all words", () => {
    let action = {type: "FETCH_WORDS", payload: ["hi", "hello"]}
    expect(allWordsReducer(undefined, action)).toEqual(["hi", "hello"])
    })
  })
```
Here, we're creating a variable called `action` that replicates a redux action, and pass that into our `allWordsReducer` as an argument. The first argument is `undefined` because we want to use our default value for state (an empty array).



## Intro to Enzyme
Enzyme is a JavaScript testing framework created by AirBnB. It provides higher-level tools to test React components. Enzyme makes it easy to render components with a tool called shallow rendering.

Shallow rendering allows you to render one level of components deep, so if you want to test the `App` component, you don't have to worry about rendering all the child elements of that component, just `App` itself.

```
//App.test.js

import React from 'react'
import App from './App'
import {shallow} from 'enzyme'

describe("App", () => {
  it("Renders successfully", () => {
    let wrapper = shallow(<App/>)
    expect(wrapper.find('div').length).toEqual(1)
    })
  })

```
Enzyme uses an adapter, and requires some set up. To use, install the following packages:

`npm install --save enzyme enzyme-adapter-react-16 react-test-renderer`

You will also need to create the file `src/setupTests.js` and include this code:
```
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
```

(More information on testing Enzyme in a create-react-app can be found [here](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests))

## Snapshot Tests
Jest has a built-in functionality called [snapshot testing](https://jestjs.io/docs/en/snapshot-testing). This takes a "snapshot" of what a component looks like at a given moment in time, and looks for any changes to that snapshot in future tests. Snapshot tests are very useful when you want to make sure your UI doesn't change unexpectedly.

To write a snapshot test, use `.toMatchSnapshot()`

```
  //components/header.test.js

  import React from 'react'
  import Header from './Header'
  import { shallow } from 'enzyme'

  it('renders correctly', () =. {
    const wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot()
    })
```

This will create a new folder called `__snapshots__` with a file called `header.test.js.snap`. Now if you make any changes to your Header, this test will fail. If the change is intentional, you can update the snapshot in the terminal with `u`.



## Resources

* [Enzyme Docs](https://airbnb.io/enzyme/)
* [Jest Docs](https://jestjs.io/docs/en/getting-started)
* [Create React App Testing tips](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests)
* [Helpful React Testing tutorial](https://testdriven.io/tdd-with-react-jest-and-enzyme-part-one)
