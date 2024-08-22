const containerProducts = document.querySelector("#container-products");
const loader = document.querySelector("#loader");
const amountButton = document.querySelector("#amount-button");
const amountInput = document.querySelector("#amount-input");

let token = "https://fakestoreapi.com/products";

const getProducts = (token) => {
  // добавили loader
  loader.classList.toggle("loader-hide");
  // искусственно чуть замедлили появление карточек
  setTimeout(async () => {
    const res = await fetch(token);
    const data = await res.json();
    data.map((product) => {
      const card = document.createElement("div");
      card.classList.add("product-card");
      const heading = document.createElement("h4");
      heading.textContent = product.title;
      const price = document.createElement("p");
      price.textContent = `Price: ${Math.floor(product.price)} €`;
      const img = document.createElement("img");
      img.src = product.image;
      img.classList.add("card-img");
      card.append(heading, price, img);
      containerProducts.append(card);
    });
    // убрали loader
    loader.classList.toggle("loader-hide");
  }, 1000);
};

getProducts(token);

const deleteCards = () => {
  const cards = document.querySelectorAll(".product-card");
  cards.forEach((e) => {
    e.remove();
  });
};

amountButton.addEventListener("click", () => {
  deleteCards();
  let amount = amountInput.value;
  token = `https://fakestoreapi.com/products?limit=${amount}`;
  getProducts(token);
});
