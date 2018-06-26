# Hashes and the Internet

### Define

HTTP - hypertext transfer protocol
data
headers

* GET requests

Ask for some information from the server
get some response

```ruby
require 'rest-client'

RestClient.get(url) # return a response
# response has a body
# body is a string, formatted in some 'language'
```

* Server responses

Server-side languages
Python
Ruby
--- any programming language

Text:
HTML
Javascript
CSS

Data
JSON

Plain text vs. Rich text
Rich text - characters + formatting
Plain text - just characters

IP Address - client IP and a server IP
  list of digits
  example:
  151.101.1.140:443
  my ip address 65.207.79.74


* Gem
Package of code
ruby
installable through

use the gem with `require`

* REPL

Read
Eval
Print
Loop

* Developer console

Interact with the code that's there
Sandbox
View the elements that are on the page
View the network requests
Tracks time to load

* API
"Interface" to some other program
programs expose some API
'surface' of an application
Application Programming Interface
Web APIs - often just mean JSON 'REST' data services

How do we know what another program is going to do, depending on which messages we send it?
(how do we know which methods to call on some library? how to get particular data from some service?)

Documentation
Just looking!

* JSON (string formatted as a hash/object)

data format
Javascript Object Notation

looks like a hash
braces
key value pairs

### Challenges

* Write an application that takes a search term from a user
  * (print out the search term)
* Make a Request to the GoogleBooks API and get back some results
  * search terms go on the end of the url, like:
  * https://www.googleapis.com/books/v1/volumes?q=ruby+programming
* Display the titles, author names, and description for each book in the results
get user input:
```
gets
```
fetch data (first `gem install rest-client`)
```
require 'rest-client'
response = RestClient.get(url)
```
to parse json:
```
require 'json'
JSON.parse(string)
```
#### BONUS:
* ask for another search term after printing out the books
* list only the titles after the first search, and show the extra info only after the user chooses a book
* clear the screen between
