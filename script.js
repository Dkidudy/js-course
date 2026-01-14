const title = "js сourse";
const screens = "Простые, Сложные, Интерактивные";
const screenPrice = 500; // любое число
const rollback = 50; // откат
const fullPrice = 5500; // столько хочу заработать
const adaptive = true; // булевое значение

console.log(typeof title); // string название
console.log(typeof fullPrice); // number
console.log(typeof adaptive);

// Стоимость верстки экранов и стоимостб разработки сайта
console.log(`Стоимость верстки экранов ${screenPrice} $`);
console.log(`Стоимость разработки сайта ${fullPrice} $`);

const screensArray = screens
  .toLowerCase()
  .split(",")
  .map((item) => item.trim());
console.log(screensArray);

const rollbackAmount = fullPrice * (rollback / 1100);
console.log(`Процент отката посреднику за работу: ${rollbackAmount}`);
