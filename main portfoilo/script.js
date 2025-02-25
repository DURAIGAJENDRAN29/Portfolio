const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar'); // Corrected selection
const scrollContainer = document.getElementById("scrollContainer");
const scrollDots = document.getElementById("scrollDots");

function createDots() {
    const projects = document.querySelectorAll(".projects-box");
    scrollDots.innerHTML = ""; // Clear previous dots

    projects.forEach((_, index) => {
        let dot = document.createElement("div");
        dot.classList.add("scroll-dot");
        if (index === 0) dot.classList.add("active"); // First dot is active

        dot.dataset.index = index;
        dot.addEventListener("click", () => {
            scrollContainer.scrollTo({
                left: scrollContainer.clientWidth * index,
                behavior: "smooth"
            });
        });

        scrollDots.appendChild(dot);
    });
}

function updateDots() {
    const scrollLeft = scrollContainer.scrollLeft;
    const projects = document.querySelectorAll(".projects-box");
    let activeIndex = Math.round(scrollLeft / scrollContainer.clientWidth);

    document.querySelectorAll(".scroll-dot").forEach((dot, index) => {
        dot.classList.toggle("active", index === activeIndex);
    });
}

scrollContainer.addEventListener("scroll", updateDots);
document.addEventListener("DOMContentLoaded", createDots);

// Navbar toggle
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
console.log(menuIcon, navbar); // Check if they exist

