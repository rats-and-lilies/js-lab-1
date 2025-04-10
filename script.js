// JavaScript Lab 1 – Problem Solving
// Write all your code below each prompt
console.log ("hello World")
// 1. Sandwich Calculator
// Each guest gets 2 sandwiches. You have 12 guests.
// Calculate total sandwiches needed.
let sandwiches =  2
let guests = 12
let total = sandwiches + guests

console.log(total)

// 2. Movie Budget
// You have $40. A movie ticket costs $9.50.
// How many full tickets can you buy, and what's the leftover amount?
 let budget = 40
 let price = 9.50
 let leftoverAmount = budget % price
let ticketsBought = Math.floor(budget / price)

 console.log("Leftover amount", leftoverAmount)
 console.log("tickets bought", ticketsBought)

/* 3. Dog Age Converter
Convert a dog’s age to human years
(1 dog year = 7 human years)
*/
let dogYear = 1
let humanYear = 7
let dogAge = dogYear * humanYear

console.log(dogAge)


// 4. Combine and Print
// Create variables for your name, favorite food, and a hobby.
// Print a sentence using all 3.
let firstName = "Lilith"
let favoriteFood = "risotto"
let hobby = "writing music"

console.log("Hello, my name is " + firstName + " and I like " + favoriteFood + " and " + hobby + "!")


// 🌟 BONUS (Optional)
// Use prompt() to ask for the user's name, then greet them.
// let name = prompt("What's your name?");
// console.log("Hello, " + name + "!");

let name = prompt("What's your name?")
console.log ("Hello, " + name + "!")