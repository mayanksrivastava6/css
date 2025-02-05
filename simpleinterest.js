// Q1)Prompt for amount, interest rate and no. of years and calculate simple interest.
let amount = parseFloat(prompt("Enter the principal amount:"));
let interestRate = parseFloat(prompt("Enter the annual interest rate (in %):"));
let years = parseInt(prompt("Enter the number of years:"));
let simpleInterest = (amount * interestRate * years) / 100;
alert(`Simple Interest = ${simpleInterest}`);
console.log(`Simple Interest = ${simpleInterest}`);
