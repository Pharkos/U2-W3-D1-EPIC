class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }

  sameOwner = function (otherPet) {
    if (this.ownerName === otherPet.ownerName) {
      return `${this.petName} has same owner ${otherPet.petName} `;
    } else {
      return `${this.petName} has a different owner from ${otherPet.petName}`;
    }
  };
}

// გადავდივართ

const form = document.getElementById("petForm");
const petNameEl = document.getElementById("petName");
const ownerNameEl = document.getElementById("ownerName");
const speciesEl = document.getElementById("species");
const breedEl = document.getElementById("breed");

const pets = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const petName = petNameEl.value;
  const ownerName = ownerNameEl.value;
  const species = speciesEl.value;
  const breed = breedEl.value;

  const newPet = new Pet(petName, ownerName, species, breed);

  pets.push(newPet);

  renderList();

  console.log(petName, ownerName, species, breed);
});

const list = document.getElementById("petList");

function renderList() {
  list.innerHTML = "";
  for (let i = 0; i < pets.length; i++) {
    const p = pets[i];
    const li = document.createElement("li");
    li.textContent =
      p.petName + " — " + p.ownerName + " — " + p.species + " — " + p.breed;
    list.appendChild(li);
  }
}
