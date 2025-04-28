const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar-menu");


menu.addEventListener("click", () => {
    menu.classList.toggle("is-active")
    menuLinks.classList.toggle("active")
});

// Function to make the logos move
const logos = document.querySelector(".rotating-logos-track").cloneNode(true);
document.querySelector(".rotating-logos").appendChild(logos)