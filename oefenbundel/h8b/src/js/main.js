// Import our custom CSS
import '../scss/styles.scss'
// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'
// ----------------------------------
// Hoofdstuk 8: DOM Nodes & Root Nodes
// Oefening H8-B — Section Pager
// ----------------------------------
document.addEventListener('DOMContentLoaded', () => {
    // Sections en navigatie-elementen
    const sections   = Array.from(document.querySelectorAll('#sp_sections .sp_sec'));
    const btnPrev    = document.getElementById('sp_prev');
    const btnNext    = document.getElementById('sp_next');
    const listNav    = document.getElementById('sp_list');

    // Start op sectie 0
    let index = 0;

    // Toon exact één sectie en update UI-states
    function render() {
        // 1) Sections tonen/verbergen
        sections.forEach((sec, i) => {
            if (i === index) sec.classList.remove('d-none');
            else sec.classList.add('d-none');
        });

        // 2) Pager knoppen (disable aan randen)
        const prevItem = btnPrev.closest('.page-item');
        const nextItem = btnNext.closest('.page-item');

        if (index === 0) prevItem.classList.add('disabled');
        else prevItem.classList.remove('disabled');

        if (index === sections.length - 1) nextItem.classList.add('disabled');
        else nextItem.classList.remove('disabled');

        // 3) Offcanvas lijst active item
        const items = listNav.querySelectorAll('.list-group-item');
        items.forEach((li, i) => li.classList.toggle('active', i === index));
    }

    // Vorige/volgende handlers (niet circuleren)
    btnPrev.addEventListener('click', () => {
        if (index > 0) {
            index -= 1;
            render();
        }
    });

    btnNext.addEventListener('click', () => {
        if (index < sections.length - 1) {
            index += 1;
            render();
        }
    });

    // Offcanvas list: klik op item → ga naar die index
    listNav.addEventListener('click', (e) => {
        const li = e.target.closest('.list-group-item');
        if (!li) return;

        const all = Array.from(listNav.querySelectorAll('.list-group-item'));
        const i = all.indexOf(li);
        if (i !== -1) {
            index = i;
            render();
        }
    });

    // Initial draw
    render();
});
