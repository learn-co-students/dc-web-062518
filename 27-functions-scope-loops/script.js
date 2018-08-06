//- what are the differences in syntax and features

//function declaration

//funcDeclaration() //Hoisted
// function funcDeclaration(){
//   console.log("inside a function declaration")
// }
//
// // function expression
// let funcExpression = function(x){
//   return 2*x
// }
// // use and think of functions as objects
// console.log(funcExpression(10))
//
//
// //arrow function
// let funcArrow1 = (x) => {return 2*x}
// let funcArrow2 = x => {return 2*x}
// let funcArrow3 = x => 2*x // implicit return
// //super succinct
//
// console.log(funcArrow1(10))
// console.log(funcArrow2(10))
// console.log(funcArrow3(10))


// console.log(a)
//
//
// var a = "a variable"
// var b = "another variable"
// console.log(a)

// function outerFunction(){
//   var a = 1;
//   console.log("inside outerFunction")
//   function innerFunction(){
//     console.log("inside inner function")
//   }
//   innerFunction()
//   anotherFunction()
//   var b = 2;
// }
//
// function anotherFunction(){
//   console.log("inside another Function")
// }
//
// outerFunction()
// var j = 'j'

//Scope
// var
// var can be redeclared and reassigned, functional scope

//let
//cannot be redeclared, but can be reassigned, block scope

//const
//cannot be redeclared, cannot be reassigned, block scopre

// var paul = "Paul"
// var paul = "Paul Nicholsen"
// paul = "fejiao"
//
// let rob = "Rob"
// rob = "Rob Cobb"
//
// const ann = {name: "Ann"}
// ann.name = "Ann Duong"

// function myFunction(){
//   if(true){
//     teacher = "Erin"
//     var paul = "Paul"
//     let rob = "Rob"
//     const ann = "Ann"
//   }
// }
// myFunction()
// console.log(teacher)





//
// let a = "Ann"
//
// function outerFunction(){
//   let a = 'A'
//   function innerFunction(){
//   }
//   innerFunction()
//   anotherFunction()
// }
//
// function anotherFunction(){
//   console.log(a)
// }
// outerFunction()





//Loops
//while loops
//do while loops
//for Loops
//for ... in work with objs and arrays
//for ... of works with arrays only

// let obj = {key1: "a", key2: "b", key3 : "c"}
// let arr = ["a", "b", "c"]
//
// for(const x in arr){
//   console.log(arr[x])
// }
//with objects, iterating through the keys
//with arrays, iterating through the index values




// let arr = [{key:"a"}, {key:"b"}, {key:"c"}]
// // let obj = {key1: "a", key2: "b", key3 : "c"}
//
// for(const x of arr){
//   console.log(x.key)
// }
//iterate through the array values (not the index)

let arr = [3,4,5]

// let newArray = arr.forEach((element) => {console.log(element)})
//forEach doesn't return anything
let newArray = arr.find(element => {debugger; return element>3})
