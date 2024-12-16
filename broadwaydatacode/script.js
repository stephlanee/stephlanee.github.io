// script.js
let total = 0;

// Select all images with the 'clickable' class
const images = document.querySelectorAll('.clickable');

// Loop through each image and add a click event listener
images.forEach(image => {
    image.addEventListener('click', function() {
        // Get the value stored in the 'data-value' attribute
        const value = parseInt(image.getAttribute('data-value'));
        
        // Add the value to the total
        total += value;
        
        // Update the displayed total value
        document.getElementById('totalValue').textContent = total;
    });
});

// Select the end screen and restart button elements
const endScreen = document.getElementById('endScreen');
const finalScoreElement = document.getElementById('finalScore');
//const clickCountElement = document.getElementById('clickCount');
const restartButton = document.getElementById('restartButton');
const totalValueElement = document.getElementById('totalValue');
const endScreenMessage = document.getElementById('endScreenMessage');

// Function to handle image click
images.forEach(image => {
    image.addEventListener('click', function() {
        // Get the value stored in the 'data-value' attribute
        const value = parseInt(image.getAttribute('data-value'));
        
        // Add the value to the total
        total += value;
        
        // Update the displayed total value
        totalValueElement.textContent = total;
        
        // Mark the image as clicked
        image.classList.add('clicked');
        
        // Remove the 'clicked' class after 0.5 seconds
        setTimeout(() => {
            image.classList.remove('clicked');
        }, 500);
        
        // Increment clickedImages count
        clickedImages++;
        
        // If all images have been clicked, show the end screen
        if (clickedImages === totalImages) {
            showEndScreen();
        }
    });
});

// Function to show the end screen with final score
function showEndScreen() {
   finalScoreElement.textContent = total; // Display final score
   displayEndScreenMessage(total); // Call the function to display the message
   //clickCountElement.textContent = clickedImages; // Display the total clicks
   endScreen.style.display = 'block'; // Show the end screen
}

// Function to display a custom message based on the user's score
function displayEndScreenMessage(score) {
    let message = '';
    
    if (score >= 3000) {
        message = "Great job! You're a Broadway expert!";
    } else if (score >= 2000) {
        message = "Nice work! You know your Broadway shows!";
    } else if (score >= 1000) {
        message = "Good effort! You still have a lot to learn about Broadway.";
    } else {
        message = "Keep trying! Broadway has a lot to discover!";
    }
    
    // Update the end screen message element with the appropriate message
    endScreenMessage.textContent = message;
}

// Handle the "Done" button click
const doneButton = document.getElementById('doneButton');
doneButton.addEventListener('click', function() {
    showEndScreen(); // Show the end screen when done button is clicked
});

// Function to restart the game
restartButton.addEventListener('click', function() {
    // Reset variables
    total = 0;
    clickedImages = 0;
    totalValueElement.textContent = total;
    
    // Reset images (make sure they're not visually marked as clicked)
    images.forEach(image => {
        image.classList.remove('clicked');
    });
    
    // Hide the end screen
    endScreen.style.display = 'none';
});