// Import our custom CSS
import '../scss/styles.scss'
// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'
// M1 — Som van twee getallen
function sum(a, b) {
    return a + b; // pure functie: berekent alleen en wijzigt geen UI
}

function handleM1() {
    const aRaw = document.getElementById("m1_a").value.trim();
    const bRaw = document.getElementById("m1_b").value.trim();
    const out   = document.getElementById("m1_out");

    const a = parseFloat(aRaw);
    const b = parseFloat(bRaw);

    if (aRaw === "" || bRaw === "" || Number.isNaN(a) || Number.isNaN(b)) {
        out.className = "alert alert-warning mb-0";
        out.textContent = "Vul twee geldige getallen in";
        return;
    }

    const result = sum(a, b);
    out.className = "alert alert-success mb-0";
    out.textContent = `${a} + ${b} = ${result}`;
}

// Event-koppeling
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("m1_btn")?.addEventListener("click", handleM1);
});

