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
let isPaused
let likeTracker = {}

startTime = () => {
	setInterval(timer, 1000)
}

timer = () => {
	if (!isPaused) {
		++counter.innerHTML
	}
}

handlePause = () => {
	// if game isn't paused, pause the game
	// if game is paused, resume the game
	isPaused ? resumeGame() : pauseGame()
}

resumeGame = () => {
	isPaused = false
	pause.innerHTML = 'pause'
	allButtons.forEach(button => {
		if (button.id !== 'pause') {
			button.removeAttribute('disabled')
		}
	})
}

pauseGame = () => {
	isPaused = true
	pause.innerHTML = 'resume'
	allButtons.forEach(button => {
		if (button.id !== 'pause') {
			button.setAttribute('disabled', true)
		}
	})
}

addTime = () => {
	counter.innerHTML++
}
subtractTime = () => {
	counter.innerHTML--
}

likeNumber = () => {
	let number = counter.innerHTML //grab current value of count
	let li
	if (!likeTracker[number]) {
		//if number doesnt exist in object
		likeTracker[number] = 1
		li = document.createElement('LI')
		li.id = number
		li.innerText = `${number} has been liked 1 time`
		likes.appendChild(li)
	} else {
		// number already exists, increment by 1 each time its clicked
		likeTracker[number] += 1
		li = document.getElementById(number) //grabbing the LI and changing innertext based on value
		li.innerText = `${number} has been liked ${likeTracker[number]} times`
	}
}

appendComment = e => {
	e.preventDefault()
	let commentEl = document.createElement('p') // create new element for each comment
	commentEl.innerText = commentInput.value // set the innerText to be the value of the commentInput (from user)
	comments.appendChild(commentEl) // add newly created element to comments div
	form.reset() // or set value to empty string here
}

document.addEventListener('DOMContentLoaded', startTime)
pause.addEventListener('click', handlePause)
plus.addEventListener('click', addTime)
minus.addEventListener('click', subtractTime)
heart.addEventListener('click', likeNumber)
form.addEventListener('submit', appendComment)
