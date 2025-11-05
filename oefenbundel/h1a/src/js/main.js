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
// Pure functions
document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const inpA   = document.getElementById('mt_a');
    const inpB   = document.getElementById('mt_b');
    const out    = document.getElementById('mt_out');

    const btnAdd = document.getElementById('mt_add');
    const btnSub = document.getElementById('mt_sub');
    const btnMul = document.getElementById('mt_mul');
    const btnDiv = document.getElementById('mt_div');

    // Kleine helper binnen deze scope: placeholder weg + tekst tonen
    function show(text) {
        out.className = 'mt-2';         // placeholder-glow vervangen door platte tekst
        out.textContent = text;
    }

    // Validatie: inputs moeten ingevuld zijn (type="number" zorgt al voor numeric)
    function hasEmpty(aVal, bVal) {
        return aVal.trim() === '' || bVal.trim() === '';
    }

    // Ronden tot max 6 decimalen
    function round6(x) {
        return Math.round(x * 1000000) / 1000000;
    }

    // A + B
    btnAdd.addEventListener('click', () => {
        const aVal = inpA.value;
        const bVal = inpB.value;
        if (hasEmpty(aVal, bVal)) {
            show('Ongeldige invoer (vul beide getallen in)');
            return;
        }
        const a = Number(aVal);
        const b = Number(bVal);
        const res = a + b;
        show('Resultaat: ' + round6(res));
    });

    // A − B
    btnSub.addEventListener('click', () => {
        const aVal = inpA.value;
        const bVal = inpB.value;
        if (hasEmpty(aVal, bVal)) {
            show('Ongeldige invoer (vul beide getallen in)');
            return;
        }
        const a = Number(aVal);
        const b = Number(bVal);
        const res = a - b;
        show('Resultaat: ' + round6(res));
    });

    // A × B
    btnMul.addEventListener('click', () => {
        const aVal = inpA.value;
        const bVal = inpB.value;
        if (hasEmpty(aVal, bVal)) {
            show('Ongeldige invoer (vul beide getallen in)');
            return;
        }
        const a = Number(aVal);
        const b = Number(bVal);
        const res = a * b;
        show('Resultaat: ' + round6(res));
    });

    // A ÷ B
    btnDiv.addEventListener('click', () => {
        const aVal = inpA.value;
        const bVal = inpB.value;
        if (hasEmpty(aVal, bVal)) {
            show('Ongeldige invoer (vul beide getallen in)');
            return;
        }
        const a = Number(aVal);
        const b = Number(bVal);
        if (b === 0) {
            show('Delen door 0 kan niet');
            return;
        }
        const res = a / b;
        show('Resultaat: ' + round6(res));
    });
});


