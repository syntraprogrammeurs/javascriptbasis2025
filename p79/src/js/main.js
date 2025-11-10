// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
function berekenLeeftijdJaar(datum) {
    const nu = new Date();
    let leeftijd = nu.getFullYear() - datum.getFullYear();

    const isVoorVerjaardag =
        nu.getMonth() < datum.getMonth() ||
        (nu.getMonth() === datum.getMonth() && nu.getDate() < datum.getDate());

    if (isVoorVerjaardag) leeftijd--;

    return leeftijd;
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("dob_btn")?.addEventListener("click", () => {
        const d = Number(document.getElementById("dob_day").value);
        const m = Number(document.getElementById("dob_month").value);
        const y = Number(document.getElementById("dob_year").value);
        const out = document.getElementById("dob_out");

        if (!d || !m || !y) {
            out.className = "alert alert-danger mb-0";
            out.textContent = "❌ Vul dag, maand en jaar in";
            return;
        }

        const datum = new Date(y, m - 1, d);
        const dagen = ["Zondag","Maandag","Dinsdag","Woensdag","Donderdag","Vrijdag","Zaterdag"];
        const weekday = dagen[datum.getDay()];
        const age = berekenLeeftijdJaar(datum);

        out.className = "alert alert-success mb-0";
        out.textContent = `🎂 Je bent ongeveer ${age} jaar oud en geboren op een ${weekday}`;
    });
});
