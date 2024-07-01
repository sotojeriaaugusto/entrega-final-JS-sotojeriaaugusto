let synthPrice = 1000;

let ms20 = "MS-20 Synthesizer";
let polyMoog = "Polymoog Synthesizer";
let sh101 = "SH-101 Synthesizer";

function shoppingCart() {
  let totalCost = 0;
  let products = [];

  while (true) {
    let option = parseInt(
      prompt(
        `Hello there. What are you buyin'?
            [ID:1] ${ms20} | $${synthPrice}
            [ID:2] ${polyMoog} | $${synthPrice}
            [ID:3] ${sh101} | $${synthPrice}
            [ID:0] End cart and checkout
            Choose a product (ID's: 1-3) or 0 to checkout`
      )
    );

    if (option === 0) {
      break;
    }

    let selectedProduct;
    switch (option) {
      case 1:
        selectedProduct = ms20;
        break;
      case 2:
        selectedProduct = polyMoog;
        break;
      case 3:
        selectedProduct = sh101;
        break;
      default:
        alert("[Error] Invalid product, try again.");
        continue;
    }

    let quantity = parseInt(
      prompt(`You chose ${selectedProduct}. Now please enter the amount:`)
    );
    let subtotal = synthPrice * quantity;
    totalCost += subtotal;
    products.push({
      product: selectedProduct,
      quantity: quantity,
      subtotal: subtotal,
    });
  }

  let discountAnswer = parseInt(
    prompt(
      "Do you have any discount? Please type 1 if answer is YES or 0 if answer is NO"
    )
  );
  if (discountAnswer === 1) {
    totalCost *= 0.25;
  }

  let summary = "Checkout:\n";
  products.forEach((item, index) => {
    summary += `${index + 1}. ${item.product} | Quantity of synths: ${
      item.quantity
    } | Subtotal: $${item.subtotal}\n`;
  });
  summary += `Total: $${totalCost}`;
  alert(summary);
}

shoppingCart();
