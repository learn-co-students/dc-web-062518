

document.addEventListener("DOMContentLoaded", function(){
  //adding event listeners to all email elements
  let arrayEmailElements = document.querySelectorAll(".email")
  arrayEmailElements.forEach(emailElement => {
    emailElement.addEventListener('click', sendEmail)
  })

  //adding event listener to the submit button
  let form = document.querySelector('form')
  form.addEventListener('submit', onSubmit)

  //adding event listeners to all the row elements
  let arrayRowElements = document.querySelectorAll("tr")
  for(let i=1; i<arrayRowElements.length; i++){
    arrayRowElements[i].addEventListener('click', viewProfile, true)
  }

})

function sendEmail(event){
  //event.target is the node where the event tooks place
  console.log("sending email to", event.target.innerText)

}

function viewProfile(event){
  //event.currentTarget is the node where the
  //event listner is attached
  console.log("viewing profile for", event.currentTarget.innerText)

}

function onSubmit(event){
  event.preventDefault()
  let tbodyEl = document.querySelector('tbody')

  let firstNameEl = document.querySelector("#firstNameInput")
  let lastNameEl = document.querySelector("#lastNameInput")

  addNewInstructor(tbodyEl, firstNameEl.value, lastNameEl.value)

  firstNameEl.value = ''
  lastNameEl.value = ''
}



function addNewInstructor(node, firstName, lastName){
  let trElement = document.createElement('tr')
  trElement.id="row-4"
  node.appendChild(trElement)
  trElement.addEventListener('click', viewProfile)

  let tdFirstName = document.createElement('td')
  let tdLastName = document.createElement('td')
  let tdEmail = document.createElement('td')

  tdEmail.addEventListener('click', sendEmail)

  tdFirstName.innerText = `${firstName}`
  tdLastName.innerText = `${lastName}`
  tdEmail.innerText =
  `${firstName.toLowerCase()}.${lastName.toLowerCase()}@flatironschool.com`

  trElement.appendChild(tdFirstName)
  trElement.appendChild(tdLastName)
  trElement.appendChild(tdEmail)
}

function addNewInstructor2(node, firstName, lastName){
  node.innerHTML +=
  `<tr>
    <td class="firstName">${firstName}</td>
    <td class="lastName">${lastName}</td>
    <td class="email">${firstName.toLowerCase()}.${lastName.toLowerCase()}@flatironschool.com</td>
  </tr>`
}
