// Import our custom CSS
import '../scss/styles.scss'
// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'
// M3 — BMI-berekening
function calcBmi(kg, cm) {
    const m = cm / 100;          // omzetting cm → m
    return kg / (m * m);         // formule: BMI = kg / (m^2)
}

function handleM3() {
    const wRaw = document.getElementById("bmi_w").value.trim();
    const hRaw = document.getElementById("bmi_h").value.trim();
    const out  = document.getElementById("bmi_out");

    const w = parseFloat(wRaw);
    const h = parseFloat(hRaw);

    // Validatie: beide velden moeten getallen bevatten en lengte > 0
    if (wRaw === "" || hRaw === "" || Number.isNaN(w) || Number.isNaN(h) || h <= 0) {
        out.className = "alert alert-warning mb-0";
        out.textContent = "Vul geldige waarden in";
        return;
    }

    const bmi = calcBmi(w, h);
    out.className = "alert alert-success mb-0";
    out.textContent = `BMI = ${bmi.toFixed(2)}`;
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("bmi_btn")?.addEventListener("click", handleM3);
});
