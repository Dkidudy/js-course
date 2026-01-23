"use strict";
function startGame() {
  const secret = Math.floor(Math.random() * 100) + 1;
  let attempts = 10;
  (function ask() {
    const answer = prompt(`Угадай число 1...100 (Осталось: ${attempts})`);
    if (answer === null) {
      return alert("Пока!");
    }
    const answerNumber = Number(answer);
    if (!answer.trim() || Number.isNaN(answerNumber)) {
      alert("Введите число!");
      return ask();
    }
    if (answerNumber === secret) {
      if (confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть ещё?")) {
        startGame();
      }
      return;
    }
    --attempts;
    if (attempts === 0) {
      if (confirm("Попытки закончились, хотите сыграть ещё?")) {
        startGame();
      }
      return;
    }
    alert(
      answerNumber > secret
        ? `Загаданное число меньше, осталось попыток ${attempts}`
        : `Загаданное число больше, осталось попыток ${attempts}`,
    );
    ask();
  })();
}

startGame();
