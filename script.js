const productCards = document.querySelectorAll(".product-card");
const productCount = document.getElementById("productCount");

if (productCount) {
  productCount.textContent = String(productCards.length);
}
