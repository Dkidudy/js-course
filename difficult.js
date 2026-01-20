//на каком языке выводится в консоль
const lang = "ru";

// if
if (lang === "ru") {
  console.log([
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ]);
} else if (lang === "en") {
  console.log([
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ]);
}

// switch и case
switch (lang) {
  case "ru":
    console.log("b (switch):", [
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
      "Воскресенье",
    ]);
    break;

  case "en":
    console.log("b (switch):", [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ]);
    break;
}

// без if и switch
const weekDays = {
  ru: [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ],
  en: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
};
// отвечает за вывод информации в консоль
console.log("c (object):", weekDays[lang]);

//имя которое выводится в консоль
const namePerson = "Артем";

const role =
  namePerson === "Артем"
    ? "Директор"
    : namePerson === "Александр"
    ? "Преподаватель"
    : //если написать любое другое имя то выдаст в консоли (Студент)
      "Студент";
// отвечает за вывод информации в консоль
console.log(" (ternary):", role);

function formatText(value) {
  // если передали не строку кидает ошибку
  if (typeof value !== "string") {
    console.log("Ошибка: передайте строку");
    return;
  }

  // пробелы в начале и в конце
  const trimmed = value.trim();

  // если строка больше 30 символов обрезаем и добавляем "..."

  if (trimmed.length > 30) {
    return trimmed.slice(0, 30) + "...";
  }
  return trimmed;
}

console.log(formatText("   Hello world!   "));
// "Hello world!"
console.log(
  formatText(
    "   Это очень длинная строка, которая точно больше тридцати символов   "
  )
);
// "Это очень длинная строка,..."

console.log(formatText(123));
// Ошибка
