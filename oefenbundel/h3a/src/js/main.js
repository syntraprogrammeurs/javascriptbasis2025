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
// ------------------------------
// Hoofdstuk 3: Function Scoping
// Oefening H3-A — Formatter Station
// ------------------------------
document.addEventListener('DOMContentLoaded', () => {

    const inp   = document.getElementById('fs_text');
    const btnUp = document.getElementById('fs_upper');
    const btnLo = document.getElementById('fs_lower');
    const btnCa = document.getElementById('fs_cap');
    const list  = document.getElementById('fs_results');

    // Pure: Capitalize
    function capitalize(str) {
        const t = str.trim();
        if (t === '') return '';
        const first = t.charAt(0).toUpperCase();    // eerste letter groot
        const rest  = t.slice(1).toLowerCase();     // rest kleine letters
        return first + rest;
    }

    // UI helper: voeg item toe (max 5)
    function prependItem(text) {
        if (text.trim() === '') return;

        list.innerHTML =
            `<li class="list-group-item">${text}</li>` + list.innerHTML;

        while (list.children.length > 5) {
            list.removeChild(list.lastElementChild);
        }
    }

    // Click handlers
    btnUp.addEventListener('click', () => {
        const v = inp.value;
        if (v.trim() === '') return;
        prependItem(v.toUpperCase());
    });

    btnLo.addEventListener('click', () => {
        const v = inp.value;
        if (v.trim() === '') return;
        prependItem(v.toLowerCase());
    });

    btnCa.addEventListener('click', () => {
        const v = inp.value;
        const c = capitalize(v);
        if (c === '') return;
        prependItem(c);
    });

});
