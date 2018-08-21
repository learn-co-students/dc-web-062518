// add an event listener on DOMContentLoaded, init (callback)

function init() {
	getIngredients()
}

function getIngredients() {
	//fetch to api , get fetch to index
	//with the response , parse json
	//assuming an array, iterate through and render each ingredient (renderIngredient(ingr) )
}
function renderIngredient(ingr) {
	//manipulate DOM
	//create LI
	let li = document.createElement('li')
	li.id = ingr.id
	li.innerText = ingr.name
	//LI.id is ingredients id
	//Li.innerText is the ingredients name
	debugger
	//add event listener to li , on click : addIngredientToCurrentNachos
	//find some UL or DIV and append LI
}

// * When you click on an ingredient, that ingredient should be added to the 'Current Nachos' AND given some external API endpoint, that image should be rendered on the nacho platter

function addIngredientToCurrentNachos() {
	// this function is called when the LI is clicked
	// we will know about the event.target.id which is the ingredients id
	// create p tag , innerText is the ingredient name
	// fetchIngredientPicture(event.target.id)
}

function fetchIngredientPicture(id) {
	// console.log(id);
	// fetch to the show page of the ingredient
	// response.json()
	// with the ingredient.img_src,
	// create img element , set the image src = ingredient.img_src, append to the current nachos platter
}
