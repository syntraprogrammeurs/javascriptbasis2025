// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
// --------------------------------------
// Hoofdstuk 12: DOM Selectors
// --------------------------------------
function setColor(color) {
    const boxes = document.querySelectorAll(".kleur-box");
    boxes.forEach(box => box.style.background = color);
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("ks_red")?.addEventListener("click", () => setColor("red"));
    document.getElementById("ks_blue")?.addEventListener("click", () => setColor("blue"));
    document.getElementById("ks_green")?.addEventListener("click", () => setColor("green"));
});


