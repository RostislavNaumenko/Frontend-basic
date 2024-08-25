const containerCategory = document.querySelector("#category");
const containerProducts = document.querySelector("#container-products");
const amountButton = document.querySelector("#amount-button");
const amountInput = document.querySelector("#amount-input");

let token = "https://dummyjson.com/products";
let data;

const getProducts = (token) => {
  loader.classList.toggle("loader-hide");
  setTimeout(async () => {
    const res = await fetch(token);
    data = await res.json();
    //Set
    const uniqueCategories = new Set();
    data.products.map((product) => {
      //Creating set with unique categories
      uniqueCategories.add(product.category);
      //Creating products
      const card = document.createElement("div");
      card.classList.add("product-card");
      card.id = `${product.id}`;
      //category for product
      card.setAttribute("data-category", product.category);
      //title
      const heading = document.createElement("h4");
      heading.textContent = product.title;
      heading.classList.add("product-title");

      //price
      const price = document.createElement("p");
      price.textContent = `Price: ${Math.floor(product.price)} €`;

      //img-container
      const imgContainer = document.createElement("div");
      imgContainer.classList.add("image-gallery");

      //img
      const img = document.createElement("img");
      img.src = product.images[0];
      img.classList.add("card-img");

      if (product.images.length > 1) {
        // Adding navigation buttons
        const prevBtn = document.createElement("button");
        prevBtn.textContent = "←";
        prevBtn.classList.add("gallery-btn", "prev-btn");

        const nextBtn = document.createElement("button");
        nextBtn.textContent = "→";
        nextBtn.classList.add("gallery-btn", "next-btn");

        let currentIndex = 0;

        // Function to update the image source
        const updateImage = (index) => {
          img.src = product.images[index];
        };

        // Event listeners for buttons
        prevBtn.addEventListener("click", () => {
          currentIndex =
            currentIndex === 0 ? product.images.length - 1 : currentIndex - 1;
          updateImage(currentIndex);
        });

        nextBtn.addEventListener("click", () => {
          currentIndex =
            currentIndex === product.images.length - 1 ? 0 : currentIndex + 1;
          updateImage(currentIndex);
        });

        imgContainer.append(prevBtn, img, nextBtn);
      } else {
        imgContainer.append(img);
      }

      card.append(heading, price, imgContainer);
      containerProducts.append(card);
    });

    //Category
    const uniqueCategoriesArray = Array.from(uniqueCategories);
    uniqueCategoriesArray.map((e) => {
      const category = document.createElement("div");
      category.classList.add("category");
      category.id = `${e}`;
      category.textContent = e;
      category.addEventListener("click", () => {
        const cards = document.querySelectorAll(".product-card");
        cards.forEach((element) => {
          filterProductsByCategory(category.id);
        });
      });
      containerCategory.append(category);
    });
    //All category
    const allCategory = document.createElement("div");
    allCategory.classList.add("category");
    allCategory.textContent = "all";
    allCategory.addEventListener("click", () => {
      showAllProducts();
    });
    containerCategory.append(allCategory);

    loader.classList.toggle("loader-hide");
  }, 1000);
};

const showAllProducts = () => {
  const cards = document.querySelectorAll(".product-card");

  cards.forEach((card) => {
    card.style.display = "flex";
  });
};

const filterProductsByCategory = (selectedCategory) => {
  const cards = document.querySelectorAll(".product-card");
  cards.forEach((card) => {
    const productCategory = card.getAttribute("data-category");

    if (selectedCategory === "all" || productCategory === selectedCategory) {
      card.style.display = "flex"; // Показываем карточку
    } else {
      card.style.display = "none"; // Скрываем карточку
    }
  });
};

amountButton.addEventListener("click", () => {
  let amount = amountInput.value;
  if (amount > 30 || amount < 1) {
    alert("Insert correct amount!");
  } else {
    deleteCards();
    token = `https://dummyjson.com/products?limit=${amount}&skip=10`;
    getProducts(token);
  }
});

const deleteCards = () => {
  const cards = document.querySelectorAll(".product-card");
  cards.forEach((e) => {
    e.remove();
  });
};

getProducts(token);
