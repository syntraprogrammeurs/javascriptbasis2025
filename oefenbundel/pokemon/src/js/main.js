// Import our custom CSS
import '../scss/styles.scss'
// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'
async function loadPokeAPI() {
    const list = document.querySelector(".row.g-4");

    try {

        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
        if (!res.ok) throw new Error("Load error");

        const data = await res.json();
        console.log(data.results);   // ← NU ZIE JE DIT WEL

        const items = data.results;

        list.innerHTML = items
            .map(p => `
                <div class="col">
                    <div class="card shadow-sm h-100 border-0">
                        <div class="card-header bg-primary text-white text-center">
                            ${p.name}
                        </div>
                        <img
                            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                            class="card-img-top p-3"
                            alt="${p.name}"
                        >
                        <div class="card-body">
                            <h5 class="card-title text-center">#001</h5>
                            <ul class="list-group small">
                                <li class="list-group-item d-flex justify-content-between">
                                    <span>Type</span><span>Grass / Poison</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between">
                                    <span>Hoogte</span><span>0.7 m</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between">
                                    <span>Gewicht</span><span>6.9 kg</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            `)
            .join("");

    } catch (error) {
        console.error("API fout:", error);
    }
}

document.addEventListener("DOMContentLoaded", loadPokeAPI);


