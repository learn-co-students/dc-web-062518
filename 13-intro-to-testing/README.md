# Testing in Ruby

* Integrate testing into their current projects using RSpec
* Set up testing in a new project
* Define Test-Driven development
* Describe what a testing framework is and what the RSpec framework does
* Write tests for a basic function while considering entire problem space
* Describe the difference between failing, passing, and pending test cases
* Define assertions and matchers in the context of test cases
* Use output from a testing framework to guide their development

## Reasons to test
## Why Testing?
Why is Unit testing important? Most of our large code projects are more like frankenstein's monster or the Power Rangers Megazord than anything else:

![](https://media.giphy.com/media/14lpUNhInOSz9S/giphy.gif)

They're a series of components that work together to make a larger, functioning program. But when the program doesn't work, it's difficult to identify which of the components have failed. Unit testing lets us look at each individual component piece-by-piece, to see which one's broken and why.

Testing also allows us to check for specific behavior, allowing us to _assume_ or _validate_ that new code fits that behavior without having to manually check it all ourselves. We want our tests to respond to failing behavior as soon as that behavior is introduced.

Finally, we can use testing to refactor or change our code without worrying about errant behavior, since the test will catch any mistakes that we inevitably make.

## Setting up a project

## Further Reading

* http://rspec.info/documentation/
* https://ocw.mit.edu/ans7870/6/6.005/s16/classes/03-testing/
