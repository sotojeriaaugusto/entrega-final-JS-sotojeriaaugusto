const productList = [
  {
    id: 1,
    name: "EMS-VSC3",
    price: 6000,
    stock: 2,
    image: "./media/img/01.png",
  },
  {
    id: 2,
    name: "ARP2600",
    price: 1400,
    stock: 1,
    image: "./media/img/02.png",
  },
  {
    id: 3,
    name: "SH101",
    price: 1000,
    stock: 4,
    image: "./media/img/03.png",
  },
  {
    id: 4,
    name: "Moog Subsequent 37",
    price: 1200,
    stock: 7,
    image: "./media/img/04.png",
  },
  {
    id: 5,
    name: "Moog Grandmother",
    price: 1400,
    stock: 3,
    image: "./media/img/05.png",
  },
  {
    id: 6,
    name: "Intellijel Cascadia",
    price: 2000,
    stock: 1,
    image: "./media/img/06.png",
  },
  {
    id: 7,
    name: "Analogue Solutions Telemark",
    price: 1600,
    stock: 0,
    image: "./media/img/07.png",
  },
];

const productListContainer = document.querySelector(".available-products");

productList.forEach((product) => {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");

  productCard.innerHTML = `
    <div class="product-img-wrapper">
      <img src="${product.image}" alt="${product.name}" class="product-img">
    </div>
    <div class="product-info">
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <p>Stock: ${product.stock}</p>
      <div class="quantity-controls">
        <button class="decrement-quantity" data-id="${product.id}">-</button>
        <input type="number" value="1" min="1" max="${
          product.stock
        }" class="quantity-input" data-id="${product.id}">
        <button class="increment-quantity" data-id="${product.id}">+</button>
      </div>
      <button class="add-to-cart-btn" ${
        product.stock === 0 ? "disabled" : ""
      } data-id="${product.id}">Add to Cart</button>
    </div>
  `;

  productListContainer.appendChild(productCard);
});

document.querySelectorAll(".increment-quantity").forEach((button) => {
  button.addEventListener("click", (event) => {
    const productId = parseInt(event.target.dataset.id);
    const input = document.querySelector(
      `.quantity-input[data-id="${productId}"]`
    );
    let quantity = parseInt(input.value);
    if (quantity < productList.find((p) => p.id === productId).stock) {
      input.value = quantity + 1;
    }
  });
});

document.querySelectorAll(".decrement-quantity").forEach((button) => {
  button.addEventListener("click", (event) => {
    const productId = parseInt(event.target.dataset.id);
    const input = document.querySelector(
      `.quantity-input[data-id="${productId}"]`
    );
    let quantity = parseInt(input.value);
    if (quantity > 1) {
      input.value = quantity - 1;
    }
  });
});

document.querySelectorAll(".add-to-cart-btn").forEach((button) => {
  button.addEventListener("click", (event) => {
    const productId = parseInt(event.target.dataset.id);
    const product = productList.find((p) => p.id === productId);
    const input = document.querySelector(
      `.quantity-input[data-id="${productId}"]`
    );
    const quantity = parseInt(input.value);

    if (product && quantity > 0 && quantity <= product.stock) {
      Swal.fire({
        title: "Done!",
        text: `You added ${quantity} units of ${product.name} to your shopping cart.`,
        icon: "success",
        confirmButtonText: "OK",
        customClass: {
          popup: "notification",
        },
      });
    } else {
      Swal.fire({
        title: "Oops!",
        text: "The quantity exceeds the available stock.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  });
});
