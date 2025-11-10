// Import our custom CSS
import '../scss/styles.scss'
// Import all of Bootstrap’s JS
function applyBaseDiscount(price, mode, value) {
    if (mode === "pct") {
        // nieuwe prijs = prijs × (1 − value/100)
        return price * (1 - (value / 100));
    }
    // mode === "eur"
    // nieuwe prijs = prijs − value
    return price - value;
}

function applyCoupon(extraPct, currentPrice) {
    // extra korting in procent op de tussenprijs
    // nieuwe prijs = currentPrice × (1 − extraPct/100)
    return currentPrice * (1 - (extraPct / 100));
}

function clampToFloor(price, floor) {
    return price < floor ? floor : price;
}

function euros(n) {
    // eenvoudige formatter voor twee decimalen
    return Number(n).toFixed(2);
}

function handleM6() {
    const out   = document.getElementById("ex_out");
    const pRaw  = document.getElementById("ex_price").value.trim();
    const mVal  = document.getElementById("ex_mode").value;
    const dRaw  = document.getElementById("ex_disc").value.trim();
    const cRaw  = document.getElementById("ex_coupon").value.trim();
    const fRaw  = document.getElementById("ex_floor").value.trim();

    const price = parseFloat(pRaw);
    const disc  = parseFloat(dRaw);
    const floor = parseFloat(fRaw);

    // Validatie basisvelden
    const baseInvalid =
        pRaw === "" || Number.isNaN(price) || price < 0 ||
        dRaw === "" || Number.isNaN(disc)  || disc < 0 ||
        fRaw === "" || Number.isNaN(floor) || floor < 0;

    if (baseInvalid) {
        out.className = "alert alert-warning mb-0";
        out.textContent = "Vul geldige waarden in voor prijs, korting en minimumprijs";
        return;
    }

    // Extra validatie per kortingswijze
    if (mVal === "pct" && (disc > 100)) {
        out.className = "alert alert-warning mb-0";
        out.textContent = "Percentage moet tussen 0 en 100 liggen";
        return;
    }
    if (mVal === "eur" && (disc > price)) {
        out.className = "alert alert-warning mb-0";
        out.textContent = "Vast bedrag mag niet groter zijn dan de prijs";
        return;
    }

    // Stap 1: basis-korting
    const afterBase = applyBaseDiscount(price, mVal, disc);
    const baseReduction = price - afterBase;

    // Stap 2: eventuele coupon
    const hasCoupon = cRaw.toUpperCase() === "SAVE10";
    const afterCoupon = hasCoupon ? applyCoupon(10, afterBase) : afterBase;
    const couponReduction = afterBase - afterCoupon;

    // Stap 3: minimumprijs toepassen
    const finalPrice = clampToFloor(afterCoupon, floor);
    const floorApplied = finalPrice !== afterCoupon;

    // Opbouw van een duidelijk overzicht
    const lines = [
        `Oorspronkelijke prijs:  €${euros(price)}`,
        mVal === "pct"
            ? `Korting (${euros(disc)}%):        −€${euros(baseReduction)}`
            : `Korting (bedrag):        −€${euros(baseReduction)}`,
        hasCoupon
            ? `Extra coupon (10%):      −€${euros(couponReduction)}`
            : `Extra coupon:            geen`,
        `Tussenprijs:             €${euros(afterCoupon)}`,
        `Minimumprijs toegepast:  ${floorApplied ? "ja" : "nee"}`,
        `Eindprijs:               €${euros(finalPrice)}`
    ];

    // Kleurkeuze voor output:
    // - succes als geen floor ingreep en prijs daalt
    // - info als geen korting of geen verandering
    // - warning als floor ingreep nodig was
    let klass = "alert alert-success mb-0";
    if (floorApplied) klass = "alert alert-warning mb-0";
    if (finalPrice === price && !floorApplied) klass = "alert alert-info mb-0";

    out.className = klass;
    out.innerHTML = `<pre class="mb-0" style="white-space:pre-wrap">${lines.join("\n")}</pre>`;
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("ex_btn")?.addEventListener("click", handleM6);
});