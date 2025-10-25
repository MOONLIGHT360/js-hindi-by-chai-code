// SINGLETON
//object.create

// OBJECT LITERALS

const mySym = Symbol("key1")


const JsUser = {
    name: "Shivam",
    "full name": "SHIVAM PATEL",
    [mySym]: "mykey1",
    age: 18,
    location: "Bengaluru",
    email: "shivam@google.com",
    isLoggedIn: false,
    lastLogininDays: ["Monday", "Sunday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym]);

JsUser.email = "shivam@google.com"
// Object.freeze(JsUser)
JsUser.email = "shivam@google.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello Js user")
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());