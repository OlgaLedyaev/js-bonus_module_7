/* С помощью метода prompt() получите от пользователя его имя, а затем год 
рождения.

Сохраните эти данные в переменные.

Затем вычислите возраст пользователя и выведите с помощью alert() сообщение 
вида: «Владимир: 25».

Используйте для решения шаблонные строки.

Входные данные: Игорь и 2000

Выходные данные: Игорь: 23

*/

const userName = prompt("введите ваше имя");
const yearBirth = +prompt("введите год вашего рождения");
if (userName == "" || typeof yearBirth !== "number" || yearBirth == 0) {
  alert("Неверные входные данные");
} else {
  const today = new Date();
  const yearToday = today.getFullYear();
  const userAge = yearToday - yearBirth;
  alert(`${userName}:${userAge}`);
}
