# JWT Auth

- Explain the difference between Authentication vs. Authorization
- Authenticate via a basic controller action in Rails triggered by a fetch in React
- Store user data in state on login/signup
- Use localStorage to store identifying information about a user in the browser (just a user ID for now)
- Automatically fetch user information based on contents of localStorage for already logged-in users

## Authentication vs. Authorization


### Authentication
Confirming who you are
Identity

Multi-factor (password + phone, email, hardware, Authenticator, Authy)

Some kind of _proof_

### Authorization
permission - based on who you are, what are you allowed to do?

`current_user` - check role, access level
Business logic
 - if you are an admin, you can create a page
 - if you are a user, you can post a comment
 - not signed in, you can view a page, but nothing else


## Rails Authentication Review
### bcrypt
password storage (hashed, salted passwords)
  hashed - one way function
  salt - add some random string to the password 'password123' + 'aslkdfjalskdfjkasjdf'
  (rainbow table)
password_digest

has_secure_password
  password - doesn't get stored in plaintext

We don't want access to the passwords
Liability - if we have that access, that's dangerous

### /login
route - accepts the username and password
  check the username and password
start a session
send back a _cookie_ with the session info

## Authorization Review
based on the session info
before_action - check whether the user was 'Authorized' to access some resource / perform some action
either allow or respond with some error

Gems:
- Devise
- CanCanCan

## How do we do this in React?
- routes
- instead of a form submit, use a fetch
- how do we include our authentication when we're using fetch?

## Authorization and Authentication in React
Access the sessions from React?

```rails
  session[:user_id] = current_user.id # set an encrypted cookie
  # later
  session[:user_id] # read from the cookie
```

We are responsible in javascript for supplying the authentication info

## Token Auth
send back a token as data
still proving who we are

now it's on us to generate the token, send it back and forth

### Flow
☑️ user presented with a login form
☑️ sends the email + password to rails (fetch)
☑️ rails sends back "token" - contains identifying info
react includes the token with future requests to prove that it's still the user
rails checks the token and authorizes based on that info

## Token
identifies user

protection from eavesdropping - no one can read the data
protection from tampering - signed, no one can forge a signature

## JWT
advanced format for tokens

Cryptography:
- Protection from Eavesdropping
- Protection from Tampering

### In rails...
JWT Gem
1. Sign a JWT token in Rails
-> encode some data

2. Send it to react app (when the react app sends the username and password)
3. React app sends it back (store it, send it with the request)
4. Rails checks validity
-> because of JWT, we can trust that Rails app originally created the data

In summary:
- Rails has a secret key
- lock some information with that key
- Send it out, trust that no one else can read it
- Read it again, trust that no one else can tamper with it

## Questions
How to hide your secret key?
-> env

Is React State secure?
-> in general, as safe as any other javascript executing in the browser
-> XSS is a big vulnerability :/

Other attack vectors? Liabilities?
-> Scrub your logs

## React UI for Sign In
