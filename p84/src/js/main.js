// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
function Product(name, price) {
    this.name = name;
    this.price = price;
    this.label = function() {
        return `${this.name} — €${this.price.toFixed(2)}`;
    };
}

const products = [];

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("prod_btn")?.addEventListener("click", () => {
        const name = document.getElementById("prod_name").value.trim();
        const price = Number(document.getElementById("prod_price").value);

        if (!name || !price) return;

        const item = new Product(name, price);
        products.push(item);

        document.getElementById("prod_list").innerHTML = products
            .map(p => `<li class="list-group-item">${p.label()}</li>`)
            .join("");
    });
});
