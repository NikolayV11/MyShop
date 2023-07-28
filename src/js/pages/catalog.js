import { getMainTitle } from "../companents/mainTitle.js";
import { getDesc } from "../companents/desc.js";
// страница каталога
export function getCatalogPage() {
  const page = document.createElement("div");
  page.classList.add("page", "catalog-page", "container");

  const mainTitle = getMainTitle("Каталог");
  const desc = getDesc("Страница в разработке");

  page.append(mainTitle, desc);
  return page;
}
