const addBtn = document.querySelector("#new-toy-btn");
const toyForm = document.querySelector(".container");
const newToyForm = document.querySelector(".add-toy-form");
let addToy = false;

document.addEventListener("DOMContentLoaded", getToys);

// YOUR CODE HERE

addBtn.addEventListener("click", () => {
  // hide & seek with the form
  addToy = !addToy;
  if (addToy) {
    toyForm.style.display = "block";
    // submit listener here
  } else {
    toyForm.style.display = "none";
  }
});

function getToys() {
  fetch("http://localhost:3000/toys")
    .then(response => response.json())
    .then(json => {
      json.forEach(toy => {
        renderToy(toy);
      });
    });
}

//  * h2 tag with the toy's name
//   * image tag with the src of the toy's image attribute - needs a class name of "toy-avatar"
//   * p tag with how many likes that toy has
//   * button tag with an class of "like-btn"
//
function renderToy(toy) {
  let toyCollection = document.getElementById("toy-collection");
  let divToy = document.createElement("div");
  divToy.classList.add("card");
  divToy.id = `toy-${toy.id}`;
  let h2 = document.createElement("h2");
  h2.innerText = toy.name;
  let img = document.createElement("img");
  img.src = toy.image;
  img.className = "toy-avatar";
  let p = document.createElement("p");
  p.innerText = `${toy.likes} likes`;
  let button = document.createElement("button");
  button.innerText = "like";
  button.className = "like-btn";
  button.addEventListener("click", increaseLikes);
  divToy.appendChild(h2);
  divToy.appendChild(img);
  divToy.appendChild(p);
  divToy.appendChild(button);
  toyCollection.appendChild(divToy);
}
//add new toys
// When a user clicks on the add new toy button - a POST request is sent to http://localhost:3000/toys and the new toy is added to Andy's Toy Collection.
// The toy should conditionally render to the page.

// event listener for the submit

newToyForm.addEventListener("submit", createToy);

function createToy(event) {
  event.preventDefault();
  // get info from the DOM
  let name = newToyForm.elements.namedItem("name").value;
  let image = newToyForm.elements.namedItem("image").value;

  // check to see that form inputs have info
  if (name === "" || image === "") {
    alert("Fill in both fields!");
  } else {
    // fetch post to database
    // render the toy
    postToy(name, image);
  }
  // debugger;
}

function postToy(name, image) {
  fetch("http://localhost:3000/toys", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      name: name,
      image: image,
      likes: 0
    })
  })
    .then(r => r.json())
    .then(json => {
      newToyForm.reset();
      renderToy(json);
      window.scrollTo(0, document.body.scrollHeight);
    });
}

//Add event listener to the "like" buttons
//On click, call the patch fetch and pass in like info
//Display that new like count on the page

function increaseLikes(event) {
  let toyId = event.currentTarget.parentElement.id.split("-")[1];
  let likesNumber = event.target.parentElement
    .querySelector("p")
    .innerText.split(" ")[0];
  likesNumber++;
  updateLikes(likesNumber, toyId);
}

function updateLikes(number, id) {
  fetch(`http://localhost:3000/toys/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      likes: number
    })
  })
    .then(r => r.json())
    .then(json => {
      let update = document.getElementById(`toy-${id}`);
      update.querySelector("p").innerText = `${number} likes`;
    });
}
