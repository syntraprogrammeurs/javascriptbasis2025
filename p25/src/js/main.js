// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
// ----------------------------------
// Hoofdstuk 5: Template Literals
// ----------------------------------

// Pure function
function maakWelkomstZin(naam, leeftijd) {
    return `Welkom ${naam}! Jij bent ${leeftijd} jaar oud.`;
}

// UI handler
function toonWelkomstZin() {
    const naam = document.getElementById("tl_name").value.trim();
    const leeftijd = document.getElementById("tl_age").value.trim();
    const out = document.getElementById("tl_output");

    if (!naam || !leeftijd) {
        out.className = "alert alert-warning mb-0";
        out.textContent = `⚠️ Vul naam en leeftijd in`;
        return;
    }

    const tekst = maakWelkomstZin(naam, leeftijd);

    out.className = "alert alert-success mb-0";
    out.textContent = tekst;
}

// Event
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("tl_btn")
        ?.addEventListener("click", toonWelkomstZin);
});
