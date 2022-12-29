const myArray = ["value1", "value2"];
// let myvar1 = myArray[0];
// let myvar2 = myArray[1];

// java scipt me ha upper ke equivalent ham ek line lik sakte ha

let [myvar1,myvar2,...myNewarray] = myArray;
console.log(myvar1)
console.log(myvar2)
// console.log(myvar3)


// const [myvar1,myvar2] = myArray;
// console.log(myvar1)
// console.log(myvar2)  +++error ayega kyunke const ko change nhi kar sakte
// let myNewarray = myArray.slice(2);
// ...myNewarray jo bach gya isme store ho jaye ga
console.log(myNewarray)