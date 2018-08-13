// let rob = {
//   firstName: "Rob",
//   lastName: "Cobb"
// }
//
// let paul = {
//   firstName: "Paul",
//   lastName: "Nicholsen"
// }

// function instructorFactory(firstName, lastName){
//   let teacher = {
//     firstName: firstName,
//     lastName: lastName
//   }
//   return teacher
// }
//
// let rob = instructorFactory("Rob", "Cobb")
// let paul = instructorFactory("Paul", "Nicholsen")

// function Instructor(firstName, lastName){
//   this.firstName = firstName
//   this.lastName = lastName
// }
// Instructor.prototype.lecture = function(){
//   console.log(`${this.firstName} is giving a lecture`)
// }
// Instructor.prototype.goHome = function(){
//   console.log(`${this.firstName} is leaving work`)
// }
// let rob = new Instructor("Rob", "Cobb")
// let paul = new Instructor("Paul", "Nicholsen")



//ES5 way of writing "classes"
// function Instructor(firstName, lastName){
//   this.firstName = firstName
//   this.lastName = lastName
//   Instructor.all.push(this)
// }
// Instructor.prototype.lecture = function(){
//   console.log(`${this.firstName} is giving a lecture`)
// }
// Instructor.prototype.goHome = function(){
//   console.log(`${this.firstName} is leaving work`)
// }
// Instructor.teach = function(){
//   console.log("all instructors teach")
// }
// Instructor.all = []
//
// let rob = new Instructor("Rob", "Cobb")
// let paul = new Instructor("Paul", "Nicholsen")



//ES6

class Person {
  constructor({firstName = "ann", lastName = "duong"} = {}){
    this.firstName = firstName
    this.lastName = lastName
  }

  greet(){
    console.log(`${this.firstName} says hi`)
  }
}

class Instructor extends Person {
  constructor(firstName, lastName){
    super(firstName, lastName)
    Instructor.all.push(this)
  }
  lecture(){
    console.log(`${this.firstName} is giving a lecture`)
  }
  goHome(){
    console.log(`${this.firstName} is leaving work`)
  }
  static teach(){
    console.log("all instructors teach")
  }
}
Instructor.all = []

let rob = new Instructor("Rob", "Cobb")
let paul = new Instructor("Paul", "Nicholsen")
let jane = new Person("Jane", "Doe")
































//
