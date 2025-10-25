 let score = "shivam"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


// "94" => 94
// "94abc" => NaN
// true => 1 , false => 0
// " " => 0
// "" => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true; 0 =>false
// ""  => false
// "shivam" => true 


let someNumber = 58

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);



// ********************** Operations **********************

let value = 6
let negValue = -value
// console.log(negValue);

// console.log(3+8);
// console.log(8-3);
// console.log(8*3);
// console.log(8**3);
// console.log(8/3);
// console.log(8%3); // modulus operator


let str1 = "hello"
let str2 = " Shivam"

let str3 = str1 + str2
console.log(str3);

/* console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2"); */


// console.log( (4 + 5) * 9 % 3);

console.log(+true);
console.log(+"");

let num1, num2, num3

num1 = num2 = num3 =  3 + 3

let gameCounter = 100
++gameCounter;
console.log(gameCounter);


//link to study
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment