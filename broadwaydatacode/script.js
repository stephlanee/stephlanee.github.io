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
const restartButton = document.getElementById('restartButton');
const totalValueElement = document.getElementById('totalValue');

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
   endScreen.style.display = 'block'; // Show the end screen
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