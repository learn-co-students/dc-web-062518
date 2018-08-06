### Questions?
- About Labs


### Road Map for this Mod
 - Week 1 (Very heavy on concepts, Code Challenge Topics)
	 - JS basics and function programming
	 - JS meets DOM -> Dynamic webpages and front end development
 - Week 2 (Practice, practice, practice)
	 - Object Oriented JS
	 - LOTS of Single Page Application Mini Projects
 - Week 3
	 - APIs and building full-stack applications
	 - Project Mode

### TCFs
 - Hillary
 - Nicole
 - Bruno


### JavaScript History
- Created by Brendan Eich in 1995 over 6 months back when Netscape was the hot browser
- Wanted to turn the web into something like a desktop application
- Not related to JAVA (JS was first code named Mocha, then LiveScript)
- So vast...

### Intro to Javascript
- HTML, CSS, and JS (behavior)
 - HTML building the frame
 - CSS style
 - JS is the behavior

- Set up index.html, script.js, chrome console

### Learning a New Programming language
- How to Prepare/Learn
- How to Debug
- Documentation

### Difference between Ruby
- Javascript syntaxically strict (var, let, return)
- Everything is an object (or primitive)
- functions are objects
- JavaScript is weird.. tried to be helpful
 - coercion


### Datatypes
- What types and how many?
- Pass by value vs pass by reference
- Object [] vs .

Primitive Datatypes
- number
  - careful with floating point numbers (0.2 + 0.1 = 0.300000000001)
- string
  - concatenation vs interpolation `${variable} some more string`
- boolean
  - Boolean(var) to check truthy or falsey value
- undefined
 - declared a variable, but haven't assigned a value to it
- null
 - intentional absence of data
- symbol // don't worry

Objects
- object
- functions
- arrays

- Pass by value vs Pass by reference
```
let num = 3
function multipleByTwo(x){
	x = x * 2
	return x
}
let newNum = multipleByTwo(num)
//newNum = 6
//num = 3
```
```
let obj = {num: 3}
function multipleByTwo(someObj){
	someObj.num = someObj.num * 2
	return someObj
}
let newObj = multipleByTwo(obj)
//newObj = {num: 6}
//obj = {num: 3}
```


### JS - The Weird Parts...
- NaN is a number
 "1" + 1 is "11"
"1" * 1 = 1
"a" * 1 = NaN
== vs ===
