// Import our custom CSS
import '../scss/styles.scss'
// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'
// ----------------------------------
// Hoofdstuk 8: DOM Nodes & Root Nodes
// Oefening H8-A — Document Roots Dashboard
// ----------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('rn_refresh');

    // Hulpfunctie: schrijf waardes in 3 badges van één rij
    function vulRij(idName, idChildren, idHas, node) {
        // nodeName: bv. "HTML", "HEAD", "BODY"
        document.getElementById(idName).textContent = node.nodeName;

        // children.length: aantal element-kinderen
        document.getElementById(idChildren).textContent = node.children.length;

        // hasChildNodes(): true/false als string
        document.getElementById(idHas).textContent = node.hasChildNodes() ? 'true' : 'false';
    }

    // Ververs alle root-infos
    function verversRoots() {
        // Root nodes
        const htmlNode = document.documentElement; // <html>
        const headNode = document.head;            // <head>
        const bodyNode = document.body;            // <body>

        // HTML-rij
        vulRij('rn_html_name', 'rn_html_children', 'rn_html_has', htmlNode);

        // HEAD-rij
        vulRij('rn_head_name', 'rn_head_children', 'rn_head_has', headNode);

        // BODY-rij
        vulRij('rn_body_name', 'rn_body_children', 'rn_body_has', bodyNode);
    }

    // Klik op "Verversen"
    btn.addEventListener('click', verversRoots);

    // Initieel één keer meten bij laden
    verversRoots();
});
