// Import our custom CSS
import '../scss/styles.scss'
// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'
// ------------------------------
// Hoofdstuk 7: ES6 Arrays
// Oefening H7-A — Node Inspector
// ------------------------------
document.addEventListener('DOMContentLoaded', () => {
    // Elementen ophalen
    const box           = document.getElementById('ni_container');
    const btnChildNodes = document.getElementById('ni_count_childNodes');
    const btnChildren   = document.getElementById('ni_count_children');
    const outNodes      = document.getElementById('ni_out_nodes');
    const outChildren   = document.getElementById('ni_out_children');

    // Klik: tel ALLE directe kind-nodes (incl. tekst/whitespace)
    btnChildNodes.addEventListener('click', () => {
        // childNodes is een lijst van nodes (element + tekst + comments)
        const totaal = box.childNodes.length;
        console.log(box.childNodes);// telt ook spaties/line breaks
        outNodes.textContent = totaal;          // enkel getal tonen
    });

    // Klik: tel ENKEL element-kinderen (<div>, <ul>, <li>, ...)
    btnChildren.addEventListener('click', () => {
        // children is een HTMLCollection met alleen element nodes
        const totaal = box.children.length;
        console.log(box.children);
        outChildren.textContent = totaal;       // enkel getal tonen
    });
});
