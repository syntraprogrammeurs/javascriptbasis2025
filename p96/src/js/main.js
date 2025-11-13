// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("dc_btn")?.addEventListener("click", () => {

        const ua = navigator.userAgent;
        const width = window.innerWidth;

        const isTouch = navigator.maxTouchPoints > 0;
        const os =
            ua.includes("Windows") ? "Windows" :
                ua.includes("Mac") ? "MacOS" :
                    ua.includes("Linux") ? "Linux" :
                        "Onbekend";

        const device =
            width < 768 ? "📱 Mobiel" :
                width < 1024 ? "📲 Tablet" :
                    "💻 Desktop";

        const info = [
            `Online: ${navigator.onLine ? " Ja" : "❌ Nee"}`,
            `Touch: ${isTouch ? "" : "❌"}`,
            `Device: ${device}`,
            `Taal: ${navigator.language}`,
            `Besturingssysteem: ${os}`
        ];

        document.getElementById("dc_list").innerHTML =
            info.map(i => `<li class="list-group-item">${i}</li>`).join("");
    });
});
