'use strict'
// 7.* На цикл while
// Пользователь!!! загадывает число в диапазоне от [1 до 100]
// Программа пытается его угадать (используйте метод !!!бинарного поиска - деление отрезка на 2).
// Программа может задавать пользователю вопросы:
// Число равно ...? / Число больше ...? / Число меньше ...? и в зависимоти от ответа пользователя принимать решения.
// Вместо текстовых ответов ДА/НЕТ, можно использовать числа 0 - НЕТ и 1 - ДА
let st = 5, f = 100, input, answ;
alert('Загадайте целое число от '+st+' до '+f);

let x = Math.floor(f/2);
while (f-st>1) {
  answ = parseInt(prompt('Ваше чиcло '+x+'? (0 - НЕТ и 1 - ДА)'));
  if(answ===1){
    st = x;
    f = x;
    break;
  }

  console.log(st,f, f-st+1);

   answ = parseInt(prompt('Число больше '+x+'? (0 - НЕТ и 1 - ДА)'));
   if (answ===1) {
  // if (input>x) {
    st = x+1;
    // f = f;
    x = Math.floor((f-x)/2)+st;
  // } else  {
  } else if(answ===0){
    // st = st;
    f = x;
    x = st+Math.floor((x-st)/2);
  // }
  } else {
    break;
  }
}
if(st!=f){
  answ = parseInt(prompt('Ваше чиcло '+st+'? (0 - НЕТ и 1 - ДА)'));
  st = answ===0?f:st;
}

   console.log('Ваше чиcло '+st)
