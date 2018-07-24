# Rails Associations

Goals:
  - collection_select
  - edit
  - nested params with strong params
  - associations from a form
  - ActiveRecord Validations

Super Goal:
  - Add student from the cohort edit page
  - Create a whole cohort at once (with students!)

## Questions

What happens in the `if` statement of the update action?
ditto for create

ActiveRecord Validations

What's this?
```
def method(*args)
  # makes args an array
  ## can do **kwargs for a hash
end
```

How do the url helpers work?
e.g. `post_path(id), post_path(@post)`
* switching on the class of the input

```
resources :users # => basic RESTful routes
# manual mode
get 'users' # index

post 'users/toggle_fizz', to: 'users#handle_toggle' # we can still define an action to handle this
```

`create` vs `create!` (update, etc.)
bang methods raise errors on failure

delete button - could use button_to

When should we create private method that accepts arguments?

## REST

* index - list of cohorts
* new - form for a new cohort
* create - handles the submission of the new form
* show - one cohort
* edit - form for editing / updating an existing cohort
* update - handles the edit form submit
* delete - should delete a cohort
