import { getProductCard } from "../companents/productCard.js";
import { getMainTitle } from "../companents/mainTitle.js";

// Главная страница
export function getMaichPage() {
  const page = document.createElement("div");
  page.classList.add("page", "main-page", "container");

  const mainTitle = getMainTitle("Главная страница");

  const list = document.createElement("ul");
  list.classList.add("product-list", "list-reset");

  list.append(
    getProductCard("товар_1", 400),
    getProductCard("товар_2", 300),
    getProductCard("товар_3", 700)
  );

  page.append(mainTitle, list);
  return page;
}
