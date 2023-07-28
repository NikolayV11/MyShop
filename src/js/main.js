import Navigo from "navigo";
import { getHeader } from "./companents/header.js";
import { getPageContainer } from "./companents/pageContainer.js";
import { getMainTitle } from "./companents/mainTitle.js";
import { getDesc } from "./companents/desc.js";
//страницы
// import { getMaichPage } from "./pages/main.js";
// import { getProductPage } from "./pages/product.js";
// import { getCatalogPage } from "./pages/catalog.js";
// import { getBasketPage } from "./pages/basket.js";

const app = document.getElementById("app");
export const router = new Navigo("/");
//создание контейнера
const header = getHeader();
const pageContainer = getPageContainer();

// // Навигация
// export async function navigation(page) {
//   pageContainer.innerHTML = "";

//   switch (page) {
//     case "catalog":
//       const pageModuleCatalog = await import("./pages/catalog.js");
//       const catalogPage = pageModuleCatalog.getCatalogPage();
//       pageContainer.append(catalogPage);
//       break;
//     case "basket":
//       const pageModuleBasket = await import("./pages/basket.js");
//       const basketPage = pageModuleBasket.getBasketPage();
//       pageContainer.append(basketPage);
//       break;
//     default:
//       const pageModuleMain = await import("./pages/main.js");
//       const mainPage = pageModuleMain.getMaichPage();
//       pageContainer.append(mainPage);
//       break;
//   }
// }

// navigation();

router.on("/", async () => {
  pageContainer.innerHTML = "";
  const pageModuleMain = await import("./pages/main.js");
  const mainPage = pageModuleMain.getMaichPage();
  pageContainer.append(mainPage);
});

router.on("/catalog", async () => {
  pageContainer.innerHTML = "";
  const pageModuleCatalog = await import("./pages/catalog.js");
  const catalogPage = pageModuleCatalog.getCatalogPage();
  pageContainer.append(catalogPage);
});

router.on("/basket", async () => {
  pageContainer.innerHTML = "";
  const pageModuleBasket = await import("./pages/basket.js");
  const basketPage = pageModuleBasket.getBasketPage();
  pageContainer.append(basketPage);
});
router.on("/product/:title", async ({ data }) => {
  pageContainer.innerHTML = "";
  const pageModuleProduct = await import("./pages/product.js");
  const productPage = pageModuleProduct.getProductPage(data.title);
  pageContainer.append(productPage);
});

router.resolve();
// добавляет узлы на страницу
app.append(header, pageContainer);
