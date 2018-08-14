document.addEventListener("DOMContentLoaded", function(){
  let variable = "some data"
  let button = document.querySelector('#submit')
  button.addEventListener('click', submitHandler)
  let updatebutton = document.querySelector('#submit-edit')
  updatebutton.addEventListener('click', patchFetch)
  gottaFetchEmAll()
})

function render(pokemon){
  let containerElement = document.getElementById("pokemon-container")
  let divElement = document.createElement('div')
  let h2Element = document.createElement('h2')
  let imageElement = document.createElement('img')
  let deleteButton = document.createElement('button')

  containerElement.appendChild(divElement)
  divElement.appendChild(h2Element)
  divElement.appendChild(imageElement)
  divElement.appendChild(deleteButton)

  divElement.addEventListener('click', editPokemon)
  deleteButton.addEventListener('click', removePokemon)

  imageElement.src = pokemon.sprite
  h2Element.innerText = pokemon.name
  divElement.classList.add("card")
  divElement.id = `pokemon-${pokemon.id}`
  deleteButton.innerText = 'DELETE'
}

function removePokemon(event){

  let id = event.currentTarget.parentNode.id.split('-')[1]
  deleteFetch(id, event)
}

function editPokemon(event){
  let id = event.currentTarget.id.split('-')[1]
  let name = event.currentTarget.querySelector('h2').innerText
  let sprite = event.currentTarget.querySelector('img').src.trim()
  document.querySelector('#id-edit').value = id
  document.querySelector('#name-edit').value = name
  document.querySelector('#sprite-edit').value = sprite
}

function submitHandler(event){
  event.preventDefault()
  let name = document.querySelector("#name-input").value;
  let spriteUrl = document.querySelector("#sprite-input").value;
  fetchPost(name, spriteUrl)
}

//get fetch
function gottaFetchEmAll(){
  fetch(`http://localhost:3000/pokemon/`)
  .then(response => response.json())
  .then(json => {
    let newArray = json
    newArray.forEach( pokemon => {
      render(pokemon)
    })
  })
}

//post fetch
function fetchPost(name, spriteUrl){
  fetch(`http://localhost:3000/pokemon/`, {
    "method": "POST",
    "headers": {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    "body": JSON.stringify({
      "name": name,
      "sprite": spriteUrl
    })
  }).then(response => response.json())
  .then(jsonData => {
    let newPokemon = jsonData
    render(newPokemon)
  })
}

//patch Fetch
function patchFetch(event){
  event.preventDefault()
  let id = document.querySelector('#id-edit').value
  let name = document.querySelector('#name-edit').value
  let sprite = document.querySelector('#sprite-edit').value
  fetch(`http://localhost:3000/pokemon/${id}`, {
    "method": "PATCH",
    "headers": {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    "body": JSON.stringify({
      "name": name,
      "sprite": sprite
    })
  }).then(response => response.json())
  .then(jsonData => {
    let cardToUpdate = document.getElementById(`pokemon-${jsonData.id}`)
    console.log(cardToUpdate)
    cardToUpdate.innerHTML = `<h2>${jsonData.name}</h2><img src=${jsonData.sprite} /><button>DELETE</button>`
    cardToUpdate.querySelector('button').addEventListener('click', removePokemon)
  })
}

//delete fetch
function deleteFetch(id, event){
  fetch(`http://localhost:3000/pokemon/${id}`, {
    method: "DELETE"
  })
  .then(response => response.json())
  .then(json => {
    let pokemonContainer = document.querySelector('#pokemon-container')
    let pokemonCard = document.querySelector(`#pokemon-${id}`)
    pokemonContainer.removeChild(pokemonCard)
  })
}
