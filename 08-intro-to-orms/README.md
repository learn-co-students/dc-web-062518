# Intro to ORMs (Object Relational Mappers)

* Define Object Relational Mapper (ORM)
  Maps ruby objects to database tables

class Tweet <=> table tweets
instance_vars (attr_accessor) <=> sql columns

methods <=> SQL commands
  CRUD

* Distinguish between ORM and SQL
* Demonstrate that ORMs are the pattern connecting scripting languages and databases

* Explain how the sqlite gem works as a driver or wrapper around SQL

Driver - sends the actual sqlite commands to sqlite3
ORM - uses the driver to send specific commands

* Use HEREDOCs saved in variables to be executed by SQL driver


* Perform persistent CRUD actions on two separate models

## Notes

Code Challenge
  - Ruby Objects
  - class methods
  - instance methods
  - iteration methods
  - relationships between objects
    - belongs to
    - has many
    - has many through

Read the instructions
Test your code as you work with it (no tests provided)
  - pry
  - irb

Open internet
Closed note

  no inheritance
  no modules
  no scraping
  no sql

starter code may be provided

practice will go out on slack

Noise

## CRUD REVIEW

## Twitter App
...not great

persist our tweets
have different users
...have different hashtags on our tweets

### Tweet
belongs to a user (must have user_id)
has some message content
has many likes
has many tags

Store in the database
- database
- table
  - columns (user_id / username, likes, id, message, tags)
- connect the tweet model to the database

CRUD

```
#save (Create)
read (find in different ways)
  #find_by_id
#update
#delete
.select_all_tweets
```

### User
has a username
has many tweets

### Tag (hashtag #)
has many tweets
