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
document.addEventListener('DOMContentLoaded', () => {
    const inpCm = document.getElementById('uc_cm');
    const btnToM = document.getElementById('uc_to_m');
    const btnToIn = document.getElementById('uc_to_in');
    const badgeM = document.getElementById('uc_m');
    const badgeIn = document.getElementById('uc_in');

    function invalid() {
        badgeM.textContent = 'ongeldig';
        badgeIn.textContent = 'ongeldig';
    }

    btnToM.addEventListener('click', () => {
        const cmVal = inpCm.value.trim();
        if (cmVal === '') {
            invalid();
            return;
        }

        const cm = Number(cmVal);
        if (cm < 0) {
            invalid();
            return;
        }

        const meter = Number((cm / 100).toFixed(2));
        badgeM.textContent = meter;
    });

    btnToIn.addEventListener('click', () => {
        const cmVal = inpCm.value.trim();
        if (cmVal === '') {
            invalid();
            return;
        }

        const cm = Number(cmVal);
        if (cm < 0) {
            invalid();
            return;
        }

        const inch = Number((cm / 2.54).toFixed(2));
        badgeIn.textContent = inch;
    });
});