# Intro to ORMs (Object Relational Mappers)

* Define Object Relational Mapper (ORM)
* Distinguish between ORM and SQL
* Demonstrate that ORMs are the pattern connecting scripting languages and databases
* Explain how the sqlite gem works as a driver or wrapper around SQL
* Use HEREDOCs saved in variables to be executed by SQL driver
* Perform persistent CRUD actions on two separate models


## Notes

Code Challenge
Noise

## CRUD REVIEW

### Tweet
belongs to a user (must have user_id)
has some message content
has many likes
has many tags

### User
has a username
has many tweets

### Tag
has many tweets
