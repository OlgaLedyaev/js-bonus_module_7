/*Напишите проверку, которая позволит определить, является слово палиндромом или 
нет.
Если является, то выведите в консоль фразу «Слово <слово> является палиндромом». 
Если нет — «Слово <слово> не является палиндромом». */

let newWord = "Довод";

const word = newWord.toLowerCase();
const reversWord = word.split("").reverse().join("");
if (word == reversWord) {
  console.log(`Слово ${word} является палиндромом`);
} else {
  console.log(`Слово ${word} не является палиндромом`);
}