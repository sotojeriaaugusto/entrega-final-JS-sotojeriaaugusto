const productList = [
  {
    id: 1,
    name: "EMS-VSC3",
    price: 6000,
    stock: 2,
    image: "../media/img/01.png",
  },
  {
    id: 2,
    name: "ARP2600",
    price: 1400,
    stock: 1,
    image: "../media/img/02.png",
  },
  {
    id: 3,
    name: "SH101",
    price: 1000,
    stock: 4,
    image: "../media/img/03.png",
  },
  {
    id: 4,
    name: "Moog Subsequent 37",
    price: 1200,
    stock: 7,
    image: "../media/img/04.png",
  },
  {
    id: 5,
    name: "Moog Grandmother",
    price: 1400,
    stock: 3,
    image: "../media/img/05.png",
  },
  {
    id: 6,
    name: "Intellijel Cascadia",
    price: 2000,
    stock: 1,
    image: "../media/img/06.png",
  },
  {
    id: 7,
    name: "Analogue Solutions Telemark",
    price: 1600,
    stock: 0,
    image: "../media/img/07.png",
  },
];

const productListContainer = document.querySelector(".available-products");

productList.forEach((product) => {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");

  productCard.innerHTML = `
    <img src="${product.image}" alt="${product.name}" class="product-img">
    <div class="product-info">
      <h3>${product.name}</h3>
      <p>Price: $${product.price}</p>
      <p>Stock: ${product.stock}</p>
      <button class="add-to-cart-btn" ${
        product.stock === 0 ? "disabled" : ""
      } data-id="${product.id}">Add to Cart</button>
    </div>
  `;

  productListContainer.appendChild(productCard);
});

document.querySelectorAll(".add-to-cart-btn").forEach((button) => {
  button.addEventListener("click", (event) => {
    const productId = parseInt(event.target.dataset.id);
    const product = productList.find((p) => p.id === productId);

    if (product && product.stock > 0) {
      let quantity = parseInt(
        prompt(`Enter the amount of "${product.name}" you want to purchase:`)
      );
      if (isNaN(quantity) || quantity <= 0 || quantity > product.stock) {
        alert(
          `Invalid amount. Please enter an amount between 1 and ${product.stock}.`
        );
        return;
      }

      let total = product.price * quantity;
      alert(
        `Total a pagar por ${quantity} unidades de ${product.name}: $${total}`
      );
    } else {
      alert("Sorry, this product is out of stock.");
    }
  });
});
