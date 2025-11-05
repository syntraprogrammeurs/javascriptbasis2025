// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js

// ----------------------------------
// Hoofdstuk 5: Template Literals
// Oefening H5-B — Inline Calculator
// ----------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const inp  = document.getElementById("ic_n");
    const plus = document.getElementById("ic_plus");
    const minus = document.getElementById("ic_minus");

    // helper om te clampen tussen −999 en 999
    // | Deel                  | Betekenis                                                                                          |
    // | --------------------- | -------------------------------------------------------------------------------------------------- |
    // | `Math.min(999, v)`    | pakt de kleinste van 999 en `v` → dus `v` kan **niet hoger worden dan 999**                        |
    // | `Math.max(-999, ...)` | pakt de grootste van -999 en het vorige resultaat → dus `v` kan niet lager worden dan -999         |

    const clamp = v => Math.max(-999, Math.min(999, v));

    plus.addEventListener("click", () => {
        const v = Number(inp.value);
        inp.value = clamp(v + 1);
    });

    minus.addEventListener("click", () => {
        const v = Number(inp.value);
        inp.value = clamp(v - 1);
    });
});
