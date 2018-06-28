# One to Many Relationships

## Objectives

* Use `self` to reference the instance and the class
* Implement one object to many objects relationship
  * One object has many objects
  * One object belongs to another object
* Practice passing custom objects as arguments to methods


* Demonstrate single source of truth


* Infer type of method (class or instance) through naming conventions

## Pull quote / paraphrases
There are two hard things about software: Naming things and cache invalidation
Knuth

90% of code is for people to read, 10% is for the computer to execute

### Names
name conflict - name things the same name, really confusing
readability + insight
show what you are trying to do

## Modeling
Domain - words / code for some set of things in the world

Users
  have many tweets
Tweets
  belong to a user

done the basic setup


## Questions

class variable - @@name vs. CONSTANT
@name = name vs. self.name = name
why use `self` in the method title?
how important is vocabulary (instance, object, method)?

## Deliverables

* Create a User class. The class should have these methods:
  * `#initialize` which takes a username and have
  * a reader method for the username
  * `#tweets` that returns an array of Tweet instances
  * `#post_tweet` that take a message, creates a new tweet, and adds it to the user's tweet collection
* Create a Tweet class. The class should have these methods:
  * `Tweet#message` that returns a string
  * `Tweet#user` that returns an instance of the user class
  * `Tweet.all` that returns all the Tweets created.
  * `Tweet#username` that returns the username of the tweet's user
