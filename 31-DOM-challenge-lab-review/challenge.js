const counter = document.getElementById('counter')
const minus = document.getElementById('-')
const plus = document.getElementById('+')
const heart = document.getElementById('<3')
const pause = document.getElementById('pause')
const form = document.getElementById('comment-form')
const comments = document.getElementById('list')
const allButtons = document.querySelectorAll('button')
const likes = document.querySelector('.likes')
const commentInput = document.getElementById('comment-input')
let counterTracker = {}
let gamePaused = false

startInterval = () => {
	// start the counter
	// change the number every 1 second
	setInterval(incrementCounter, 1000)
}

incrementCounter = () => {
	// if the game is not paused, incement the counter
	// grab the counter element
	// increment by 1
	// some variable that can keep track of if the game is paused or not ..
	if (!gamePaused) {
		++counter.innerText
	}
}

pauseGame = () => {
	// disable all buttons except for pause button
	// change innerText of pause button to 'resume'
	gamePaused = true
	allButtons.forEach(button => {
		if (button.id !== 'pause') {
			button.disabled = true
		}
	})
	pause.innerText = 'resume'
}

resumeGame = () => {
	// disable all buttons except for pause button
	// change innerText of pause button to 'resume'
	gamePaused = false
	allButtons.forEach(button => {
		if (button.id !== 'pause') {
			button.disabled = false
		}
	})
	pause.innerText = 'pause'
}

handlePause = () => {
	// if the game is paused, resume the game
	// if the game is not paused, pause the game
	gamePaused ? resumeGame() : pauseGame()
}
likeNumber = () => {
	// grab the counter value at the time of the click
	// keep track of the number of times that specific number was clicked
	// object with keys of the counter.innerText , values of the number of times clicked
	// if obj[key] exists, ++ the value
	// if !obj[key] , add that key with a value of 1
	let key = counter.innerText
	if (counterTracker[key]) {
		counterTracker[key]++
		let li = document.getElementById(key)
		li.innerText = `${key} has been liked ${counterTracker[key]} times.`
	} else {
		counterTracker[key] = 1
		let li = document.createElement('li')
		li.innerText = `${key} has been liked 1 time.`
		li.id = key
		likes.appendChild(li)
	}
}

document.addEventListener('DOMContentLoaded', startInterval)

heart.addEventListener('click', likeNumber)
pause.addEventListener('click', handlePause)
