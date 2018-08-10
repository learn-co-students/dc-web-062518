# the-dom-challenge

To begin comment out the script tag linking to `index.min.js` in the html file.
Write your code in `challenge.js`

## Deliverables

1.  As a user, i should see the timer increment every second once the page has loaded

    * on DOMContentLoaded, startTime - some function that += innerHTML of counter by 1

2.  As a user I can pause the game, which should disable all buttons except the pause button, which should now show the text 'resume'

    * add eventListener to pause button
    * stop the counter from incrementing
    * find all buttons and disable everything except for pause button

3.  As a user, i can like an individual number of the counter. I should see the appropriate number of likes associated with that particular number

    * add eventListener to heart button
    * empty object with key-value pairs
      * key = counter.innerHTML
      * value = number of times liked
    * append comments to the screen in the correct place

4.  As a user, i can manually increment and decrement the counter as i like

    * add eventListener to plus and minus buttons that manually change innerHTML of counter by one

5.  As a user I can leave comments on my gameplay, such as "Wow, what a fun game this is"

    * add eventListener to submit button
    * callback should preventDefault()
    * get user input from input box
      **Note:I gave this element an ID!!!**
    * add comment to the DOM in the correct place
