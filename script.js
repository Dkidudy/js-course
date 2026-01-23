"use strict";

const game = () => {
  const secret = Math.floor(Math.random() * 100) + 1; // округляет числа в большую сторону

  const ask = () => {
    const input = prompt("Угадай число от 1 до 100");

    const num = Number(input);
    if (!Number.isFinite(num)) return (alert("Введи число!"), ask()); // кидает ошибку если я ввел буквы
    if (num > secret) return (alert("Загаданное число меньше"), ask());
    if (num < secret) return (alert("Загаданное число больше"), ask());
    if (input === null) return alert("Игра окончена");

    alert("Поздравляю, Вы угадали!");
  };

  ask();
};

game();
