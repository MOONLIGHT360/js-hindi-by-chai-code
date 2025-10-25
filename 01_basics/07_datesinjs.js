// Dates

/* let myDate = new Date()

console.log(myDate.toString());
console.log(myDate.toDateString());

console.log(myDate.toISOString());
console.log(myDate.toJSON());

console.log(myDate.toLocaleString()); */

// console.log(typeof myDate);

// let myCreatedDate = new Date(2005, 0, 17)
// let myCreatedDate = new Date(2005, 0, 17, 7, 27)
// let myCreatedDate = new Date("2020-01-14")
let myCreatedDate = new Date("01-17-2019")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1 );
console.log(newDate.getDate());


// `${newDate.getDay()}m and the time `

newDate.toLocaleString('default', {
    weekday: "long"

})