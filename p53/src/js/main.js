// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
// --------------------------------------
// Hoofdstuk 12: DOM Selectors
// --------------------------------------

function filterNamen() {
    const value = document.getElementById("sel_input").value.toLowerCase();
    const items = document.querySelectorAll(".naam-item"); // NodeList

    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(value) ? "block" : "none";
    });
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("sel_input")
        ?.addEventListener("keyup", filterNamen);
});
