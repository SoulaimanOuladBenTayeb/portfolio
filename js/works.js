document.addEventListener('DOMContentLoaded', () => {
  // Hamburger Menu Toggle
  const hamburger = document.querySelector('.hamburger');
  const crossBtn = document.querySelector('.cross');
  const overlay = document.querySelector('.fullScreenOverlay');

  if (hamburger && overlay) {
      hamburger.addEventListener('click', () => {
          overlay.classList.add('active');
      });
  }

  if (crossBtn && overlay) {
      crossBtn.addEventListener('click', () => {
          overlay.classList.remove('active');
      });
  }

  // Elements for the works section
  const categoryItems = document.querySelectorAll(".sidebarWork ul li a, .phoneNavigationWork li a");
  const imageContainer = document.querySelector(".image-container");
  const sidebar = document.querySelector(".sidebarWork");
  const projectDetails = document.querySelector(".project-details");
  const projectTitle = document.getElementById("project-title");
  const projectDescription = document.getElementById("project-description");
  const projectImage = document.getElementById("project-image");
  const projectLink = document.getElementById("project-link");
  const backButton = document.querySelector(".back-button");

  let worksData = [];
  let activeCategory = "uiux"; // Default category

  // Fetch works data from JSON
  fetch("../works.json")
      .then(response => response.json())
      .then(data => {
          worksData = data;
          const urlParams = new URLSearchParams(window.location.search);
          const projectId = urlParams.get('id');

          if (projectId) {
              showProjectDetails(projectId);
          } else {
              loadCategory(activeCategory);
              setActiveCategory(activeCategory);
          }
      })
      .catch(error => console.error("Error loading JSON:", error));

  // Load works by category
  function loadCategory(category) {
      imageContainer.innerHTML = "";

      const filteredWorks = worksData.filter(work => work.category === category);
      const sortedWorks = filteredWorks.sort((a, b) => b.id - a.id);

      if (sortedWorks.length === 0) {
          imageContainer.innerHTML = "<p>No works available in this category.</p>";
          return;
      }

      sortedWorks.forEach(({ id, image, title }) => {
          const imgContainer = document.createElement("div");
          imgContainer.classList.add("image-container-item");

          const imgElement = document.createElement("img");
          imgElement.src = image;
          imgElement.classList.add("work-image");
          imgElement.setAttribute("data-id", id);

          const projectName = document.createElement("p");
          projectName.classList.add("project-name");
          projectName.textContent = title;

          imgContainer.appendChild(imgElement);
          imgContainer.appendChild(projectName);
          imageContainer.appendChild(imgContainer);
      });

      attachImageClickEvents();
      setHoverEffectOnProjectNames();
      
  }

  // Custom Cursor
  const customCursor = document.createElement('div');
  customCursor.classList.add('custom-cursor');
  document.body.appendChild(customCursor);

  document.addEventListener('mousemove', (event) => {
      customCursor.style.left = `${event.clientX - customCursor.offsetWidth / 2}px`;
      customCursor.style.top = `${event.clientY - customCursor.offsetHeight / 2}px`;
      customCursor.style.opacity = "1";
  });

  document.addEventListener('mouseleave', () => {
      customCursor.style.opacity = "0";
  });

  document.addEventListener('mouseenter', () => {
      customCursor.style.opacity = "1";
  });

  function setHoverEffectOnProjectNames() {
      const projectNames = document.querySelectorAll('.project-name');

      projectNames.forEach(project => {
          project.addEventListener('mouseenter', () => {
              customCursor.style.backgroundImage = "url(https://raw.githubusercontent.com/SoulaimanOuladBenTayeb/portfolio-images/main/assets/cursorHover.png)";
          });

          project.addEventListener('mouseleave', () => {
              customCursor.style.backgroundImage = "url(https://raw.githubusercontent.com/SoulaimanOuladBenTayeb/portfolio-images/main/assets/cursor.png)";
          });
      });
  }

  document.querySelectorAll('a, button, .clickable').forEach(element => {
      element.addEventListener('mouseenter', () => {
          customCursor.style.backgroundImage = "url(https://raw.githubusercontent.com/SoulaimanOuladBenTayeb/portfolio-images/main/assets/cursorHover.png)";
      });

      element.addEventListener('mouseleave', () => {
          customCursor.style.backgroundImage = "url(https://raw.githubusercontent.com/SoulaimanOuladBenTayeb/portfolio-images/main/assets/cursor.png)";
      });
  });

  // Attach click events to works images
  function attachImageClickEvents() {
      document.querySelectorAll(".image-container-item").forEach(item => {
          item.addEventListener("click", (event) => {
              const imgElement = item.querySelector(".work-image");
              if (!imgElement) return;

              const projectId = imgElement.getAttribute("data-id");
              showProjectDetails(projectId);
          });
      });
  }

  // Show project details
  function showProjectDetails(projectId) {
      const project = worksData.find(work => work.id == projectId);
      if (!project) return;

      projectTitle.textContent = project.title;
      projectDescription.innerHTML = project.description.replace(/\n\n/g, '<br><br>');
      projectImage.src = project.image;

      if (project.link) {
          projectLink.href = project.link;
          projectLink.style.display = "block";
      } else {
          projectLink.style.display = "none";
      }

      sidebar.style.display = "none";
      imageContainer.style.display = "none";
      projectDetails.classList.remove("hidden");

      activeCategory = project.category;
      setActiveCategory(activeCategory);
  }

  if (backButton) {
      backButton.addEventListener("click", () => {
          projectDetails.classList.add("hidden");
          sidebar.style.display = "block";
          imageContainer.style.display = "grid";

          loadCategory(activeCategory);
          setActiveCategory(activeCategory);
      });
  }

  function setActiveCategory(category) {
    categoryItems.forEach(item => {
        if (item.getAttribute("data-category") === category) {
            item.classList.add("activeCategory");
        } else {
            item.classList.remove("activeCategory");
        }
    });
}



    categoryItems.forEach(item => {
        item.addEventListener("click", (event) => {
            event.preventDefault();
            
            // Ensure we get the <a> element even if an icon inside it was clicked
            const selectedCategory = event.target.closest("a").getAttribute("data-category");

            if (selectedCategory) {
                loadCategory(selectedCategory);
                setActiveCategory(selectedCategory);
                activeCategory = selectedCategory;
            }
        });
    });

});
