// Import our custom CSS
import '../scss/styles.scss'
// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'
// M4 — BMI met categorie en kleur

// 1) BMI berekenen (zoals bij M3)
function calcBmi(kg, cm) {
    const m = cm / 100;
    return kg / (m * m); // BMI = gewicht / (lengte in meter)^2
}

// 2) Categorie bepalen + bijhorende Bootstrap alert-klasse kiezen
function categorizeBmi(bmi) {
    // Standaard WHO-drempels
    if (bmi < 18.5) {
        return { label: "Ondergewicht", klass: "alert alert-info mb-0" };       // blauwachtig
    }
    if (bmi < 25) {
        return { label: "Gezond gewicht", klass: "alert alert-success mb-0" };  // groen
    }
    if (bmi < 30) {
        return { label: "Overgewicht", klass: "alert alert-warning mb-0" };     // geel
    }
    return { label: "Obesitas", klass: "alert alert-danger mb-0" };           // rood
}

function handleM4() {
    const wRaw = document.getElementById("bmi2_w").value.trim();
    const hRaw = document.getElementById("bmi2_h").value.trim();
    const out  = document.getElementById("bmi2_out");

    const w = parseFloat(wRaw);
    const h = parseFloat(hRaw);

    // Validatie: beide velden vereist, getallen, en lengte > 0
    if (wRaw === "" || hRaw === "" || Number.isNaN(w) || Number.isNaN(h) || h <= 0) {
        out.className = "alert alert-warning mb-0";
        out.textContent = "Vul geldige waarden in";
        return;
    }

    // Berekening + categorie
    const bmi = calcBmi(w, h);
    const { label, klass } = categorizeBmi(bmi);

    // Output met kleur per categorie
    out.className = klass;
    out.textContent = `BMI = ${bmi.toFixed(2)} — Categorie: ${label}`;
}

// Event-koppeling
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("bmi2_btn")?.addEventListener("click", handleM4);
});
