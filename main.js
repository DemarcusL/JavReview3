// console.log("sanity");

// EX 1
// 1. Input and Loops
// Create two variables called five assigned 5 and eight assigned 8. 
// Next create an if statement compairing five is less than eight. If it's true, , print “5 is less than 8”. Else, print ERROR in the console or browser.
// i will need two variables
//i will need an if statement with a true conditional
// i believe i can use a while loop here
//first we need to create two varibles with these names and values

let five = 5;
let eight = 8;
//create an if statement comparing the two variables
if (five < eight) { //If its true it will print the 1st option
    console.log('5 is less than 8');
} else { //if false it will print error
    console.log(" ERROR . . Try Again ")
}


// EX 2
// Print all even numbers from a user's given start and stop number in the console or browser.
//I belive i will need a function to gather the two start and stop points
//then we will need to take out all the values that return as even using modulous
//then we will need print those to for loop


function ex2() { // let get our two variables
    let userStart = prompt(" Enter a number for your start point ");
    let userEnd = prompt(" Enter a number for your end point ");
    // we set our index varible to userStart and end the array with userEnd
    // rememeber YOU set the index values
    //
    for (let index = userStart; index <= userEnd; index++) {
        // in this for loop , cause we know how many times we are iterating thru, we
        // the if statement is what going to Check what the for loop runs
        if (index % 2 === 0) {
            // because this has eveluated the index to be divisble by 2, therefor it being even, and giving no remainder back, that number will print
            // if the value that is endtered divisible by 2, if will print in the console
            //
            console.log(index);
        }
        // we have no else statement cause we dont need anything happening because of that

    }



}
console.log(userStart,userEnd);

// EX 3
// Ask the user to create two variables. Create a function that takes two variables and returns the largest of the two numbers in the console or browser.

// we will be asking for 2 inputs 
// I want my highest entered number to be displayed

//lets get the two inputs by prompt method
let num1 = prompt (' Enter a number #1 ');
let num2 = prompt (' Enter a number #2 ');

//we need to get the string we entered to a number to be used in this math operation
let number1 = parseInt(num1);
// console.log(number1);
let number2 = parseInt(num2);

// this will compare the two numbers and if the first term is higher it will automatically display it, if not, display the other term which by default is higher
if (number1 > number2) {
console.log(number1);

}

else {
console.log(number2);

}

// EX 4
// Create a program that takes user input. If they enter 1, call a function that prints 1. If they press 2, call a function that prints 2. If they press 3, call a function that prints 3. If they enter q, quit. Else, print ERROR in the console or browser.
//get user input
// we need to create function
function ex4() {
let num = prompt('Choose a number between 1 - 3');
    
   if (num === 1) { 
   console.log('1');
   }
   else if (num === 2) { 
   console.log('2');
   }
   else (num === 3) { 
   console.log('3');
   }

}


// EX 5
// I want the user to enter something, so i want that set with a prompt
// i want to give them an option of withdraw or deposit
// I want to display totals w/ withdrawn or deposited amount
// they should be able to quit w/ Q
function bank() {
    let account = [];
    let startBalance = prompt('Enter a starting balance number');

    let startBalanceVar = parseInt(startBalance);
    console.log(`Starting balance is ${startBalanceVar}`);

    account.push(startBalanceVar);
    

    function accountSer() {
        let customerWithdrawDeposit = prompt('Do you want to Withdraw or Deposit').toLowerCase;

        // i believe we need an if statement
        if (customerWithdrawDeposit === 'Withdraw') {
            console.log('You chose withdraw');
            let withdrawAmount = prompt('How much are you withdrawing from your current balance?');
            let withdrawAmountNum = parseInt(withdrawAmount);

            for (let index = withdrawAmountNum; index <= account.length; index++) {
                console.log(withdrawAmountNum);

            }

        }
        else (customerWithdrawDeposit === 'Deposit') {
            console.log('You chose withdraw');
            let depositAmount = prompt('How much are you adding to your current balance?');
            let depositAmountNum = parseInt(depositAmount);

            for (let index = depositAmountNum; index >= account.length; index++) {
                console.log(depositAmountNum)

            }
        }
    }
    accountSer();
}

    bank();




ex2();
ex3();
ex4();
