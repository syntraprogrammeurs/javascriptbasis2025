// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js

// ----------------------------------
// Hoofdstuk 4: Named Functions
// Oefening H4-A — Template Previewer
// ----------------------------------
document.addEventListener('DOMContentLoaded', initTemplatePreviewer);

// ========== IMPURE: entrypoint ==========
function initTemplatePreviewer() {
    // UI refs
    const inpFirst  = document.getElementById('tp_first');
    const inpLast   = document.getElementById('tp_last');
    const inpCity   = document.getElementById('tp_city');
    const pillP1    = document.getElementById('tp_p1');
    const pillP2    = document.getElementById('tp_p2');
    const previewEl = document.getElementById('tp_preview');

    // State
    let currentTpl = 'p1'; // 'p1' | 'p2'

    // Koppelingen
    inpFirst.addEventListener('input', handleInputChange);
    inpLast .addEventListener('input', handleInputChange);
    inpCity .addEventListener('input', handleInputChange);

    pillP1.addEventListener('click', () => handlePillClick('p1'));
    pillP2.addEventListener('click', () => handlePillClick('p2'));

    // Eerste render
    render();

    // ======== IMPURE HANDLERS ========
    function handleInputChange() {
        render();
    }

    function handlePillClick(which) {
        currentTpl = which;
        setActivePill(pillP1, pillP2, which);
        render();
    }

    // ======== IMPURE RENDER ========
    function render() {
        const values = readValues(inpFirst, inpLast, inpCity);
        const msg = makeMessage(currentTpl, values);

        // placeholder weg, platte tekst erin
        previewEl.className = ''; // verwijder placeholder-klassen
        previewEl.textContent = msg;
    }
}

// ========== PURE: logica ==========
function readValues(inpFirst, inpLast, inpCity) {
    // leest DOM (impure in strikte zin), maar behoudt hier voor compactheid van handlers
    return {
        first: inpFirst.value.trim(),
        last:  inpLast.value.trim(),
        city:  inpCity.value.trim()
    };
}

function isComplete(values) {
    return values.first !== '' && values.last !== '' && values.city !== '';
}

function tmplP1(values) {
    // P1: korte zin
    return `Hallo ${values.first} ${values.last} uit ${values.city}!`;
}

function tmplP2(values) {
    // P2: langere zin
    return `${values.first} ${values.last} woont in ${values.city}. Fijn dat je er bent, ${values.first}!`;
}

function makeMessage(templateKey, values) {
    if (!isComplete(values)) return 'Vul alle velden in';

    if (templateKey === 'p1') return tmplP1(values);
    if (templateKey === 'p2') return tmplP2(values);

    return 'Onbekende template';
}

// ========== IMPURE: UI helpers ==========
function setActivePill(p1Btn, p2Btn, which) {
    // active class beheren zoals Bootstrap pills
    if (which === 'p1') {
        p1Btn.className = 'nav-link active';
        p2Btn.className = 'nav-link';
    } else {
        p1Btn.className = 'nav-link';
        p2Btn.className = 'nav-link active';
    }
}
/*
* Een pure functie en een impure functie verschillen doordat ze een ander doel hebben in je code.

---

Pure functie

Doet een berekening, raakt niets anders aan.

| Kenmerk             | Betekenis                                                                        |
| ------------------- | -------------------------------------------------------------------------------- |
| Heeft alleen input  | Gebruikt enkel wat je meegeeft (parameters)                                      |
| Geeft alleen output | Return van een resultaat                                                         |
| Geen bijwerkingen   | Verandert niets in de UI, console, netwerk, database, variabelen buiten zichzelf |
| Altijd voorspelbaar | Met dezelfde input komt altijd dezelfde output                                   |

**Voorbeeld**

function dubbel(x) {
  return x * 2;
}

Zelfde input → zelfde output, altijd.

---

Impure functie

Doet iets met de buitenwereld (bijwerking).

| Kenmerk                             | Betekenis                         |
| ----------------------------------- | --------------------------------- |
| Past dingen aan buiten zichzelf aan | DOM, console, netwerk, opslag…    |
| Geen vaste output nodig             | Hoeft geen return te hebben       |
| Kan onverwachte gevolgen hebben     | Verandering hangt af van omgeving |

Voorbeeld

function toon(tekst) {
  document.getElementById("box").textContent = tekst;
}

Dit verandert de UI, dus dit is impure.

Eenvoudige manier om te onthouden

| Pure                | Impure                     |
| ------------------- | -------------------------- |
| Denkt               | Doet                       |
| Rekent              | Verandert dingen           |
| Returnt             | Update UI / console / data |
| Altijd voorspelbaar | Afhankelijk van omgeving   |

Waarom gebruiken we beide?

* Pure functies houden logica helder en testbaar.
* Impure functies verbinden de logica met de echte wereld (UI).

In deze cursus:

> Pure = berekenen
> Impure = DOM & events

* */