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
// ----------------------
// Hoofdstuk 2: Functions
// Oefening H2-B — Shadowing Demo
// ----------------------
document.addEventListener("DOMContentLoaded", () => {

    const inpBase = document.getElementById("sh_base");
    const btnRun  = document.getElementById("sh_run");
    const outList = document.getElementById("sh_out");

    // Pure functie: geeft array van strings terug
    function shadowInfo(base) {
        let x = base;               // buiten block

        {
            let x = base + 5;         // shadow: nieuwe x
            return [
                `buiten block: x = ${base}`,
                `binnen block: x = ${x}`,
                `na block: x = ${base}`
            ];
        }
    }

    // Impure: UI
    function handleShadow() {
        const raw = inpBase.value.trim();
        const base = raw === '' ? 10 : Number(raw);

        const items = shadowInfo(base);

        let html = "";
        for (let i = 0; i < items.length; i++) {
            html += `<li class="list-group-item">${items[i]}</li>`;
        }
        outList.innerHTML = html; // overschrijven
    }

    btnRun.addEventListener("click", handleShadow);
});
