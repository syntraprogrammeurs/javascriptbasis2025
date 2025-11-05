// Import our custom CSS
import '../scss/styles.scss'
// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'
// ------------------------------
// Hoofdstuk 7: ES6 Arrays
// Oefening H7-B — DOM Tree Flattener
// ------------------------------
document.addEventListener('DOMContentLoaded', renderTree);

// Pure: maak <li>-lijst uit array van namen
function maakLijstHTML(items) {
    return items.map(n => `<li class="list-group-item">${n}</li>`).join('');
}

// Pure: depth-first element-namen verzamelen (geen textnodes)
function flattenTree(rootEl) {
    const namen = [];

    // recursieve walk
    function walk(el) {
        namen.push(el.nodeName);            // bv. DIV, UL, LI
        const kids = el.children;           // enkel elementnodes
        for (let i = 0; i < kids.length; i++) {
            walk(kids[i]);                    // dieper gaan (depth-first)
        }
    }

    walk(rootEl);
    return namen;
}

// Impure: lezen uit DOM en resultaat tonen
function renderTree() {
    const root = document.getElementById('tf_root');
    const out  = document.getElementById('tf_out');

    const namen = flattenTree(root);
    out.innerHTML = maakLijstHTML(namen); // overschrijft elke run
}
