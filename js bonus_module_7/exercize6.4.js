/*С помощью цикла нарисуйте в консоли заполненное поле для игры
 «Крестики-нолики». Выведите результат в консоль.*/

const cross = "x";
const zero = "o";
const arr = [];

for (i = 0; i < 3; i++) {
  const interiorArr = [];
  for (j = 0; j < 3; j++) {
    if (j % 2 == 0) {
      interiorArr.push(cross);
    } else {
      interiorArr.push(zero);
    }
  }
  arr.push(interiorArr);
}

let str = "";
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    str += `${arr[i][j]}`;
    if (arr[i][j] != arr[i].length - 1) {
      str += " ";
    }
  }
  str += "\n";
}

console.log(str);
