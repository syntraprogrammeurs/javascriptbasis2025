// Import our custom CSS
import '../scss/styles.scss'
// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'
async function loadPokeAPI() {
    const grid = document.querySelector(".row.row-cols-1.row-cols-sm-2.row-cols-md-3.row-cols-lg-4.g-4");

    try {
        console.log("Lijst ophalen...");

        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
        if (!res.ok) throw new Error("Load error (list)");

        const data = await res.json();
        const list = data.results; // [{ name, url }, ...]

        // Alle detail-requests parallel ophalen
        console.log("Details ophalen...");
        const detailPromises = list.map(p =>

            //p.url = bijv. "https://pokeapi.co/api/v2/pokemon/1/"
            fetch(p.url).then(r => {
                if (!r.ok) throw new Error("Load error (detail)");
                return r.json();
            })
        );

        const details = await Promise.all(detailPromises);

        // Cards genereren
        grid.innerHTML = details
            .map(poke => {
                const id = poke.id;                                   // nummer
                const name = poke.name;                               // naam
                const img = poke.sprites.front_default;               // sprite
                const types = poke.types
                    .map(t => t.type.name)
                    .join(" / ");                                     // bv "grass / poison"
                const heightM = (poke.height / 10).toFixed(1);        // decimeters -> meter
                const weightKg = (poke.weight / 10).toFixed(1);       // hectogram -> kg

                return `
                <div class="col">
                    <div class="card shadow-sm h-100 border-0">
                        <div class="card-header bg-primary text-white text-center text-capitalize">
                            ${name}
                        </div>
                        <img
                            src="${img}"
                            class="card-img-top p-3"
                            alt="${name}"
                        >
                        <div class="card-body">
                            <h5 class="card-title text-center">#${String(id).padStart(3, "0")}</h5>
                            <ul class="list-group small">
                                <li class="list-group-item d-flex justify-content-between">
                                    <span>Type</span><span class="text-capitalize">${types}</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between">
                                    <span>Hoogte</span><span>${heightM} m</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between">
                                    <span>Gewicht</span><span>${weightKg} kg</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>`;
            })
            .join("");

    } catch (err) {
        console.error("API fout:", err);
        grid.innerHTML = `
            <div class="col">
                <div class="alert alert-danger w-100">
                    ❌ Fout bij het laden van de Pokédex.
                </div>
            </div>`;
    }
}

document.addEventListener("DOMContentLoaded", loadPokeAPI);



