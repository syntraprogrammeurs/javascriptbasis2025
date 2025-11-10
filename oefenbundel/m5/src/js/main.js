// Import our custom CSS
import '../scss/styles.scss'
// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'
// M5 — Prijs na korting
function calcDiscount(price, pct) {
    // formule: nieuwe prijs = prijs × (1 - pct / 100)
    return price * (1 - pct / 100);
}

function handleDiscount() {
    const pRaw = document.getElementById("price").value.trim();
    const dRaw = document.getElementById("discount").value.trim();
    const out = document.getElementById("discount_out");

    const price = parseFloat(pRaw);
    const discount = parseFloat(dRaw);

    // Validatie: beide velden moeten geldig zijn en percentage tussen 0 en 100
    if (
        pRaw === "" ||
        dRaw === "" ||
        Number.isNaN(price) ||
        Number.isNaN(discount) ||
        discount < 0 ||
        discount > 100
    ) {
        out.className = "alert alert-warning mb-0";
        out.textContent = "Vul een geldige prijs en korting in (0–100%)";
        return;
    }

    // Berekening + afronding op 2 decimalen
    const newPrice = calcDiscount(price, discount);
    out.className = "alert alert-success mb-0";
    out.textContent = `Nieuwe prijs: €${newPrice.toFixed(2)} (Korting: ${discount}%)`;
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("discount_btn")?.addEventListener("click", handleDiscount);
});
