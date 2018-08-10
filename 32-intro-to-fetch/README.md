## AJAX, Promises, and Fetch
- What is AJAX?
- What is block vs non-blocking code?

### How do we handle async code?
- For example, event listeners

### What if you have multiple async code that depend on each other?
- Given the name of the Pokemon, I want to find out the effect/description of its hidden ability

### Callback Hell
- Nested callbacks within nested callbacks
- Triangle shape
- Really hard to read and manage

### Promises and what are they
- [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- pending
- fulfilled (resolved/rejected)
- How to unwrap a promise using `.then`
- At Flatiron, we will work with promises via Fetch rather than creating our own Promises

### Welcome Fetch
- Returns a promise object
 - want to get the json data
- Built in web api


//fetch to an API
//convert the httpResponse object we get back by using .json()
//do something with that json data (console.log)

### Promise chaining
- `.then().then()`
- Easier to read, easier to manage

### What is XHR and why do not use it at Flatiron?
- It's old school

### Lab Announcements




















```XHR (web API)
  const req = new XMLHttpRequest()
  req.addEventListener("load", function(){
		console.log(JSON.parse(this.responseText))
	});
  req.open("GET", 'https://pokeapi.co/api/v2/pokemon/')
  req.send()
```
```FETCH (web API)
	fetch(`https://pokeapi.co/api/v2/pokemon/`)
	.then(response => response.json())
	.then(json => {
		console.log(json)
	})
```
