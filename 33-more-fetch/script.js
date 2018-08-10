function render(pokemon){
  let containerElement = document.getElementById("pokemon-container")
  let divElement = document.createElement('div')
  let h2Element = document.createElement('h2')
  let imageElement = document.createElement('img')

  containerElement.appendChild(divElement)
  divElement.appendChild(h2Element)
  divElement.appendChild(imageElement)

  imageElement.src = pokemon.sprite
  h2Element.innerText = pokemon.name
  divElement.classList.add("card")

  // containerElement.innerHTML +=
  //   `<div class="card">
  //     <h2>${pokemon.name}</h2>
  //     <img src=${pokemon.sprite}>
  // </div>`
}

document.addEventListener("DOMContentLoaded", function(){
  //first challenge, can you render bulbasaur on the page in a div?
  // render(bulbasaur)
  //second challenge, can you render all pokemon from the server?
  let button = document.querySelector('#submit')
  button.addEventListener('click', clickHandler)
  gottaFetchEmAll()
})

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

function clickHandler(event){
  event.preventDefault()
  let name = document.querySelector("#name-input").value;
  let spriteUrl = document.querySelector("#sprite-input").value;
  addNewPokemon(name, spriteUrl)
}

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
