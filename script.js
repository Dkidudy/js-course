"use strict";

let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?");
let screenPrice = +prompt("Сколько будет стоит данная работа?");
let adaptive = prompt("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");
let rollback = 10;

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

const getRollbackMessage = function (price) {
  if (price >= 30000) {
    return "Даем скидку в 10%";
  } else if (price >= 15000 && price < 30000) {
    return "Даем скидку в 5%";
  } else if (price >= 0 && price < 15000) {
    return "Скидка не предусмотрена";
  } else {
    return "Что то пошло не так";
  }
};

//сумма доп услуг
const getAllServicePrices = function (price1, price2) {
  return price1 + price2;
};
let allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);

//общая стоимость
function getFullPrice(screenPrice, allServicePrices) {
  return screenPrice + allServicePrices;
}
let fullPrice = getFullPrice(screenPrice, allServicePrices);

const getTitle = function (projectTitle) {
  let clearedTitle = String(projectTitle ?? "").trim();
  if (!clearedTitle) return "";
  clearedTitle = clearedTitle.toLowerCase();
  return clearedTitle[0].toUpperCase() + clearedTitle.slice(1);
};
title = getTitle(title);

// итоговая стоимость c  вычетом  отката
const getServicePercentPrices = function (fullPrice, rollback) {
  return fullPrice - fullPrice * (rollback / 100);
};
let servicePercentPrice = getServicePercentPrices(fullPrice, rollback);

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

// вывод в консоль строки с типами экранов для разработки
console.log("Типы экранов для разработки:", screens);

// сообщение о скидке
console.log(getRollbackMessage(fullPrice));

// стоимость с вычетом отката посреднику
console.log(getServicePercentPrices(fullPrice, rollback));
