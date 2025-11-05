// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js

// ----------------------------------
// Hoofdstuk 4: Named Functions
// Oefening H4-B — Initialen Generator
// ----------------------------------
document.addEventListener("DOMContentLoaded", initInitialsGenerator);

// startpunt
function initInitialsGenerator() {
    const inp  = document.getElementById("ig_full");
    const btn  = document.getElementById("ig_make");
    const out  = document.getElementById("ig_out");

    btn.addEventListener("click", () => toonInitialen(inp, out));
}

// ---------- PURE FUNCTION ----------
function maakInitialen(naam) {
    // trimmen & splitsen op spaties
    // | Code                     | Betekenis in gewone taal                         |
    // | ------------------------ | ------------------------------------------------ |
    // | `naam.trim()`            | knipt spaties weg aan het begin en einde         |
    // | `.split(" ")`            | knipt de zin in stukjes waar spaties zitten      |
    // | `.filter(d => d !== "")` | gooit lege stukjes weg (bv. bij dubbele spaties) |

    // Voorbeeld Invoer:
    //     " Tom Van Houtte "
    // trim() → "Tom Van Houtte"
    // split(" ") → ["Tom", "", "Van", "", "Houtte"]
    // filter(...) → ["Tom", "Van", "Houtte"]

    const delen = naam.trim().split(" ").filter(d => d !== "");

    // minstens 2 woorden
    if (delen.length < 2) return "onvolledige naam";

    // eerste letter elk deel → uppercase → met punt
    // | Stap | `i` | `delen[i]` | `delen[i].charAt(0)` | `toUpperCase()` | Toevoegen (`res +=`)         |
    // | ---- | --- | ---------- | -------------------- | --------------- | ---------------------------- |
    // | 1    | 0   | `"Tom"`    | `"T"`                | `"T"`           | `"T."`                       |
    // | 2    | 1   | `"Van"`    | `"V"`                | `"V"`           | `"T." + "V."` → `"T.V."`     |
    // | 3    | 2   | `"Houtte"` | `"H"`                | `"H"`           | `"T.V." + "H."` → `"T.V.H."` |
    let res = "";
    for (let i = 0; i < delen.length; i++) {
        const letter = delen[i].charAt(0).toUpperCase();
        res += letter + ".";
    }
    return res;
}

// ---------- IMPURE FUNCTION ----------
function toonInitialen(inputEl, outputEl) {
    const naam = inputEl.value;

    if (!naam.trim()) {
        outputEl.textContent = "onvolledige naam";
        return;
    }

    const result = maakInitialen(naam);
    outputEl.textContent = result;
}
