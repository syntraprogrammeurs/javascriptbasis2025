// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js

// | Begrip          | Betekenis                                           |
// | --------------- | --------------------------------------------------- |
// | `array`         | lijst met waarden                                   |
// | `trim()`        | spaties rond tekst verwijderen                      |
// | `toLowerCase()` | alles kleine letters (handig voor vergelijken)      |
// | `some()`        | checkt of een lijst een match bevat                 |
// | `map()`         | maakt een nieuwe lijst door elke waarde te bewerken |
// | `join("")`      | plakt lijst weer samen in één string                |
// | `sort()`        | alfabetisch sorteren                                |
// | `reverse()`     | lijst omkeren                                       |
// | `Set()`         | verzameling met alleen unieke waarden               |

// ----------------------------------
// Hoofdstuk 6: Arrow Functions (=>)
// Oefening H6-A — Tags Manager
// ----------------------------------
document.addEventListener('DOMContentLoaded', () => {

    // We halen alle HTML-elementen op zodat we er later mee kunnen werken.
    // Dit doet niets "slims": we steken alleen verwijzingen naar elementen in variabelen.
    const inp     = document.getElementById('tm_input');
    const btnAdd  = document.getElementById('tm_add');
    const btnSort = document.getElementById('tm_sort');
    const btnRev  = document.getElementById('tm_rev');
    const btnClr  = document.getElementById('tm_clear');

    const list    = document.getElementById('tm_list');
    const elCount = document.getElementById('tm_count');
    const elUniq  = document.getElementById('tm_unique');

    // Hier bewaren we al onze tags in een array (lijst).
    // Een array is een verzameling waarden in volgorde, bv: ["JS", "HTML", "CSS"]
    let tags = [];

    // -------------------------------------------------------
    // Kleine hulpfuncties (arrow functions)
    // -------------------------------------------------------

    // trim() verwijdert spaties voor en na een tekst:
    // "  hallo  " → "hallo"
    const clean = v => v.trim();

    // toLowerCase() maakt tekst altijd kleine letters:
    // "JS" → "js"
    // Dit gebruiken we om "JS" en "js" als dezelfde tag te zien (case-insensitive)
    const lower = v => v.toLowerCase();

    // some() kijkt of er minstens één element in de array voldoet aan een test
    // bv: ["hi","yo"].some(w => w==="yo") → true
    //
    // Hier gebruiken we het om te checken of een tag al bestaat.
    const isDuplicate = (arr, value) => {
        const val = lower(value);
        return arr.some(t => lower(t) === val);
    };

    // -------------------------------------------------------
    // RENDER: bouw de volledige UI opnieuw op
    // -------------------------------------------------------
    const render = () => {
        // map() gaat door elke waarde van de array en geeft een nieuwe array terug
        // Hier bouwen we HTML-regels voor elke tag
        //
        // daarna gebruiken we join("") om de array van HTML-stukjes samen te voegen tot 1 string
        list.innerHTML = tags
            .map((t, i) =>
                `<li class="list-group-item d-flex justify-content-between align-items-center">
           <span>${t}</span>
           <span class="badge text-bg-secondary rounded-pill">${i}</span>
         </li>`
            )
            .join(""); // join("") plakt alles aan elkaar zonder komma's

        // lengte van array = totaal aantal tags
        elCount.textContent = `${tags.length}`;

        // new Set() maakt een unieke verzameling
        // ["JS","js","JS"] → Set(["js"])
        // daarna meten we hoe groot die Set is (unieke woorden)
        const uniqCount = new Set(tags.map(lower)).size;
        elUniq.textContent = `${uniqCount}`;
    };

    // -------------------------------------------------------
    // Toevoegen van nieuwe tag
    // -------------------------------------------------------
    btnAdd.addEventListener('click', () => {
        const val = clean(inp.value);

        // niets ingevuld → stop
        if (!val) return;

        // als de tag al bestaat → stop
        if (isDuplicate(tags, val)) return;

        // voegen tag toe aan array
        tags.push(val);

        // inputveld leegmaken
        inp.value = "";

        // UI vernieuwen
        render();
    });

    // -------------------------------------------------------
    // Sorteren van A → Z
    // -------------------------------------------------------
    // sort() sorteert alfabetisch
    // localeCompare() vergelijkt twee woorden correct (ook met accenten)
    btnSort.addEventListener('click', () => {
        tags.sort((a, b) => lower(a).localeCompare(lower(b)));
        render();
    });

    // -------------------------------------------------------
    // Omgekeerde volgorde
    // -------------------------------------------------------
    // reverse() keert de hele array om
    btnRev.addEventListener('click', () => {
        tags.reverse();
        render();
    });

    // -------------------------------------------------------
    // Alles leegmaken
    // -------------------------------------------------------
    btnClr.addEventListener('click', () => {
        tags = []; // Array leegmaken
        render();
    });

    // Eerste keer tekenen bij pagina-start
    render();
});
