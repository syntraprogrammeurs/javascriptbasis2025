// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js

// ----------------------------------
// Hoofdstuk 5: Template Literals
// Oefening H5-A — Counter Console
// ----------------------------------
document.addEventListener('DOMContentLoaded', () => {
    // UI refs
    const btnInc1 = document.getElementById('cc_inc1');
    const btnInc5 = document.getElementById('cc_inc5');
    const btnDec1 = document.getElementById('cc_dec1');
    const btnReset = document.getElementById('cc_reset');

    const badgeVal = document.getElementById('cc_val');
    const bar = document.getElementById('cc_bar');

    // module-scope state
    let count = 0; // 0–100

    // render met template literals
    function render() {
        badgeVal.textContent = `${count}`;
        bar.style.width = `${count}%`;
        bar.setAttribute('aria-valuenow', `${count}`);
        bar.textContent = `${count}%`;
    }

    // controls (arrow functions) + grenzen 0–100
    btnInc1.addEventListener('click', () => { count = Math.min(100, count + 1); render(); });
    btnInc5.addEventListener('click', () => { count = Math.min(100, count + 5); render(); });
    btnDec1.addEventListener('click', () => { count = Math.max(0, count - 1); render(); });
    btnReset.addEventListener('click', () => { count = 0; render(); });

    // init
    render();
});
