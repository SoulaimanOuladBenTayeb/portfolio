// diamond.js

let rotation = 0;
const diamond = document.querySelector('.diamond');

// Function to rotate the diamond
export function animateDiamond() {
  // Apply rotation animation for 1 second
  diamond.style.transition = 'transform 1s ease-in-out';
  rotation += 360; // Increment rotation angle
  diamond.style.transform = `rotate(${rotation}deg)`;

  // Remove transition after 1 second to "pause" the diamond
  setTimeout(() => {
    diamond.style.transition = 'none';
  }, 1000); // Match the animation duration
}

// Run the animation every 6 seconds
setInterval(animateDiamond, 6000);

// Start the first animation immediately
animateDiamond();
