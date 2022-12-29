// wining number 19
// 19 your guess is right 
// 17 too low

// let WinningNumber = 19;
// let userGuess = +prompt("Guess a number");

// // console.log(userGuess)
// console.log(typeof userGuess, userGuess)

if(userGuess === WinningNumber){
    console.log("Your guess is right!!")
}else{
    if(userGuess < WinningNumber){
        console.log("too Low!!")
    }else{
        console.log("your guess is high")
    }
}