# Rails Forms and Validations

Goals:
  - nested params with strong params
  - associations from a form
  - Add student from the cohort edit page
  - Create a whole cohort at once (with students!)
  - More Validations

## Flow

New Student

1. action /new - create an empty student object
2. view renders the form, calls the form builder methods (name) on the student to fill in the default values
3. user types in some values
4. user submits the form - form keys are the `name=` attribute in the input elements
5. action /create, we have the `params` which have the values from the form
6. create a new student with that data

## Questions

How do we show a list of category names in the select dropdown, but post the category id?
`collection_select`

Strong Params - why things might be nil in params - maybe the form didn't have the values?

How to avoid copy / paste?!??

Code Challenge

datalist autofill autocomplete behavior in an input

## REST

* index - list of cohorts
* new - form for a new cohort
* create - handles the submission of the new form
* show - one cohort
* edit - form for editing / updating an existing cohort
* update - handles the edit form submit
* delete - should delete a cohort

## Validations

Where?
* At the client level
* At the application level
* At the database level

What?
* Rails built in validations
* Custom Validators
