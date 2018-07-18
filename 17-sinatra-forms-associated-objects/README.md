# Forms and Associated Objects

## Questions

Instance variables only last during the get or post method
Is there a way around this?
Is this a good idea? no.


When you use redirect, can you use the instance variables?
no.

## Objectives

- Review what we've covered so far in Sinatra
- Learn how to manage associated objects with forms
- Learn more about the params hash
  - hashes inside of the params hash
  - arrays inside of the params hash

## Deliverables

X As a site visitor, I should be able to see a list of books. I should be able to click on each book title to see more information about that book.

X As a site visitor, I should be able to see a list of authors
  - We could build this without changing the db schema, maybe
  - Author class, table, relationship between books and authors

  x create the table
  x delete the author column / add a column author_id (to the books)
  x create a model for author
  x  make the relationships in author model, book model


X As a site visitor, I should be able to see a form where I create a book. When I create a book I can associate it with an existing author.
  Select dropdown for author

Bonus: When I create a book, I can create a new author
Bonus 2: When I create a new author, I can add books
