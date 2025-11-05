// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
// Lege array om namen op te slaan
// Lege array om namen op te slaan
/*
    We bewaren alle taken in een array.
    Elke keer de gebruiker een taak toevoegt komt die in deze array terecht.
    Daarna tonen we die taken op het scherm.
*/
// ----------------------------------
// Hoofdstuk 8: Root Nodes
// ----------------------------------

function activeerDarkMode() {
    document.body.style.background = "#222";
    document.body.style.color = "#fff";
}

function activeerLightMode() {
    document.body.style.background = "#fff";
    document.body.style.color = "#000";
}

function toonStatus(msg) {
    const out = document.getElementById("dm_status");
    out.className = "alert alert-success mb-0";
    out.textContent = msg;
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("dm_on")
        ?.addEventListener("click", () => {
            activeerDarkMode();
            toonStatus("Dark mode actief 🌙");
        });

    document.getElementById("dm_off")
        ?.addEventListener("click", () => {
            activeerLightMode();
            toonStatus("Light mode actief ☀️");
        });
});
