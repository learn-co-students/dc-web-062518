document.addEventListener("DOMContentLoaded", function(){
  let button = document.querySelector('#submit')
  button.addEventListener('click', submitHandler)
  let ediButton = document.querySelector('#submit-edit')
  ediButton.addEventListener('click', updateHandler)
  gottaFetchEmAll()
})

function getPokemonContainer(){
  return document.getElementById("pokemon-container")
}

function render(pokemon){
  let divElement = document.createElement('div')
  let h2Element = document.createElement('h2')
  let imageElement = document.createElement('img')
  let deleteButton = document.createElement('button')

  getPokemonContainer().appendChild(divElement)
  divElement.appendChild(h2Element)
  divElement.appendChild(imageElement)
  divElement.appendChild(deleteButton)
  divElement.id = `pokemon-${pokemon.id}`

  deleteButton.innerText = 'Delete'
  deleteButton.id = `delete-${pokemon.id}`
  imageElement.src = pokemon.sprite
  h2Element.innerText = pokemon.name
  divElement.classList.add("card")

  deleteButton.addEventListener('click', deleteHandler)
  divElement.addEventListener('click', editHandler)
}

function submitHandler(event){
  event.preventDefault()
  let name = document.querySelector("#name-input").value;
  let spriteUrl = document.querySelector("#sprite-input").value;
  addNewPokemon(name, spriteUrl)
}

function deleteHandler(event){
  event.stopPropagation()
  let pokemonId = event.target.id.split('-')[1]
  deletePokemon(pokemonId)
}

function updateHandler(event){
  event.preventDefault()
  let pokemonId = document.querySelector('#id-edit').value
  let name = document.querySelector("#name-edit").value;
  let spriteUrl = document.querySelector("#sprite-edit").value;
  patchPokemon(pokemonId, name, spriteUrl)
}

function editHandler(event){
  let divElement = event.currentTarget
  let id = divElement.id.split('-')[1]
  let name = divElement.querySelector('h2').innerText
  let imgUrl = divElement.querySelector('img').src
  document.querySelector('#id-edit').value = id
  document.querySelector('#name-edit').value = name
  document.querySelector('#sprite-edit').value = imgUrl
}

//get all fetch
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
function addNewPokemon(name, spriteUrl){
  fetch(`http://localhost:3000/pokemon/`, {
    "method": "POST",
    headers: {
      "Content-Type": "application/json",
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

//delete fetch
function deletePokemon(id){
  fetch(`http://localhost:3000/pokemon/${id}`, {
    "method": "DELETE"
  }).then(response => response.json())
  .then(jsonData => {
    pokemonElement = document.querySelector(`#pokemon-${id}`)
    getPokemonContainer().removeChild(pokemonElement)
  })
}

//patch fetch
function patchPokemon(id, name, spriteUrl){
  fetch(`http://localhost:3000/pokemon/${id}`, {
    "method": "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    "body": JSON.stringify({
      "name": name,
      "sprite": spriteUrl
    })
  }).then(response => response.json())
  .then(jsonData => {
    pokemonElement = document.querySelector(`#pokemon-${id}`)
    pokemonElement.querySelector('h2').innerText = jsonData.name
    pokemonElement.querySelector('img').src = jsonData.sprite
  })
}
