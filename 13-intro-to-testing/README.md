# Testing in Ruby

* Describe what a testing framework is
* Define Test-driven development
* Integrate testing into projects using RSpec
* Write tests for a basic function
* Describe the difference between failing, passing, and pending test cases
* Define assertions and matchers in the context of test cases
* Use output from a testing framework to guide their development

## Reasons to test

- reminders for what you are trying to accomplish
- make sure that you are getting the expected output
- prevent regressions
- get error messages - tell you where your code is failing
  - tests help guide development
- organize the process around your code
  - help plan ahead, so you know the order to build things

- validation
- helping refactoring
  - modifying existing code to have the same output but a different way
  - helper functions, DRY, cleaning

- help you consider edge cases
  - different types of input
  - empty (very short)
  - large sizes
  - different characters (and character formats)
  - capitalization, spacing

## Test Driven Development

write your tests first

add a test until you have an error
fix one error at a time
every change you make, run tests

Red Green Refactor

## RSpec

testing library
rspec --init
write our tests in `spec/_name_of_file_spec.rb`

`describe` - block that describes the behavior of some part of your application

`it`
`expect`
matchers

to eq vs to be
  similar
  but `to eq` uses == (less strict)
  `to be` checks for object equality

when you run your tests:
- Error - ruby had an error
- Failure - expectation not met

## Why Testing?
Why is Unit testing important? Most of our large code projects are more like frankenstein's monster or the Power Rangers Megazord than anything else:

![](https://media.giphy.com/media/14lpUNhInOSz9S/giphy.gif)

They're a series of components that work together to make a larger, functioning program. But when the program doesn't work, it's difficult to identify which of the components have failed. Unit testing lets us look at each individual component piece-by-piece, to see which one's broken and why.

Testing also allows us to check for specific behavior, allowing us to _assume_ or _validate_ that new code fits that behavior without having to manually check it all ourselves. We want our tests to respond to failing behavior as soon as that behavior is introduced.

Finally, we can use testing to refactor or change our code without worrying about errant behavior, since the test will catch any mistakes that we inevitably make.

## Setting up a project

one spec file per model file

## Further Reading

* http://rspec.info/documentation/
* https://ocw.mit.edu/ans7870/6/6.005/s16/classes/03-testing/
