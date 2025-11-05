// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js

// ------------------------------
// Hoofdstuk 3: Function Scoping
// Oefening H3-B — Slug Maker
// ------------------------------
document.addEventListener('DOMContentLoaded', () => {

    const inp  = document.getElementById('sm_title');
    const slug = document.getElementById('sm_slug');

    // Pure functie: maakt slug van titel
    function makeSlug(title) {
        // lowercase
        let t = title.toLowerCase();

        // trim spaties
        t = t.trim();

        // vervang spaties en underscores door koppeltekens
        t = t.replace(/[\s_]+/g, '-');

        // verwijder alles wat geen letter, cijfer of - is
        t = t.replace(/[^a-z0-9-]/g, '');

        // meerdere - na elkaar -> één -
        t = t.replace(/-+/g, '-');

        // trim koppeltekens aan begin/einde
        t = t.replace(/^-+|-+$/g, '');

        return t;
    }

    // UI handler
    function handleInput() {
        const text = inp.value;
        const s = makeSlug(text);
        slug.textContent = s || '-';
    }

    // Live update
    inp.addEventListener('input', handleInput);
});
