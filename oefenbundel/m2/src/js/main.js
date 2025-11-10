// Import our custom CSS
import '../scss/styles.scss'
// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'
// M1 — Som van twee getallen
// M2 — Celsius → Kelvin
function cToK(c) {
    return c + 273.15; // formule: K = C + 273.15
}

function handleM2() {
    const raw = document.getElementById("m2_c").value.trim();
    const out = document.getElementById("m2_out");
    const c = parseFloat(raw);

    if (raw === "" || Number.isNaN(c)) {
        out.className = "alert alert-warning mb-0";
        out.textContent = "Vul een geldig getal in";
        return;
    }

    const k = cToK(c);
    out.className = "alert alert-success mb-0";
    out.textContent = `${c}°C = ${k} K`;
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("m2_btn")?.addEventListener("click", handleM2);
});
