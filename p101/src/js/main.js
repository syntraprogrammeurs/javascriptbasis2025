// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
function applyTheme(mode) {

    const body = document.body;
    const btn = document.getElementById("theme_btn");
    const status = document.getElementById("theme_status");

    if (mode === "dark") {
        body.classList.add("dark-mode");
        btn.textContent = "Switch to Light";
        status.textContent = "🌙 Donkere modus actief";
    } else {
        body.classList.remove("dark-mode");
        btn.textContent = "Switch to Dark";
        status.textContent = "☀️ Licht modus actief";
    }

    localStorage.setItem("theme", mode);
}

document.addEventListener("DOMContentLoaded", () => {
    applyTheme(localStorage.getItem("theme") || "light");

    document.getElementById("theme_btn")
        ?.addEventListener("click", () => {
            const current = localStorage.getItem("theme");
            applyTheme(current === "dark" ? "light" : "dark");
        });
});
