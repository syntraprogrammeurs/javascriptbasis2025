// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
function updateFTCount() {
    const body = document.getElementById("ft_body");
    document.getElementById("ft_count").textContent = body.children.length;
}

document.addEventListener("DOMContentLoaded", () => {
    const inp = document.getElementById("ft_input");

    updateFTCount();

    inp.addEventListener("focus", () => {
        inp.style.border = "2px solid blue";
    });

    inp.addEventListener("blur", () => {
        inp.style.border = "1px solid #ccc";
    });

    document.getElementById("ft_btn")?.addEventListener("click", () => {
        inp.focus();
    });
});


