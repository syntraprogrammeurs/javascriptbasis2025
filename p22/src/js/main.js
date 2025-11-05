// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
//function naam(parameter){
// return resultaat
//}

// naam(waarde)

function bepaalFruit(naam) {
    const f = naam.toLowerCase();

    if (f === "appel") return { text: "Je koos appel", emoji: "🍎" };
    if (f === "banaan") return { text: "Je koos banaan", emoji: "🍌" };

    return { text: "Onbekend fruit", emoji: "❓" };
}

function toonFruit() {
    const inp = document.getElementById("fr_input");
    const txt = document.getElementById("fr_text");
    const box = document.getElementById("fr_box");

    const waarde = inp.value.trim();

    if (!waarde) {
        txt.className = "alert alert-warning mb-2";
        txt.textContent = "⚠️ Vul een fruitsoort in!";
        box.textContent = "❓";
        return;
    }

    const res = bepaalFruit(waarde);

    txt.className = "alert alert-success mb-2";
    txt.textContent = res.text;
    box.textContent = res.emoji;
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("fr_btn")
        ?.addEventListener("click", toonFruit);
});
