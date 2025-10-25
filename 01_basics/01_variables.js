const accountId = 725029
let accountEmail = "shivam@google.com"
var accountPassword = "12345"
accountCity = "jaipur"

// accountId = 2. // not allowed



accountEmail = "sh@sh.com"
accountPassword = "90909090"
accountCity = "Bengaluru"
console.log(accountId);

/* 
Prefer not to use var 
becauae of issue in block scope and functional scope
*/



console.table([accountId, accountEmail, accountPassword, accountCity])



