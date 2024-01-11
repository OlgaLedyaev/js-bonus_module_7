/* Задание 7.4
Создайте функцию setFullName, которая будет устанавливать свойство fullName 
у переданного ей объекта. Используйте метод bind, чтобы создать новую функцию 
setPersonFullName, которая будет устанавливать fullName для объекта person из 
предыдущего примера. Вызовите setPersonFullName с параметром "John Smith" и 
убедитесь, что свойство fullName объекта person было изменено соответствующим 
образом.*/

const person = {
  firstName: "John",
  lastName: "Doe",
};

function setFullName(obj) {
  return (obj.fullName = this.firstName + " " + this.lastName);
}

const setPersonFullName = setFullName.bind(person);

console.log(setPersonFullName(person, ["John Smith"]));
console.log(person);
