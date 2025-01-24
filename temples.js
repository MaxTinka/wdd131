
function updateFooter() {
    // Get the current year and update the footer
    const currentYear = new Date().getFullYear();
    const currentYearElement = document.getElementById("currentyear");
    if (currentYearElement) {
        currentYearElement.textContent = currentYear;
    }

    // Get the last modified date and update the footer
    const lastModified = document.lastModified;
    const lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement) {
        lastModifiedElement.textContent = "Last modified: " + lastModified;
    }
}

// Function to set up the hamburger menu functionality
function setupHamburgerMenu() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    // Toggle mobile menu on hamburger click
    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        hamburger.classList.toggle("active");

        // Change hamburger to 'X' when active
        if (navMenu.classList.contains("active")) {
            hamburger.innerHTML = '<span class="bar"></span><span class="bar"></span>'; // X icon
        } else {
            hamburger.innerHTML = '<span class="bar"></span><span class="bar"></span><span class="bar"></span>'; // Hamburger icon
        }
    });

    // Close menu when a link is clicked
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            hamburger.classList.remove("active");
            hamburger.innerHTML = '<span class="bar"></span><span class="bar"></span><span class="bar"></span>'; // Reset to hamburger icon
        });
    });
}

// Initialize functions
updateFooter();
setupHamburgerMenu();