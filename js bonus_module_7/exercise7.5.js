/* Задание 7.5
Напишите функцию, которая принимает массив чисел и возвращает 
новый массив, содержащий только уникальные числа, отсортированные в 
порядке возрастания.*/

const numbers = [3, 5, 2, 3, -1, 5, 8, 9, 0];

function unigueNums(arr) {
  const unigueSet = new Set(arr);
  const unigueSetArr = Array.from(unigueSet);
  return unigueSetArr.sort();
}

console.log(unigueNums(numbers));
