# Event Listeners

## Asynchronous vs Synchronous?

## Review the Execution Stack, Event Queue, Event Loop
- example: setTimeout(function(){console.log("hello right away")}, 0)
- events are asynchronous

## .addEventListener on a DOM node
- takes in a string for the name of the event, and a callback function to be invoked when the event happens
- (optional) argument for the callback is the event itself

## Example of Events
- click event
- event listeners
- timers

## When to add an event Listener
- on load of page?
- on creation of element?

## Practice
- When click of email -> send an email
- When click of submit -> add new instructor
- When click of row -> view profile

## Some events have default behavior
- event.preventDefault()

## event.target
- event.target: the innermost node that triggers the event
- event.target vs. event.currentTarget?

## Event bubbling vs. capturing, and propagation
- a few events only capture and don't bubble (focus, blur)
- by default, event are fired during the bubbling phase
- event.stopPropagation()




## Announcement
- Try to finish The DOM Challenge today, review tomorrow morning by Nicole
- Task Lister Lite (don't do yet, will pair tomorrow)
- Gravatar, optional
