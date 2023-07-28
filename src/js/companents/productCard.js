import { router } from "../main";
// Карточка товара
export function getProductCard(title, price) {
  const item = document.createElement("li");
  item.classList.add("product-list__item");

  const productTitle = document.createElement("h2");
  productTitle.classList.add("product-list__title");
  // productTitle.textContent = title;

  let productLink = document.createElement("a");
  productLink.textContent = title;
  productLink.href = "";
  productLink.addEventListener("click", function (event) {
    event.preventDefault();
    router.navigate(`/product/${title}`);
  });

  productTitle.append(productLink);

  const productPrice = document.createElement("strong");
  productPrice.classList.add("product-list__price");
  productPrice.textContent = `${price} руб`;

  const addBasket = document.createElement("button");
  addBasket.classList.add("btn");
  addBasket.textContent = "В корзину";

  item.append(productTitle, productPrice, addBasket);
  return item;
}
