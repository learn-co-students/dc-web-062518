# ActiveRecord Associations

## Review

Control the shape

Migrations
Change the shape of our database
  create_table
  add_column

rake commands:

  rake db:create_migration NAME=some_name - creates a migration
  rake db:migrate - alters the tables by running the migrations
  rake db:rollback - undoes a migration
  rake db:seed - runs the seed file (creates the sample data)

  rake console - like a pry, after your code has been loaded

Methods for creating data / managing data

  self.new
    creates an instance in Ruby
  #save
    saves that ruby instance to the database
  self.create
    creates the ruby instance _and_ saves to the database


## Associations

attr_accessor
instance variables to track the relationships

associates
links this information

belongs_to :flight
  defines the readers and writers of the name that you give it
  uses the foreign key (:flight_id)

has_many
  defines methods - readers and writers for the name

has_many through


## Migrations

## Models

Flight
  (destination, origin...)

Ticket
  (row, seat, relation to customer, relation to flight)

Customer
  has_many tickets
  has_many flights through tickets
  id
  name
  <!-- birthday -->
  <!-- address -->
  <!-- SSN -->
  <!-- password -->

## Macros
methods that define other methods
'metaprogramming'

belongs_to
has_many
has_many (), through: ()
