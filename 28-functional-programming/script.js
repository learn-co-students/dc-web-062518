//Callbacks
//.map
// let arr = [1,2,3,4,5]
// let addOneToElement = num => {return num+1}
// let addFiveToElement = num => {return num+5}
//
// // console.log(arr.map(addOneToElement))
// // arr.forEach((element) => console.log(element))
//
// function myMapper(arr, callback){
//   let newArray = []
//   for(let i=0; i<arr.length; i++){
//     newArray.push(callback(arr[i]))
//   }
//   return newArray
// }
//
// console.log(myMapper(arr, (num) => {return num+5}))

// function sayHi(){
//   console.log("hello")
// }
//
// // setTimeout(sayHi, 1000)
// let timer = setInterval(sayHi, 1000)
// function clearTimer(){
//   clearInterval(timer)
// }
//
// setTimeout(clearTimer, 5000)

// function wecolmeNewStudent(studentName, callback){
//   console.log(`Welcome, ${studentName}`)
//   callback(studentName)
// }
//

//
// wecolmeNewStudent("Jane", giveKeyCard)
// wecolmeNewStudent("Bad student", kickOut)


//Returning a function of another Function

// function WelcomeStudentToAMod(name, mod){
//   console.log(`Welcome ${name} to mod ${mod}`)
// }
//
// WelcomeStudentToAMod("Molly", 1)
// WelcomeStudentToAMod("Jen", 1)
// WelcomeStudentToAMod("peter", 1)
//
//
// WelcomeStudentToAMod("Jared", 4)
// WelcomeStudentToAMod("Will", 4)

// function giveKeyCard(somebody){
//   console.log(`${somebody}, here is your keycard`)
// }
//
// function kickOut(anotherperson){
//   console.log(`Get out of here, ${anotherperson}`)
// }
//
// function WelcomeStudentToAModFactory(mod, callback){
//   return function(name, callback){
//     console.log(`Welcome ${name} to mod ${mod}`)
//     callback(name)
//   }
// }
//
// let WelcomeStudentToModOne = WelcomeStudentToAModFactory(1)
// let WelcomeStudentToModTwo = WelcomeStudentToAModFactory(2)
// let WelcomeStudentToModThree = WelcomeStudentToAModFactory(3)
// let WelcomeStudentToModFour = WelcomeStudentToAModFactory(4)
// let WelcomeStudentToModFive = WelcomeStudentToAModFactory(5)
// WelcomeStudentToModOne("Molly", giveKeyCard)
// WelcomeStudentToModOne("Peter")
// WelcomeStudentToModFour("Jared")
// WelcomeStudentToModFour("Will")



//Closure
// function outerFunction(){
//   var a = "a"
//   console.log("inside the outer function")
//   function innerFunction(){
//     console.log(a)
//   }
//   innerFunction()
// }
//
// outerFunction()

// function createCounter(){
//   let counter = 0
//   return function(){
//     counter = counter + 1
//     return counter
//   }
// }
//
// let add = createCounter()
// let add2 = createCounter()

// function generateStudentID(){
//   let id = 0
//   return function(name){
//     id = id + 1
//     return `Welcome, ${name}. Your ID is ${id}`
//   }
// }
//
// let addnewStudent = generateStudentID()
// console.log(addnewStudent("Molly"))
// console.log(addnewStudent("Jen"))
// console.log(addnewStudent("Peter"))


//IIFEs Immediately Invoked Function Expressions
// IIFE

// let createDCCampus = function(){
//   let date = 'March 2018'
//   let location = "DC by the White House"
//   let firstCohort = "Baby Got Stack"
//   return `DC campus was opened on ${date} in ${location} with ${firstCohort}`
// }

// (function(){
//     let date = 'March 2018'
//     let location = "DC by the White House"
//     let firstCohort = "Baby Got Stack"
//     window.dcCampus = `DC campus was opened on ${date} in ${location} with ${firstCohort}`
// }())

//
// let function1 = function(){
//   console.log("hello")
// }
//
// function1()
//
//
//


//OO Programming

// class Instructor
//
//   def initialize(name, salary)
//     @name = name
//     @salary = salary
//   end
//
//   def give_raise(raise)
//     @salary = @salary + raise
//   end
//
//   def show_info
//     puts "#{@name} makes $#{@salary}"
//   end
//
// end
//
// arr = [Instructor.new("Ann", 100), Instructor.new("Paul", 100)]
//
// arr.each{ |x| x.give_raise(100)}
// arr.each{ |x| x.show_info}

//Functional Programming

// arr = [{name:"Ann", salary:100},{name:"Paul", salary:100}]
//
// function updateSalary(instructor, raise){
//   newInstructor = Object.assign({}, instructor)
//   newInstructor.salary = instructor.salary + raise
//   return newInstructor
// }
//
// function updateSalaries(instructors, raise){
//   return instructors.map(instructor => updateSalary(instructor, raise))
// }
//
// newArr = updateSalaries(arr, 100)
// console.log(newArr)
