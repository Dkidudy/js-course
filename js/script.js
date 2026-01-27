"use strict";

const title = document.getElementsByTagName("h1")[0];
console.log("title:", title);

const handlerButtons = document.getElementsByClassName("handler_btn");
const startBtn = handlerButtons[0];
const resetBtn = handlerButtons[1];
console.log("startBtn:", startBtn);
console.log("resetBtn:", resetBtn);

const addScreenBtn = document.querySelector(".screen-btn");
console.log("addScreenBtn:", addScreenBtn);

const otherItemsPercent = document.querySelectorAll(".other-items.percent");
const otherItemsNumber = document.querySelectorAll(".other-items.number");
console.log("otherItemsPercent:", otherItemsPercent);
console.log("otherItemsNumber:", otherItemsNumber);

const rollbackRange = document.querySelector(".rollback input[type='range']");
const rollbackRangeValue = document.querySelector(".rollback .range-value");
console.log("rollbackRange:", rollbackRange);
console.log("rollbackRangeValue:", rollbackRangeValue);

const totalInputs = document.getElementsByClassName("total-input");
const totalPriceInput = totalInputs[0];
const totalScreensInput = totalInputs[1];
const totalOtherServicesInput = totalInputs[2];
const totalFullPriceInput = totalInputs[3];
const totalWithRollbackInput = totalInputs[4];
console.log("total inputs:", {
  totalPriceInput,
  totalScreensInput,
  totalOtherServicesInput,
  totalFullPriceInput,
  totalWithRollbackInput,
});

let screenBlocks = document.querySelectorAll(".screen");
console.log("screenBlocks:", screenBlocks);
