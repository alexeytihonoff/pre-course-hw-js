// Создай рандомное число при помощи
// let number1 = Math.floor(Math.random() * 100)
//  а затем проверь их выводя в консоль:
//  «[вставь сюда полученное число] :Это четное число» или «[вставь сюда полученное число] :Это нечетное число».
//  С каждой перезагрузкой страницы у тебя будет новое число.

let randomNumber = Math.floor(Math.random() * 100);
let result = (randomNumber % 2 === 0) ? `${randomNumber} :Это четное число` : `${randomNumber} :Это нечетное число`
console.log(result);