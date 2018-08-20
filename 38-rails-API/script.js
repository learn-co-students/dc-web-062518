document.addEventListener("DOMContentLoaded", function(){
  fetchAllCats()
  // fetchAllHobbies()
})

function deleteCat(id){
  fetch(`http://localhost:3000/cats/${id}`, {
    method: "DELETE"
  })
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
}

function patchCat(id, quote){
  let data = {quote: quote}
  fetch(`http://localhost:3000/cats/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
}

function postNewCat(name, breed, age, quote){
  let data = {name: name, breed: breed, age: age, quote: quote}
  fetch(`http://localhost:3000/cats`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
}

function fetchAllCats(){
  fetch(`http://localhost:3000/cats`)
  .then(response => response.json())
  .then(data => {
    data.forEach(cat => renderCat(cat))
  })
}

function renderCat(cat){
  let stringOfHobbies = ''
  cat.hobbies.forEach(hobby => {
    stringOfHobbies += ` "${hobby.title}"`
  })
  let ul = document.querySelector('#cats')
  let li = document.createElement('li')
  li.innerHTML = `${cat.name} ${cat.breed} ${cat.age} ${cat.quote}, List of Hobbies:${stringOfHobbies}`
  ul.appendChild(li)
}

function fetchAllHobbies(){
  fetch(`http://localhost:3000/hobbies`)
  .then(response => response.json())
  .then(data => {
    data.forEach(hobby => renderHobby(hobby))
  })
}

function renderHobby(hobby){
  let ul = document.querySelector('#hobbies')
  let li = document.createElement('li')
  li.innerHTML = `${hobby.title}: ${hobby.description}`
  ul.appendChild(li)
}
