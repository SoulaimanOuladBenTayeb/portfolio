// script.js

// Import functions from external JS files
import { animateDiamond } from './diamond.js';
import { updateCursorPosition } from './cursor.js';

// Start the animation and cursor updates
animateDiamond();
updateCursorPosition();


import { initSlider } from './slider.js'; // Import the initSlider function

document.addEventListener('DOMContentLoaded', () => {
  initSlider();
});


// Get the elements for hamburger, close button, and overlay
const hamburger = document.querySelector('.hamburger');
const crossBtn = document.querySelector('.cross'); // Updated selector for cross button
const overlay = document.querySelector('.fullScreenOverlay'); // Ensure the correct overlay class

// Toggle the 'active' class to show or hide the overlay
hamburger.addEventListener('click', () => {
  overlay.classList.add('active');
});

crossBtn.addEventListener('click', () => {
  overlay.classList.remove('active');
});