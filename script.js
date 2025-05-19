
  let quantity = 1;
  const quantityElement = document.getElementById("quantity");

  function increaseQty() {
    quantity++;
    quantityElement.textContent = quantity;
  }

  function decreaseQty() {
    if (quantity > 1) {
      quantity--;
      quantityElement.textContent = quantity;
    }
  }
  

