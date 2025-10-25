// Primitive 

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('234')
const anotherId = Symbol('234')

console.log(id === anotherId);

// const bigNumber = 845789539057325859n



// Reference  (Non primitive)

// Array, Objects, Functions

const heros = ["Ravan", "Naagraj", "Doga"];
let myobj = {
    name : "Shivam",
    age : 18

}
const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof heros);





// +++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myuniversityname = "Presidencyuniversity"

let anothername = myuniversityname
anothername = "pu"

console.log(myuniversityname);
console.log(anothername);

let userOne = {
    userOneemail : "ram@google.com",
    upi : "ram@ybl"
}

let userTwo = userOne

userTwo.email = "ram@google.com"

console.log(userOne.email);
console.log(userTwo.email);
