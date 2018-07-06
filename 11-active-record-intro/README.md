# Intro to ActiveRecord

Pokemon
Tweet
User
Like

No matter the domain, we wrote the same methods

DRY

(data)
- save
- create (insert)
- find_by_id
- update
- find_or_create_by
- all
- ...

(table)
- drop table
- create tables
- alter table
- adding columns

.schema // look at the shape of the table

## Rake

Tool for custom tasks

?
running our application
create the database
migrate the database
   X import and export
   set up the _shape_ of the database
   table manipulation commands
seed the database

## Migrations

Way of representing what commands to run to set up the database

rake db:create_migration NAME=some_meaningful_name
rake db:migrate # runs our migrations

Changing the shape of our data

rake db:migrate:status - check on the migrations

rake db:rollback

## Models

Flight
  (destination, origin...)
  rake db:create_migration NAME=create_flights
    (adds the file)

Ticket
  (row, seat, relation to customer, relation to flight)
  1. Create the table
    a. write a migration to create the table
       rake db:create_migration NAME=create_tickets
       add the columns to the migration file
    b. run rake db:migrate to run the migrations
  2. Create a class that inherits from ActiveRecord::Base

Customer

## ActiveRecord Methods

save
update
delete
`persisted?` - check if something is saved to the database

self.create
self.all
self.find
self.find_by_id
self.find_by(x: value)
self.find_by_x(value)

## Power

Migrations
Associations
Querying with where
Validations - check that certain conditions are met
