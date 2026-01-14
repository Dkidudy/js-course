"use strict";

const screens =
  prompt(
    'Какие типы экранов нужно разработать? (пример: "Простые, Сложные, Интерактивные")'
  ) || "";

const screenPrice = Number(
  prompt("Сколько будет стоить данная работа? (пример: 12000)")
);

const adaptiveAnswer = (prompt("Нужен ли адаптив на сайте? (да/нет)") || "")
  .trim()
  .toLowerCase();
const adaptive =
  adaptiveAnswer === "да" ||
  adaptiveAnswer === "yes" ||
  adaptiveAnswer === "true";

const service1 = prompt("Какой дополнительный тип услуги нужен? (1)") || "";
const servicePrice1 = Number(prompt("Сколько это будет стоить? (1)"));

const service2 = prompt("Какой дополнительный тип услуги нужен? (2)") || "";
const servicePrice2 = Number(prompt("Сколько это будет стоить? (2)"));

const screensArray = screens
  .toLowerCase()
  .split(",")
  .map((item) => item.trim())
  .filter(Boolean);

console.log("Типы экранов:", screensArray);
console.log("Нужен адаптив:", adaptive);

// Защита от NaN
const safeScreenPrice = Number.isFinite(screenPrice) ? screenPrice : 0;
const safeServicePrice1 = Number.isFinite(servicePrice1) ? servicePrice1 : 0;
const safeServicePrice2 = Number.isFinite(servicePrice2) ? servicePrice2 : 0;

const fullPrice = safeScreenPrice + safeServicePrice1 + safeServicePrice2;

// Откат посреднику
const rollback =
  Number(prompt("Укажи откат посреднику (сумма в рублях):")) || 0;

// Итоговая стоимость за вычетом отката, округлить вверх
const servicePercentPrice = Math.ceil(fullPrice - rollback);
console.log(
  "Сумма после вычета отката (округлено вверх):",
  servicePercentPrice
);

if (fullPrice < 0) {
  console.log("Что то пошло не так");
} else if (fullPrice > 30000) {
  console.log("Даем скидку в 10%");
} else if (fullPrice > 15000 && fullPrice < 30000) {
  console.log("Даем скидку в 5%");
} else if (fullPrice > 0 && fullPrice < 15000) {
  console.log("Скидка не предусмотрена");
} else {
  console.log("Пограничное значение, скидка определяется по договоренности");
}

console.log("Услуги:", { service1, service2 });
console.log("Стоимость работ (fullPrice):", fullPrice);
