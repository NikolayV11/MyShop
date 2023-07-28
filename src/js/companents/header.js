import { router } from "../main";

// Создает шапку

export function getHeader() {
  const header = document.createElement("header"); //создаем элемент
  header.classList.add("header"); // добавляем класс

  const container = document.createElement("div");
  container.classList.add("container", "header__container");

  const nav = document.createElement("nav");
  nav.classList.add("navigation");

  // Создание ссылок
  let link1 = document.createElement("a");
  link1.href = ""; // добавляем атребут
  link1.classList.add("btn");
  link1.textContent = "Главная страница";
  // link1.setAttribute("data-navigo", true);

  link1.addEventListener("click", function (event) {
    event.preventDefault();

    router.navigate("/");
  });

  let link2 = document.createElement("a");
  link2.href = "";
  link2.classList.add("btn");
  link2.textContent = "Каталог";
  // link2.setAttribute("data-navigo", true);

  link2.addEventListener("click", function (event) {
    event.preventDefault();

    router.navigate("/catalog");
  });

  let link3 = document.createElement("a");
  link3.href = "";
  link3.classList.add("btn");
  link3.textContent = "Корзина";
  // link3.setAttribute("data-navigo", true);

  link3.addEventListener("click", function (event) {
    event.preventDefault();

    router.navigate("/basket");
  });

  // добавляет узлы
  nav.append(link1, link2, link3);
  container.append(nav);

  header.append(container);
  return header;
}
