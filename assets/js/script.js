// TODO: Declare any global variables we need
let pennyImage = document.querySelector ("#penny-image")
let flipButton = document.querySelector ("#flip")
let clearButton = document.querySelector ("#clear")
let statusMeassage = document.querySelector ("#status")
let numberHeadsText = document.querySelector ("#heads")
let numberTailsText = document.querySelector ("#tails")
let percentHeadsText = document.querySelector ("#heads-percent")
let percentTailsText = document.querySelector("#tails-percent")

// value variable
let numberHeads = 0
let numberTails = 0
let percentHeads = 0
let percentTails = 0
let total = 0
document.addEventListener('DOMContentLoaded', function () {
   
    // You can remove it once you see it in your browser console in the developer tools
    //console.log('Hi')

    // TODO: Add event listener and handler for flip and clear buttons

    // Flip Button Click Handler
    flipButton.addEventListener("click" , function (e){
        // TODO: Determine flip outcome
        let result = Math.round(Math.random()* 100)
        console.log("The result value", result)
        total ++
        if (result < 50){
            numberHeads ++
            console.log("numberHeads value", numberHeads)
            numberHeadsText.textContent = `${numberHeadsText}`
            statusMeassage.textContent = "You Flipped Tails!"
            pennyImage.src = "C:\Users\shane\Documents\GitHub\FSI-Implement-Coin-Flipper\assets\images\penny-heads.jpg"
        } else {
            numberTails ++
            console.log("numberTails value" , numberTails)
            numberTailsText.textContent = `${numberTailsText}`
            statusMeassage.textContent = "You flipped Tails!"
            pennyImage.src = "C:\Users\shane\Documents\GitHub\FSI-Implement-Coin-Flipper\assets\images\penny-tails.jpg"
        }
        percentHeads = (numberHeads/total) * 100
        percentHeadsText.textContent = `${percentHeads}%`
        percentTails = (percentTails/total) * 100
        percentTailsText.textContent = `${percentTails}%`
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    })
    // Clear Button Click Handler
    clearButton.addEventListener("click", function (e){
        numberHeads = 0
         numberTails = 0
        percentHeads = 0
        percentTails = 0
         total = 0
         numberHeadsText.textContent = `${numberHeadsText}`
         numberTailsText.textContent = `${numberTailsText}`
         percentHeadsText.textContent = `${percentHeads}%`
         percentTailsText.textContent = `${percentTails}%`
         statusMeassage.textContent = "lets Get Rolling!"
         pennyImage.src = "C:\Users\shane\Documents\GitHub\FSI-Implement-Coin-Flipper\assets\images\penny-heads.jpg"
    })
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})