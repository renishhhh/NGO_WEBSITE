// Toggle navigation menu visibility on mobile screens
function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    const hamburger = document.querySelector(".hamburger");

    // Toggle the show-nav class for displaying the nav links
    navLinks.classList.toggle("show-nav");

    // Toggle the active class on hamburger to animate the bars
    hamburger.classList.toggle("active");
}

// Close the menu when clicking outside of it on mobile
document.addEventListener("click", function(event) {
    const navLinks = document.getElementById("nav-links");
    const hamburger = document.querySelector(".hamburger");

    // Check if the click is outside the nav or hamburger menu
    if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
        navLinks.classList.remove("show-nav");
        hamburger.classList.remove("active");
    }
});

// Close menu when a link is clicked
document.querySelectorAll("#nav-links li a").forEach(link => 
    link.addEventListener("click", () => toggleMenu())
);
