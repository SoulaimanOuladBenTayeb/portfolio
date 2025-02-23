export const initSlider = () => {
  const sliderContainer = document.querySelector('.slider-container');
  const leftButton = document.querySelector('.left-btn');
  const rightButton = document.querySelector('.right-btn');

  let scrollAmount = 0;
  const scrollStep = 270; // Adjust to match your image width + gap

  // Fetch the works data (your JSON file or API endpoint)
  fetch("../works.json")
    .then(response => response.json())
    .then(data => {
      const latestWorks = data.sort((a, b) => b.id - a.id); // Sort by id, latest first

      // Display the first few works in the slider (for example, display 8 works)
      const numberOfWorksToShow = 8;

      latestWorks.slice(0, numberOfWorksToShow).forEach(work => {
        const workElement = document.createElement('div');
        workElement.classList.add('work');

        const workLink = document.createElement('a');
        // Link to works.html with the work id in the query string
        workLink.href = `../pages/works.html?id=${work.id}`;

        const img = document.createElement('img');
        img.src = work.image; // Dynamically set the image URL from the data
        img.alt = work.title; // Set the alt attribute based on the project title

        const overlay = document.createElement('div');
        overlay.classList.add('work-overlay');

        const title = document.createElement('h3');
        title.textContent = work.title; // Set the project title dynamically

        const category = document.createElement('p');
        category.textContent = work.category; // Set the category dynamically (or any other field you want)

        overlay.appendChild(title);
        overlay.appendChild(category);
        workElement.appendChild(img);
        workElement.appendChild(overlay);

        // Append the work element inside the link and add it to the slider container
        workLink.appendChild(workElement);
        sliderContainer.appendChild(workLink);
      });

      // Recalculate maxScroll after items are added
      const maxScroll = sliderContainer.scrollWidth - sliderContainer.clientWidth;

      // Adjust scroll behavior on arrow click
      rightButton.addEventListener('click', () => {
        scrollAmount += scrollStep;
        if (scrollAmount > maxScroll) {
          scrollAmount = maxScroll;
        }
        sliderContainer.style.transform = `translateX(-${scrollAmount}px)`;
      });

      leftButton.addEventListener('click', () => {
        scrollAmount -= scrollStep;
        if (scrollAmount < 0) {
          scrollAmount = 0;
        }
        sliderContainer.style.transform = `translateX(-${scrollAmount}px)`;
      });
    })
    .catch(error => console.error('Error loading works:', error));
};
