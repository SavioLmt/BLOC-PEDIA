// Gestion du menu de navigation sur mobile.
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
        const isOpen = mainNav.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", isOpen);
    });
}

// Affichage de la date uniquement si un élément portant cet identifiant existe.
const dateElement = document.getElementById("date");

if (dateElement) {
    const date = new Date();

    dateElement.textContent = date.toLocaleDateString("fr-BE", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });
}
