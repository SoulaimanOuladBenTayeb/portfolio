// cursor.js

const header = document.querySelector("header");
let cursorX = 50, cursorY = 50; // Start in the center
let targetX = 50, targetY = 50; // Cursor target

header.addEventListener("mousemove", (e) => {
  const rect = header.getBoundingClientRect();
  targetX = ((e.clientX - rect.left) / rect.width) * 100;
  targetY = ((e.clientY - rect.top) / rect.height) * 100;
});

const overlay = document.querySelector(".fullScreenOverlay");

overlay.addEventListener("mousemove", (e) => {
  const rect = overlay.getBoundingClientRect();
  targetX = ((e.clientX - rect.left) / rect.width) * 100;
  targetY = ((e.clientY - rect.top) / rect.height) * 100;
});

// Smoothly update cursor position and adjust gradient
export function updateCursorPosition() {
  cursorX += (targetX - cursorX) * 0.05; // Adjust speed (smaller = slower)
  cursorY += (targetY - cursorY) * 0.05;

  // Update CSS variables for the gradient position
  header.style.setProperty("--cursor-x", `${cursorX}%`);
  header.style.setProperty("--cursor-y", `${cursorY}%`);
  overlay.style.setProperty("--cursor-x", `${cursorX}%`);
  overlay.style.setProperty("--cursor-y", `${cursorY}%`);

  requestAnimationFrame(updateCursorPosition); // Continuously update
}

updateCursorPosition();

// Custom cursor ring logic
const customCursor = document.createElement('div');
customCursor.classList.add('custom-cursor');
document.body.appendChild(customCursor);

// Function to update cursor position
let cursorBallX = 0, cursorBallY = 0;

document.addEventListener('mousemove', (e) => {
  cursorBallX = e.clientX;
  cursorBallY = e.clientY;

  // Position the custom cursor ring at the mouse coordinates
  customCursor.style.left = `${cursorBallX - customCursor.offsetWidth / 2}px`;
  customCursor.style.top = `${cursorBallY - customCursor.offsetHeight / 2}px`;

  // Adjust the "radius" or distance of cursor hover effect based on cursor's position
  let distance = Math.sqrt((cursorBallX - cursorX) ** 2 + (cursorBallY - cursorY) ** 2);
  if (distance < 50) {
    customCursor.style.backgroundImage = "url(https://raw.githubusercontent.com/SoulaimanOuladBenTayeb/portfolio-images/main/assets/cursorHover.png)"; // Change to hover cursor
  } else if (!customCursor.style.backgroundImage.includes("cursorHover.png")) {
    customCursor.style.backgroundImage = "url(https://raw.githubusercontent.com/SoulaimanOuladBenTayeb/portfolio-images/main/assets/cursor.png)"; // Default cursor
  }
});

// Function to handle hover state on all anchor tags
function setHoverEffectOnLinks() {
  // Query all links (<a>) on the page
  const links = document.querySelectorAll('a');

  links.forEach(link => {
    // Add event listener for mouseenter to change the cursor image
    link.addEventListener('mouseenter', () => {
      customCursor.style.backgroundImage = "url(https://raw.githubusercontent.com/SoulaimanOuladBenTayeb/portfolio-images/main/assets/cursorHover.png)"; // Set hover cursor
    });

    // Add event listener for mouseleave to reset the cursor image
    link.addEventListener('mouseleave', () => {
      customCursor.style.backgroundImage = "url(https://raw.githubusercontent.com/SoulaimanOuladBenTayeb/portfolio-images/main/assets/cursor.png)"; // Reset to default cursor
    });
  });
}

// Call the function to apply hover effect to all links
setHoverEffectOnLinks();

// If you add new links dynamically in the future, call this function again
// Select slider buttons
const sliderButtons = document.querySelectorAll(".slider-btn");

// Function to handle cursor hover effect on buttons
function setHoverEffectOnButtons() {
  sliderButtons.forEach(button => {
    button.addEventListener("mouseenter", () => {
      customCursor.style.backgroundImage = "url(https://raw.githubusercontent.com/SoulaimanOuladBenTayeb/portfolio-images/main/assets/cursorHover.png)";
    });

    button.addEventListener("mouseleave", () => {
      customCursor.style.backgroundImage = "url(https://raw.githubusercontent.com/SoulaimanOuladBenTayeb/portfolio-images/main/assets/cursor.png)";
    });
  });
}

// Apply hover effect to slider buttons
setHoverEffectOnButtons();

const viewMoreButtons = document.querySelectorAll(".view-more-btn");

function setViewMoreButtons() {
  viewMoreButtons.forEach(button => {
    button.addEventListener("mouseenter", () => {
      customCursor.style.backgroundImage = "url(https://raw.githubusercontent.com/SoulaimanOuladBenTayeb/portfolio-images/main/assets/cursorHover.png)";
    });

    button.addEventListener("mouseleave", () => {
      customCursor.style.backgroundImage = "url(https://raw.githubusercontent.com/SoulaimanOuladBenTayeb/portfolio-images/main/assets/cursor.png)";
    });
  });
}

setViewMoreButtons();

const workOverlay = document.querySelectorAll(".work-overlay");

function setworkOverlay() {
  workOverlay.forEach(button => {
    button.addEventListener("mouseenter", () => {
      customCursor.style.backgroundImage = "url(https://raw.githubusercontent.com/SoulaimanOuladBenTayeb/portfolio-images/main/assets/cursorHover.png)";
    });

    button.addEventListener("mouseleave", () => {
      customCursor.style.backgroundImage = "url(https://raw.githubusercontent.com/SoulaimanOuladBenTayeb/portfolio-images/main/assets/cursor.png)";
    });
  });
}

setworkOverlay();


//button

const viewMoreButton = document.querySelector('.view-more-btn');

viewMoreButton.addEventListener('mouseenter', () => {
  // Add the hover class to trigger the corner line movement
  viewMoreButton.classList.add('hovered');
});

viewMoreButton.addEventListener('mouseleave', () => {
  // Remove the hover class to reset the corner lines
  viewMoreButton.classList.remove('hovered');
});


//send message 

const sendMessageButton = document.querySelector('.submit-btn');

sendMessageButton.addEventListener('mouseenter', () => {
  // Add the hover class to trigger the corner line movement
  sendMessageButton.classList.add('hovered');
});

sendMessageButton.addEventListener('mouseleave', () => {
  // Remove the hover class to reset the corner lines
  sendMessageButton.classList.remove('hovered');
});



// hamburger x cross hover
const hambHover = document.querySelectorAll(".hamburger");

function sethambHover() {
  hambHover.forEach(button => {
    button.addEventListener("mouseenter", () => {
      customCursor.style.backgroundImage = "url(https://raw.githubusercontent.com/SoulaimanOuladBenTayeb/portfolio-images/main/assets/cursorHover.png)";
    });

    button.addEventListener("mouseleave", () => {
      customCursor.style.backgroundImage = "url(https://raw.githubusercontent.com/SoulaimanOuladBenTayeb/portfolio-images/main/assets/cursor.png)";
    });
  });
}

sethambHover();

const crossHover = document.querySelectorAll(".cross");

function setcrossHover() {
  crossHover.forEach(button => {
    button.addEventListener("mouseenter", () => {
      customCursor.style.backgroundImage = "url(https://raw.githubusercontent.com/SoulaimanOuladBenTayeb/portfolio-images/main/assets/cursorHover.png)";
    });

    button.addEventListener("mouseleave", () => {
      customCursor.style.backgroundImage = "url(https://raw.githubusercontent.com/SoulaimanOuladBenTayeb/portfolio-images/main/assets/cursor.png)";
    });
  });
}

setcrossHover();
