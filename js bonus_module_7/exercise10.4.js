/* Перепишите задание 10.3.

Определите остаток от деления количества лет на 10. В зависимости от этого 
выведите в алерт «Антон: 21 год» или «Антон: 24 года», или «Антон: 25 лет». 
То есть для всех чисел с 1 в конце должно быть «_1 год», для чисел с 2, 3, 4 
в конце – «_3 года», а для всех остальных – «_7 лет».

Вы можете использовать для этого условные конструкции if-else или switch-case.

Входные данные: Игорь и 2000.

Выходные данные: Игорь: 23 года*/

const userName = prompt("введите ваше имя");
const yearBirth = +prompt("введите год вашего рождения");

if (userName == "" || typeof yearBirth !== "number" || yearBirth == 0) {
  alert("Неверные входные данные");
} else {
  const today = new Date();
  const yearToday = today.getFullYear();
  const userAge = yearToday - yearBirth;
  switch (userAge % 10) {
    case 1:
      alert(`${userName}:${userAge} год`);
      break;
    case 2:
    case 3:
    case 4:
      alert(`${userName}:${userAge} года`);
      break;
    default:
      alert(`${userName}:${userAge} лет`);
  }
}
