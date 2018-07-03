# Intro to ORMs (Object Relational Mappers)

## CRUD REVIEW

### Tweet
belongs to a user (must have user_id)
has some message content
has many likes
has many tags

### User
has a username
has many tweets

### Like
belongs to one tweet
belongs to one user

## Tag
has many tweets
