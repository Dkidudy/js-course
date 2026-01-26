"use strict";

const appData = {
  title: "",
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 10,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  services: {},

  asking: function () {
    do {
      this.title = prompt("Как называется ваш проект?", "Калькулятор верстки");
    } while (!this.isValidText(this.title));
    for (let i = 0; i < 2; i++) {
      let name = "";
      let price = 0;
      do {
        name = prompt("Какие типы экранов нужно разработать?");
      } while (!this.isValidText(name));
      do {
        price = prompt("Сколько будет стоить данная работа?");
      } while (!this.isNumber(price));
      this.screens.push({ id: i, name: name.trim(), price: +price });
    }
    for (let i = 0; i < 2; i++) {
      let name = "";
      let price = 0;
      do {
        name = prompt("Какой дополнительный тип услуги нужен?");
      } while (!this.isValidText(name));
      do {
        price = prompt("Сколько это будет стоить?");
      } while (!this.isNumber(price));
      this.services[name.trim()] = +price;
    }
    this.adaptive = prompt("Нужен ли адаптив на сайте?", "Да");
  },

  addPrices: function () {
    this.screenPrice = 0;
    this.allServicePrices = 0;
    for (let screen of this.screens) {
      this.screenPrice += screen.price;
    }
    for (let key in this.services) {
      this.allServicePrices += this.services[key];
    }
  },

  isNumber: function (num) {
    return num !== null && num !== "" && !isNaN(num) && isFinite(num);
  },

  isValidText: function (value) {
    if (typeof value !== "string") return false;
    const trimmed = value.trim();
    if (!trimmed) return false;
    return true;
  },

  getFullPrice: function () {
    this.fullPrice = this.screenPrice + this.allServicePrices;
  },

  getServicePercentPrices: function () {
    this.servicePercentPrice =
      this.fullPrice - this.fullPrice * (this.rollback / 100);
  },

  getTitle: function () {
    this.title =
      this.title.trim()[0].toUpperCase() +
      this.title.trim().substr(1).toLowerCase();
  },
  getRollbackMessage: function (price) {
    if (price >= 30000) {
      return "Даем скидку в 10%";
    } else if (price >= 15000 && price < 30000) {
      return "Даем скидку в 5%";
    } else if (price >= 0 && price < 15000) {
      return "Скидка не предусмотрена";
    } else {
      return "Что то пошло не так";
    }
  },
  start: function () {
    this.asking();
    this.addPrices();
    this.getFullPrice();
    this.getServicePercentPrices();
    this.getTitle();
    this.logger();
  },
  logger: function () {
    console.log("allServicePrices:", this.allServicePrices);
    console.log(this.getRollbackMessage(this.fullPrice));
    console.log("title:", this.title);
    console.log("screenPrice:", this.screenPrice);
    console.log("adaptive:", this.adaptive);
    console.log("screens length:", this.screens.length);
    console.log("servicePercentPrice:", this.servicePercentPrice);
    for (const key in this) {
      if (Object.prototype.hasOwnProperty.call(this, key)) {
        console.log(`${key}:`, this[key]);
      }
    }
    console.log("screens:", this.screens);
    console.log("services:", this.services);
  },
};

appData.start();
