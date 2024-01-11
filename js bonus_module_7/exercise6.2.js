/* Есть массив:

    const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 
    'that', 'we', 'know', 'that', 'they', 'know' ]; 

Создайте новый массив и запишите в него только уникальные значения из 
массива arr. Выведите получившийся массив в консоль. */

const arr = [
  1,
  2,
  3,
  1,
  5,
  4,
  2,
  3,
  5,
  "they",
  "don't",
  "know",
  "that",
  "we",
  "know",
  "that",
  "they",
  "know",
];
const uniqueSet = new Set(arr);
const uniqueArr = Array.from(uniqueSet);
console.log(uniqueArr);
