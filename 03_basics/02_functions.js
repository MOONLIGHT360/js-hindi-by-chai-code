function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(694, 300, 600, 839));

const user = {
    username: "Shivam",
    price: 149 
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is $
        {anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "baba",
    price: 599
})

const myNewArray = [200, 400, 900, 100, 500]

function returnSecondValue(getArray){
    return getArray[2]
}

console.log(returnSecondValue(myNewArray));