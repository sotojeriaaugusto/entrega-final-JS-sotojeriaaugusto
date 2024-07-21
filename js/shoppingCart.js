const productList = [
  { id: 1, name: "EMS-VSC3", price: 6000, stock: 2 },
  { id: 2, name: "ARP2600", price: 1400, stock: 1 },
  { id: 3, name: "SH101", price: 1000, stock: 4 },
  { id: 4, name: "Moog Subsequent 37", price: 1200, stock: 7 },
  { id: 5, name: "Moog Grandmother", price: 1400, stock: 3 },
  { id: 6, name: "Intellijel Cascadia", price: 2000, stock: 1 },
  { id: 7, name: "Analogue Solutions Telemark", price: 1600, stock: 0 },
];

function shoppingCart() {
  let productId = prompt(
    "Please, enter the ID of the product you want to purchase:\n\nID: 1 — EMS-VCS3\nID: 2 — ARP2600\nID: 3 — SH101\nID: 4 — Moog Subsequent 37\nID: 5 — Moog Grandmother\nID: 6 — Intellijel Cascadia\nID: 7 — Analogue Solutions Telemark"
  );
  productId = parseInt(productId);

  const product = productList.find((item) => item.id === productId);

  if (!product) {
    alert("Oops! Invalid ID. Please enter a valid ID of an existing product.");
    return;
  }

  let quantity = prompt(
    `Enter the amount of "${product.name}" you want to purchase:`
  );
  quantity = parseInt(quantity);

  if (isNaN(quantity) || quantity <= 0 || quantity > product.stock) {
    alert(
      `Invalid amount. Please enter an amount between 1 and the amount of stock avaiable that is: ${product.stock}.`
    );
    return;
  }

  let total = product.price * quantity;
  let applyDiscount = confirm(
    "Do you have any discount code? Answer:\n\n1 - YES\n2 - NO"
  );

  if (applyDiscount) {
    let discountCode = prompt("Enter discount code:");

    const validDiscountCode = "PR3ENTR3G4";

    while (discountCode !== validDiscountCode && discountCode !== "0") {
      discountCode = prompt(
        "Invalid discount code. Try again (or type 0 to cancel this action):"
      );
    }

    if (discountCode === "0") {
      alert("Discount cancelled. Here's the sumary of your purchase ");
    } else {
      total *= 0.25;
      alert(
        `Discount code applied. Now with your discount you gotta pay: $${total}`
      );
    }
  } else {
    alert(`Total a pagar: $${total}`);
  }
}
