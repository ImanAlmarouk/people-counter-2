/*// document.getElementById("count").innerText = 5

//let count = 0

//console.log(count)


// 1. Create a variable, myAge, and set its value to your age
//let myAge = 35

// 2. Log the myAge variable to the console
//console.log(myAge)

// 1. Create two variables, myAge and humanDogRatio
// 2. Multiply the two together and store the result in myDogAge 
// 3. Log myDogAge to the console
let myAge= 35
let humanDogRatio= 7
let myDogAge= myAge * humanDogRatio
console.log(myDogAge)


// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70
// Console.log the value after each step

let bonusPoints= 50
bonusPoints = bonusPoints+ 50
bonusPoints = bonusPoints - 75
bonusPoints = bonusPoints + 45
console.log(bonusPoints)
*/

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count

/*
// camelCase
let countEl = document.getElementById("count-el") // pass in arguments
let count= 0 
function increment() {
    count = count + 1
    countEl.innerText = count
    console.log(count)
}
*/

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count  //textContent instead of innerText to avoid the hidding space in the counStr
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
