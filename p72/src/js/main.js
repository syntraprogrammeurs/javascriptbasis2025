// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
document.addEventListener("DOMContentLoaded", () => {
    const box = document.getElementById("rb_box");
    const msg = document.getElementById("rb_msg");

    // Hover
    box.addEventListener("mouseover", () => {
        box.classList.remove("bg-light");
        box.style.setProperty("background-color", "lightgreen", "important");
        msg.textContent = "👋 Hallo!";
    });

    // Verlaten
    box.addEventListener("mouseleave", () => {
        box.classList.add("bg-light");
        box.style.removeProperty("background-color");
        msg.textContent = "😭 Kom terug!";
    });

    // Klik
    box.addEventListener("click", () => {
        box.style.setProperty("border", "3px solid black", "important");
        msg.textContent = "🖱️ Je klikt!";
    });

    // Dubbelklik
    box.addEventListener("dblclick", () => {
        box.style.setProperty("border", "3px solid red", "important");
        msg.textContent = "⚡ Dubbelklik wow!";
    });
});




