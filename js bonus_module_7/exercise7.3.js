/* Задание 7.3
Есть массив объектов, представляющих собой пользователей, каждый из 
которых имеет свойство age (возраст). Создайте новый массив, содержащий 
только тех пользователей, чей возраст больше или равен 18. Затем создайте 
новый массив, содержащий только свойства name (имя) каждого пользователя. */

const arrUser = [
  { name: "Olga", age: 35 },
  { name: "Sergei", age: 40 },
  { name: "Kirill", age: 17 },
];

let adult = arrUser.filter((user) => {
  return user.age >= 18;
});

console.log(adult);

let result = arrUser.map((item) => {
  return item.name;
});

console.log(result);
