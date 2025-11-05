// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
//function naam(parameter){
// return resultaat
//}

// naam(waarde)

function geheimBericht() {
    const secret = "Code unlocked 🗝️";

    function leesSecret() {
        return secret;
    }

    return leesSecret();
}

function handleSecret() {
    const out = document.getElementById("sc2_output");
    out.className = "alert alert-success mb-0";
    out.textContent = geheimBericht();
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("sc2_btn")
        ?.addEventListener("click", handleSecret);
});
