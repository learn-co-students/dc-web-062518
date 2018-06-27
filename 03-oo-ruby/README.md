# Intro to Object Orientation

## Objectives

* Define `object` in programming domain
* Explain the concept of sending messages
* Create a class and instantiate an instance of the class
* Explain the difference between a class and an instance
blueprint vs. copies
* Pass arguments to `new` by defining an initialize method in class
* Create instance methods
* Call methods on the implicit or explicit `self`
* Define attribute readers and writers using `attr_` macros
* Get more practice with array compositions (`each`, `map`, `select`/`filter`)

* Explain the need for variable scope and why it's important to not utilize global variables

## Objects

Point in memory that holds a blueprint
Representation of something
Holds attributes and methods (actions)
`class`
instances
`def ` - getters and setters, methods, 'give objects some ability'
customization from a baseline or blueprint
`new` - create a new object

example - Document Object Model - javascript

Representing 'things in the world' in code

'Everything is an object'
nouns
some data
some behavior

Model of the world

## Deliverables

Here is a naive implementation of a bank account in Ruby using only a hash which stores key-value pairs.

```ruby
bank_account = {"user_id": 3, "balance": 100}
```

Write an implementation of a bank account that meets the following requirements:

* can print the balance of the account
* can deposit money into the account
* can withdraw money from the account
* keeps track of the account number
* keeps track of the customer id of the account
