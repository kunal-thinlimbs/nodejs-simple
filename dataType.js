let x=null
// console.log("sss",typeof x)
/*
it will come as a object but it wrong from start its a premitive data type
premitive data type is boolean Number and null undefiend
*/


// what is diffrence between null and undefiend 
//

// Q.1) What is "undefined" in JavaScript ?
// Q.2) What will be the output of undefined==null & undefined===null ? Why ?
// Q.3) Can you explicitly assign "undefined" to a variable ? (let i = undefined)


// A variable is declared but no value is assigned
let myUndefinedVariable;
let see="Sssss"
see=undefined
console.log("sss",see)
console.log(myUndefinedVariable);
// Output: undefined

// The typeof operator confirms its type
console.log(typeof myUndefinedVariable);
// Output: "undefined"

// A function with no return value also results in undefined
function doSomething() {
  // no return statement
}

let result = doSomething();

console.log(result);
// Output: undefined




// A variable is explicitly assigned the value null
let myNullVariable = null;

console.log(myNullVariable);
// Output: null

// The typeof operator returns "object" for null, which is a historical quirk in the language
console.log(typeof myNullVariable);
// Output: "object"

// We can assign null later to clear a variable's value
let userProfile = { name: "Alice", email: "alice@example.com" };

// ... do something with userProfile ...

// Now, we intentionally set it to null to clear its value
userProfile = null;
console.log(userProfile);
// Output: null