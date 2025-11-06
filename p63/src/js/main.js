// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
function toggleDarkMode() {
    const body = document.body;
    const btn = document.getElementById("dm2_btn");
    const status = document.getElementById("dm2_status");

    const isDark = body.classList.toggle("dark-mode");

    if (isDark) {
        btn.textContent = "Light mode ☀️";
        status.className = "alert alert-success mb-0";
        status.textContent = "Dark mode actief 🌙";
    } else {
        btn.textContent = "Dark mode 🌙";
        status.className = "alert alert-secondary mb-0";
        status.textContent = "Light mode actief ☀️";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("dm2_btn")
        ?.addEventListener("click", toggleDarkMode);
});



