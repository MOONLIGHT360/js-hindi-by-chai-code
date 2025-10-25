const name = "shivam"
const repoCount = 1

// console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('shivam-ptl-com')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('v'));


const newString = gameName.substring(0,5)
console.log(newString);

const anotherString = gameName.slice(-7, 4)
console.log(anotherString);

const newStringOne = "       shivam.    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://shivam.com/shivam$234patel"

console.log(url.replace('$234', '&'))

console.log(url.includes('shivajfm'))

console.log(gameName.split('-'))