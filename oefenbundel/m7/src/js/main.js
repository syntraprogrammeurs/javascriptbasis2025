// Import our custom CSS
import '../scss/styles.scss'
// Import all of Bootstrap’s JS
// -----------------------------------------
// Eindoefening — Rekenmachine (Windows-stijl)
// -----------------------------------------

// Interne toestand
let mem = 0;                 // geheugen
let cur = "0";               // huidige invoer als string (met komma)
let prev = null;             // vorig getal (number)
let op = null;               // huidig bewerkingsteken: "+", "−", "×", "÷"
let justEvaluated = false;   // laatste actie was "=" (om nieuwe invoer te starten)

// Helpers
const $ = (id) => document.getElementById(id);
const display = () => { $("calc_display").textContent = cur; };
const toNumber = (s) => parseFloat(s.replace(",", "."));             // "12,3" -> 12.3
const fromNumber = (n) => String(n).replace(".", ",");               // 12.3  -> "12,3"
const isZero = (s) => s === "0" || s === "-0";

function setCurFromNumber(n) {
    // Beperk op lengte en verwijder onnodige trailing nullen
    if (!Number.isFinite(n)) {
        cur = "Niet gedefinieerd";
        return;
    }
    let s = fromNumber(n);
    if (s.includes(",")) {
        // trim trailing zeros
        s = s.replace(/,?0+$/, (m) => (m.startsWith(",") ? "" : m));
    }
    cur = s;
}

function applyOp(a, b, operator) {
    switch (operator) {
        case "+": return a + b;
        case "−": return a - b;
        case "×": return a * b;
        case "÷": return b === 0 ? NaN : a / b;
        default:  return b;
    }
}

// Invoer: cijfers
function pressDigit(d) {
    if (justEvaluated || (op && isZero(cur))) {
        cur = d;
        justEvaluated = false;
        display();
        return;
    }
    if (cur === "0") cur = d;
    else if (cur === "-0") cur = "-" + d;
    else cur += d;
    display();
}

// Invoer: komma
function pressComma() {
    if (justEvaluated) {
        cur = "0,";
        justEvaluated = false;
        display();
        return;
    }
    if (!cur.includes(",")) {
        cur += ",";
        display();
    }
}

// Tekens: + − × ÷
function setOperator(nextOp) {
    const n = toNumber(cur);
    if (prev === null) {
        prev = n;
    } else if (op && !justEvaluated) {
        prev = applyOp(prev, n, op);
        setCurFromNumber(prev);
    }
    op = nextOp;
    justEvaluated = false;
    display();
    cur = "0";
}

// =
function evaluate() {
    const n = toNumber(cur);
    if (op === null && prev === null) return;

    const a = prev === null ? 0 : prev;
    const result = applyOp(a, n, op);
    setCurFromNumber(result);
    prev = result;
    op = null;
    justEvaluated = true;
    display();
}

// CE (alleen huidige invoer wissen)
function clearEntry() {
    cur = "0";
    display();
}

// C (alles wissen)
function clearAll() {
    cur = "0";
    prev = null;
    op = null;
    justEvaluated = false;
    display();
}

// Backspace
function backspace() {
    if (justEvaluated) return;
    if (cur.length <= 1 || (cur.startsWith("-") && cur.length === 2)) {
        cur = "0";
    } else {
        cur = cur.slice(0, -1);
        if (cur === "-") cur = "0";
    }
    display();
}

// Wissel teken
function toggleSign() {
    if (cur.startsWith("-")) cur = cur.slice(1);
    else if (!isZero(cur)) cur = "-" + cur;
    display();
}

// Percentage (eenvoudig: huidige invoer / 100)
function percent() {
    const n = toNumber(cur);
    setCurFromNumber(n / 100);
    display();
}

// 1/x
function invert() {
    const n = toNumber(cur);
    setCurFromNumber(1 / n);
    prev = null; op = null; justEvaluated = true;
    display();
}

// x²
function pow2() {
    const n = toNumber(cur);
    setCurFromNumber(n * n);
    prev = null; op = null; justEvaluated = true;
    display();
}

// √x
function sqrt() {
    const n = toNumber(cur);
    setCurFromNumber(n < 0 ? NaN : Math.sqrt(n));
    prev = null; op = null; justEvaluated = true;
    display();
}

// Memory
function mClear() { mem = 0; }
function mRecall() { setCurFromNumber(mem); display(); justEvaluated = true; }
function mStore()  { mem = toNumber(cur); }
function mPlus()   { mem += toNumber(cur); }
function mMinus()  { mem -= toNumber(cur); }

// Event-koppelingen
document.addEventListener("DOMContentLoaded", () => {
    // Cijfers
    document.querySelectorAll("[data-digit]").forEach(btn => {
        btn.addEventListener("click", () => pressDigit(btn.getAttribute("data-digit")));
    });
    // Komma en basis
    $("btn_comma").addEventListener("click", pressComma);
    $("btn_ce").addEventListener("click", clearEntry);
    $("btn_c").addEventListener("click", clearAll);
    $("btn_back").addEventListener("click", backspace);
    $("btn_sign").addEventListener("click", toggleSign);
    $("btn_pct").addEventListener("click", percent);
    $("btn_inv").addEventListener("click", invert);
    $("btn_pow2").addEventListener("click", pow2);
    $("btn_sqrt").addEventListener("click", sqrt);
    $("btn_eq").addEventListener("click", evaluate);

    // Operators
    document.querySelectorAll("[data-op]").forEach(btn => {
        btn.addEventListener("click", () => setOperator(btn.getAttribute("data-op")));
    });

    // Memory
    $("calc_mc").addEventListener("click", mClear);
    $("calc_mr").addEventListener("click", mRecall);
    $("calc_ms").addEventListener("click", mStore);
    $("calc_mplus").addEventListener("click", mPlus);
    $("calc_mminus").addEventListener("click", mMinus);

    // Init
    display();
});
