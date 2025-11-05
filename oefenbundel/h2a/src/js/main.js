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
// Oefening H2-A — Scope Lab
// ----------------------
document.addEventListener('DOMContentLoaded', () => {
    // UI refs
    const btnGlobal = document.getElementById('sc_global');
    const btnLocal  = document.getElementById('sc_local');
    const statusBad = document.getElementById('sc_status');
    const listBox   = document.getElementById('sc_vars');

    // ---------- PURE FUNCTIES (LOGICA) ----------
    // Leveren enkel data (strings) terug, geen DOM manipulatie

    // Simuleer wat zichtbaar is na een blok binnen dezelfde functie
    function globalData() {
        // In een echte demo zou je var/let/const in blokken zetten.
        // Voor het Functions-hoofdstuk volstaat de correcte uitkomst-lijst.
        return [
            'var in functie: zichtbaar',
            'let in functie: zichtbaar',
            'const in functie: zichtbaar',
            'var in blok: zichtbaar',
            'let in blok: niet zichtbaar',
            'const in blok: niet zichtbaar'
        ];
    }

    // Toon dat let/const block-scoped zijn en buiten het blok niet beschikbaar
    function localData() {
        return [
            'var in blok: zichtbaar binnen functie',
            'let in blok: niet zichtbaar buiten blok',
            'const in blok: niet zichtbaar buiten blok'
        ];
    }

    // Hulpfunctie: maak <li> lijst in één HTML-string
    function makeListHTML(items) {
        var html = '';
        for (var i = 0; i < items.length; i++) {
            html += '<li class="list-group-item">' + items[i] + '</li>';
        }
        return html;
    }

    // ---------- IMPURE FUNCTIES (UI) ----------

    function runGlobal() {
        // status badge
        statusBad.className = 'badge text-bg-primary';
        statusBad.textContent = 'global uitgevoerd';

        // lijst vullen
        var items = globalData();
        listBox.innerHTML = makeListHTML(items);
    }

    function runLocal() {
        // status badge
        statusBad.className = 'badge text-bg-info';
        statusBad.textContent = 'local uitgevoerd';

        // lijst vullen
        var items = localData();
        listBox.innerHTML = makeListHTML(items);
    }

    // Events koppelen
    btnGlobal.addEventListener('click', runGlobal);
    btnLocal.addEventListener('click', runLocal);
});

/*
* Wat zie je bij testen

Klik Run global() → badge wordt blauw met “global uitgevoerd” en de lijst bevat 6 regels waarin var ook buiten
* het blok zichtbaar is, let/const niet.

Klik Run local() → badge wordt lichtblauw met “local uitgevoerd” en de lijst verandert naar 3 regels die
* het block-scope verschil benadrukken.

Zo verschillen de lijsten bij beide runs en houd je je netjes aan de Functions-aanpak: pure berekening, impure UI.
* */