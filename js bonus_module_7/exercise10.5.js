/* Напишите программу, которая будет сообщать пользователю, на какую сумму он 
может взять кредит. Сумма кредита зависит от возраста пользователя.

Например:

Если клиенту нет 18 лет, то кредит он не получит.
Если клиенту от 18 до 21, то он может получить максимум 50000.
Если клиенту от 22 до 35, то он сможет получить максимум 400000.
Если клиенту от 36 до 65, то ему одобрят максимум 1000000.
Клиент может получить только сумму, кратную 1000.

В программе должна присутствовать проверка на вводимое пользователем значение. 
Допускаются только значения типа number.

Для ввода значения пользователем используйте функцию prompt(). 
Для информационного сообщения используйте функцию alert().

*/

const userAge = +prompt("введите ваш возраст");

const resultSumLoan = (num) => {
  if (num < 1000) {
    alert("вам не нужен кредит");
  } else {
    const result = num - (num % 1000);
    alert(`одобрено к выдаче ${result}`);
  }
};

const loanApproval = (number) => {
  alert(`мы можем вам выдать максимум ${number}`);
  const requestedLoanAmount = +prompt(
    "введите запрашиваемую сумму кредита кратную 1000"
  );
  if (requestedLoanAmount >= number) {
    alert(`одобрено к выдаче ${number}`);
  } else {
    resultSumLoan(requestedLoanAmount);
  }
};

if (typeof userAge !== "number") {
  alert("вы ввели некорректные данные!");
}
if (userAge < 18 || userAge > 65) {
  alert("вы не можете получить кредит!");
} else if (userAge >= 18 && userAge <= 21) {
  loanApproval(50000);
} else if (userAge >= 22 && userAge <= 35) {
  loanApproval(400000);
} else if (userAge >= 36 && userAge <= 65) {
  loanApproval(1000000);
}
