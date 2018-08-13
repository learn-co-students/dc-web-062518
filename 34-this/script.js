"use strict"
// console.log(this)
// let rob = {
//   name: "Rob",
//   greet: greet
// }
//
// let paul = {
//   name: "Paul",
//   greet: greet
// }
//
// let ann = {
//   name: "Ann"
// }
//
// function greet(){
//   console.log(`${this.name} says hi`)
// }
//
// rob.greet()
// paul.greet()
//
// window.greet()
// greet()

// function showMeThis(){
//   console.log(this)
//   this.name = "name"
//   this.name1 = "hello"
// }
// showMeThis()


// let rob = {
//   firstName: "Rob",
//   lastName: "Cobb",
//   greet: function(){
//     console.log(`${rob.getFullName()} says hi`)
//   },
//   getFullName: function(){
//     return `${this.firstName} ${this.lastName}`
//   }
// }

// rob.greet()

// let rob = {
//   firstName: "Rob",
//   lastName: "Cobb",
//   greet: function(){
//     console.log("inside greet function", this)
//     let getFullName = () => {
//       console.log("inside getFullName function", this)
//       return `${this.firstName} ${this.lastName}`
//     }
//     let fullName = getFullName()
//     console.log(`${fullName} says hi`)
//   }
// }
//
// rob.greet()

let rob = {
  name: "Rob",

}

let paul = {
  name: "Paul"
}

let ann= {
  name: "Ann"
}

function greet(otherPerson1, otherPerson2){
  console.log(`${this.name} says hi to ${otherPerson1} and ${otherPerson2}`)
}

// let paulGreet = greet.bind(paul)
// let robGreet = greet.bind(rob)
// paulGreet("ann")
// robGreet("hillary")
// paulGreet("bruno")

// let boundGreet2 = boundGreet.bind(ann)
// boundGreet2()

let boundPaul = greet.bind(paul, "rob")
boundPaul("ann")
boundPaul("hillary")

// greet.bind(rob)("bruno", "nicole")

// greet.call(paul, "ann", "hillary")
// greet.call(rob, "bruno", "nicole")
//
// greet.apply(paul, ["ann", "hillary"])
// greet.apply(rob, ["bruno", "nicole"])





























//
