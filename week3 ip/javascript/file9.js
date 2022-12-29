// undefined
// null

let firstName;
console.log(typeof firstName)
firstName = "harshit"
 console.log(typeof firstName, firstName)

 let myVariable = null;
 console.log(myVariable)
 myVariable = "kunal"
 console.log(myVariable, typeof myVariable)

//  console.log(typeof null); bug , error

// BigInt
let myNumber = BigInt(12);
let sameMyNumber = 123n
// console.log(myNumber)
// console.log(Number.MAX_SAFE_INTEGER)
console.log(myNumber)
console.log(myNumber + sameMyNumber)