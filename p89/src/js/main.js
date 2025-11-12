// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
// ---------------------------------------------
// Mini-opdracht: Animal base + Dog child (bonus: Cat)
// ---------------------------------------------
class Animal {
    constructor(name, soort) {
        this.name = name;
        this.soort = soort;
    }
    speak() {
        return `🐾 ${this.name} is een ${this.soort}`;
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name, "hond");
    }
    speak() {
        return `🐶 ${this.name} blaft!`;
    }
}

// Bonus (emoji per dier)
class Cat extends Animal {
    constructor(name) {
        super(name, "kat");
    }
    speak() {
        return `🐱 ${this.name} miauwt!`;
    }
}

const pets = [];

function addPet() {
    const name = document.getElementById("pet_name").value.trim();
    const type = document.getElementById("pet_type").value;
    const list = document.getElementById("pet_list");
    if (!name) return;

    let pet;
    if (type === "hond") pet = new Dog(name);
    else if (type === "kat") pet = new Cat(name);
    else pet = new Animal(name, type);

    pets.push(pet);

    list.innerHTML = pets
        .map(p => `<li class="list-group-item">${p.speak()}</li>`)
        .join("");

    document.getElementById("pet_name").value = "";
    document.getElementById("pet_name").focus();
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("pet_btn")?.addEventListener("click", addPet);
    document.getElementById("pet_name")?.addEventListener("keydown", (e) => {
        if (e.key === "Enter") addPet();
    });
});
