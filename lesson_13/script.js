const gallery = document.getElementById("gallery");
const sidebar = document.getElementById("sidebar");

const characters = [
  {
    name: "Anakin Skywalker",
    description: "The Chosen One, who was meant to bring balance to the Force.",
    img: "resources/anakin.jpg",
    isJedi: true,
    age: 30,
  },
  {
    name: "Luke Skywalker",
    description:
      "A legendary Jedi Knight who fought in the Galactic Civil War.",
    img: "resources/luke.jpg",
    isJedi: true,
    age: 25,
  },
  {
    name: "Han Solo",
    description: "A smuggler and captain of the Millennium Falcon.",
    img: "resources/hansolo.jpg",
    isJedi: false,
    age: 35,
  },
  {
    name: "Princess Leia",
    description: "A leader in the Rebel Alliance and twin sister to Luke.",
    img: "resources/leia.jpg",
    isJedi: false,
    age: 30,
  },
  {
    name: "Obi-Wan Kenobi",
    description: "A wise and powerful Jedi Master.",
    img: "resources/obiwan.jpg",
    isJedi: true,
    age: 60,
  },
];

// Функция для создания карточек
function renderCards(characterArray) {
  gallery.innerHTML = "";
  characterArray.forEach((character) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
            <img src="${character.img}" alt="${character.name}">
            <h3>${character.name}</h3>
            <p>${character.description}</p>
        `;
    gallery.appendChild(card);
  });
}

// Первоначальный рендеринг всех карточек
renderCards(characters);

// Фильтры
document
  .getElementById("showAll")
  .addEventListener("click", () => renderCards(characters));
document
  .getElementById("filterJedi")
  .addEventListener("click", () =>
    renderCards(characters.filter((c) => c.isJedi))
  );
document
  .getElementById("filterNonJedi")
  .addEventListener("click", () =>
    renderCards(characters.filter((c) => !c.isJedi))
  );

// Удаление карточек
document.getElementById("deleteFirst").addEventListener("click", () => {
  characters.shift(); // Удаляем первый элемент
  renderCards(characters);
});

document.getElementById("deleteLast").addEventListener("click", () => {
  characters.pop(); // Удаляем последний элемент
  renderCards(characters);
});
// Открытие и закрытие бокового меню для мобильных устройств
document.getElementById("toggleMenu").addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

// Закрытие бокового меню
document.getElementById("closeMenu").addEventListener("click", () => {
  sidebar.classList.remove("active");
});
