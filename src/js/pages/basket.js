import { getMainTitle } from "../companents/mainTitle.js";
import { getDesc } from "../companents/desc.js";
// страница корзины
export function getBasketPage() {
  const page = document.createElement("div");
  page.classList.add("page", "basket-page", "container");

  const mainTitle = getMainTitle("Корзина");
  const desc = getDesc("Страница в разработке");

  page.append(mainTitle, desc);
  return page;
}
