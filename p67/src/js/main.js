// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
function isValidEmail(email) {
    return email.includes("@") && email.includes(".") && !email.includes(" ");
}

function updateEmailPreview() {
    const value = document.getElementById("em_input").value;
    const preview = document.getElementById("em_preview");

    if (isValidEmail(value)) {
        preview.className = "alert alert-success mb-2";
        preview.textContent = " Geldig emailadres";
    } else {
        preview.className = "alert alert-warning mb-2";
        preview.textContent = "⚠️ Ongeldig emailadres";
    }
}

function handleEmailSubmit(e) {
    e.preventDefault();

    const val = document.getElementById("em_input").value;
    const status = document.getElementById("em_status");

    if (!isValidEmail(val)) {
        status.className = "alert alert-danger mb-0 mt-3";
        status.textContent = "❌ Emailadres ongeldig";
        return;
    }

    status.className = "alert alert-success mb-0 mt-3";
    status.textContent = ` Email geaccepteerd: ${val}`;
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("em_input")?.addEventListener("input", updateEmailPreview);
    document.getElementById("em_form")?.addEventListener("submit", handleEmailSubmit);
});
