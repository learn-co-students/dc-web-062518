# Advanced Redux

- review thunks and dispatch
- see the power of getState in a thunk
- add more functionality to our application
- check out some advanced functionality (optional)

## TODO
- show galleries from list of galleries
- show spinner when loading paintings
- make delete button work
- add create / edit painting form

## Thunks and Spinners

We frequently want to show loading and error states on our components
Thunk lets us dispatch loading and error actions around our promises to make this easier

```js
function getData() {
  // thunk action!
  return function(dispatch) {
    dispatch({type: 'LOADING'})
    fetch('url_for_data')
      .then(
        res => res.json()
      ).then(data =>
        dispatch({ type: 'LOADED', data })
      ).catch(err =>
        dispatch({type: 'ERROR', err });
      )
  }
}
```

## Review and Questions

## Advanced Concepts
- Selectors and `reselect`
- ImmutableJS
- Middlewares
- Redux and React Router
- Redux and Auth
- Sagas, Observables
