// Generate random numbers between 1 and 6 for both players
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // Player 1's dice
var randomNumber2 = Math.floor(Math.random() * 6) + 1; // Player 2's dice

// Generate the corresponding dice image paths
var randomDiceImage1 = "./images/dice" + randomNumber1 + ".png"; // e.g., ./images/dice3.png
var randomDiceImage2 = "./images/dice" + randomNumber2 + ".png"; // e.g., ./images/dice5.png

// Update the images for both players
document.querySelector(".img1").setAttribute("src", randomDiceImage1); // Player 1's dice
document.querySelector(".img2").setAttribute("src", randomDiceImage2); // Player 2's dice

// Determine the winner and update the <h1> content
if (randomNumber1 > randomNumber2) {
  document.querySelector(".report").textContent = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector(".report").textContent = "Player 2 Wins! 🚩";
} else {
  document.querySelector(".report").textContent = "It's a Draw!";
}


function refreshPage() {
    location.reload();
}