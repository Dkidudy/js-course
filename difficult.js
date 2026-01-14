// 1- Создать переменную num со значением 266219
const num = 266219;

// 2- Произведение цифр числа (через переумножение)
const product = String(num)
  .split("")
  .reduce((acc, digit) => acc * Number(digit), 1);

console.log("Произведение цифр:", product); // 1296

// 3- Возвести результат в 3 степень
const cubed = product ** 3;

console.log("Результат в степени 3:", cubed); // = (2176782336)

// 4- первые (2 цифры полученного числа (21))
const firstTwoDigits = String(cubed).slice(0, 2);

console.log("Первые 2 цифры:", firstTwoDigits);
