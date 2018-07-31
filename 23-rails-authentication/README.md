# Rails Authentication and Authorization

Yesterday:
- Define Authentication and Authorization
- Walk through Sign up / Sign in Flows
- Discuss security and ways to protect users with hashed passwords and bcrypt

Goals:
- Build Sign Up and Sign In flows in Rails
- Use Cookie-based Sessions to prevent users from having to sign in again

## "Don't roll your own Auth"

## 'Auth' = Authentication and Authorization

Authentication - you are who you say you are - verification of identity

Authorization - given who you are, what are you allowed to do
    role based (e.g. admins, users, moderators)

## Sign Up and Sign In Flows

Pages:
1. Index page / Home page with links
2. Register page ( `/users/new` `/sign_up` `/register`)
  2a. fields: username, email, password, password_confirmation, contact info..., secret questions
3. Submit the form! ( `/users/create` - handler action creates a new user from the form params)
  a. encrypt the password!
  b. email confirmation - ActionMailer docs
  c. redirect to profile / account page / sign_in
4. Visits a new page
  a. case A: user is still logged in
  b. case B: user is not logged in, prompt for pw and username
5. Sign in ( `/sign_in`) - not really a restful action
  a. finding a user by username, checking that the password is the same
  b. 'logging the user in' - need something new (cookies, sessions, [tokens])

## Social media sign in / Sign in with some provider

OAuth, Omniauth

## Domain
* User
* Treasure
* Clue

User has many treasures
Treasure belongs to user
Treasure has many clues
Clue belongs to Treasure


### Who should be able to see what?

Users have to be logged in to see any clues
Anyone can see the list of pirates
Users should only be able to create clues to their own treasures
Users should only be able to see their own treasures
Users should be able to see all the clues

## Passwords

DO NOT HAVE PLAINTEXT PASSWORDS IN YOUR DATABASE

Not only malicious actors, but also, your own liability!

encrypting the passwords - do not try this yourself
one-way hash (transformation, can't recover the value)
  check if the password is the same -> read the hashed value, compare to the hashed value of the 'new' password

salt to the 'hashed' password
  prevents 'rainbow table attack'

bcrypt
has_secure_password

## Is this the best way?
There are gems to do more for us [devise, knock, cancancan]
