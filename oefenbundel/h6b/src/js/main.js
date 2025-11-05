// Import our custom CSS
import '../scss/styles.scss'

// ----------------------------------
// Hoofdstuk 6: Arrow Functions (=>)
// Oefening H6-B — Shop Categories
// ----------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const crumb   = document.getElementById('sc_crumb');
    const filters = document.getElementById('sc_filters');
    const itemsEl = document.getElementById('sc_items');

    // lokale dataset
    const products = [
        { name: 'MacBook Air 13',      cat: 'Laptops' },
        { name: 'ThinkPad X1 Carbon',  cat: 'Laptops' },
        { name: 'Dell Ultrasharp 27"', cat: 'Monitors' },
        { name: 'LG 34" UltraWide',    cat: 'Monitors' },
        { name: 'USB-C Dock',          cat: 'Accessoires' },
        { name: 'Wireless Mouse',      cat: 'Accessoires' },
    ];

    let current = 'Alle';

    // helpers

    // Deze functie zorgt ervoor dat slechts één filter-item actief is.
    // Eerst verwijdert ze de active-klasse bij alle items,
    // daarna voegt ze active toe aan het item waarop jij geklikt hebt.
    //
    // Dus: eerst alles netjes schoonmaken, dan het juiste element aanzetten.

    // const setActive = li => { ... }
    // We maken een arrow function met de naam setActive
    // Ze krijgt één parameter: li
    // li staat voor het list-item waarop geklikt is
    // Denk: "Deze functie activeert het LI-element dat ik doorgeef."

    // [...filters.children]
    // filters.children geeft een HTMLCollection terug
    // (een soort lijst met alle <li> elementjes binnen #sc_filters)
    // [ ... ] is de spread operator
    // Hiermee maken we een echte array van die lijst
    // Waarom?
    // Omdat een HTMLCollection niet alle array-methodes heeft, maar een array wel.

// .forEach(el => el.classList.remove('active'))
//     We lopen over elk filter-item
//     el = één <li> per ronde
//     Voor elke el roepen we classList.remove('active') op
//     Dus hier zeggen we:
//     "Haal de class active weg bij iedereen."

    // li.classList.add('active')
    // Daarna voegen we active toe aan het aangewezen element (het geklikte li)
    // Hierdoor wordt dat item visueel “actief” (Bootstrap styling)
    const setActive = li => {
        [...filters.children].forEach(el => el.classList.remove('active'));
        li.classList.add('active');
    };

    // Als de gekozen categorie Alle is, toon dan alle producten.
    // Anders, toon alleen de producten waarvan de categorie hetzelfde is als wat de gebruiker koos.
//     current === 'Alle':
//        Kijk of de huidige gekozen filter "Alle" is.
//     ? products:
//        Ja → dan zetten we list gelijk aan de volledige lijst producten.
//     : products.filter(...)
//        Nee → dan filteren we de producten zodat alleen de juiste categorie overblijft.
//        p is een product uit de lijst products. Tijdens de filter doorlopen we dus achtereenvolgens alle producten
//        uit de array

//     list.map(...) maakt een lijst van HTML-stukjes, zoals:
//     [
//         "<li>MacBook Air</li>",
//         "<li>Dell Monitor</li>",
//         "<li>USB-C Hub</li>"
//     ]
//         .join('') plakt die stukjes aan elkaar zonder tussenstuk
//     Resultaat na join:
//         <li>MacBook Air</li><li>Dell Monitor</li><li>USB-C Hub</li>
//     Dit is één string, klaar om in innerHTML te zetten.
//     Waarom is join('') nodig?
//         Omdat .map() een array geeft.
//         innerHTML verwacht een string, niet een array.
//     join('') zorgt ervoor dat:
//         ["<li>1</li>","<li>2</li>"]
//     wordt:
//         "<li>1</li><li>2</li>"
    const render = () => {
        const list = current === 'Alle'
            ? products
            : products.filter(p => p.cat === current);

        itemsEl.innerHTML = list.map(p =>
            `<li class="list-group-item">${p.name}</li>`
        ).join('');
        crumb.textContent = current;
    };

    // event delegation voor alle filter-items
    filters.addEventListener('click', e => {
        const li = e.target.closest('.list-group-item');
        if (!li) return;

        current = li.textContent.trim();
        setActive(li);
        render();
    });

    // init
    // de functie wordt meteen geladen tijdens de start van de pagina om alle gegevens te laden in de pagina.
    render();
});
