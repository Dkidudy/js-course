// 1 Восстановить порядок книг.
const booksContainer = document.querySelector(".books");
const books = booksContainer.querySelectorAll(".book");
const book1 = books[1];
const book2 = books[0];
const book3 = books[4];
const book4 = books[3];
const book5 = books[5];
const book6 = books[2];
booksContainer.append(book1, book2, book3, book4, book5, book6);

// 2 Заменить картинку заднего фона на другую из папки image
document.head.insertAdjacentHTML(
  "beforeend",
  '<style>body{background-image:url("./image/you-dont-know-js.jpg")}</style>',
);

// 3 Исправить заголовок в книге 3( Получится - "Книга 3.this  и Прототипы Объектов")
book3.querySelector("a").textContent = "Книга 3. this и Прототипы Объектов";

// 4 Удалить рекламу со страницы
const adv = document.querySelector(".adv");
adv.remove();

// 5 Восстановить порядок глав во второй и пятой книге

// Книга 2
const book2List = book2.querySelector("ul");
const book2Items = book2List.querySelectorAll("li");
book2List.append(
  book2Items[0],
  book2Items[1],
  book2Items[2],
  book2Items[3],
  book2Items[4],
  book2Items[5],
  book2Items[6],
  book2Items[7],
  book2Items[8],
  book2Items[9],
  book2Items[10],
);
console.log(book2Items);

// Книга 5
const book5List = book5.querySelector("ul");
const book5Items = book5List.querySelectorAll("li");
book5List.append(
  book5Items[0],
  book5Items[1],
  book5Items[9],
  book5Items[3],
  book5Items[4],
  book5Items[2],
  book5Items[6],
  book5Items[7],
  book5Items[5],
  book5Items[8],
  book5Items[10],
);

// 6. в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место
const book6List = book6.querySelector("ul");
const book6Items = book6List.querySelectorAll("li");

const chapter8 = document.createElement("li");
chapter8.textContent = "Глава 8: За пределами ES6";
