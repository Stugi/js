'use strict'
// Задача 1
let count = '90';
if (count<=100 && count>=90) {
  console.log('отлично');
} else if (count <= 89 && count >= 60){
  console.log('хорошо');
} else if (count <= 59 && count >= 40) {
  console.log("удовлетворительно");
} else if (count <= 39 && count >= 0) {
  console.log("попробуй потом");
} else {
  console.log("error");
}

// Задача 2
let a1=12, a2=4, sw=9;
switch (sw) {
  case 3://+
    console.log(a1+a2);
    break;
  case 5://-
    console.log(a1-a2);
    break;
  case 7://*
    console.log(a1*a2);
    break;
  case 9://  /
    console.log(a1/a2);
    break;
  default:
    console.log('Ошибка ввода третьего числа, введите одно из трех чисел: 3-для сложения'+
    ',5 - для вычитания, 7-для умножения, 9 - для деления');
}

// 3. Задача на цикл while
let count_plate = 51, count_fiery = 123.555;
let clear_plate = 0;
while (clear_plate<count_plate && count_fiery>=0.5) {
  count_fiery-=0.5;
  clear_plate++;
  console.log('Вымыто: '+clear_plate+' тар. Осталось средства: '+count_fiery);
}
if(count_plate!=clear_plate){
  console.log('Не хватило моющего средства. Осталось помыть: '+(count_plate-clear_plate) + ' тар.');
} else {
  console.log('Вымыты все тарелки. Осталось моющего средства: '+count_fiery);
}

// 3. Задача на Math.random() и if
// Написать код, который будет проверять попало ли случайно сгенерированное целое число из отрезка [10;500]
// в интервал (25;200) и выводить результат в консоль.
// Примеры работы программы:
// Число 345 не содержится в интервале (25;200)
// Число 110 содержится в интервале (25;200)
let ran = Math.floor(Math.random()*(501-10)+10);
if(ran>25 && ran<200) console.log('Число '+ran+' содержится в интервале (25;200)');
else console.log('Число '+ran+' не содержится в интервале (25;200)');

// 4. Задача на цикл for:
// Вывесити в консоль первые 20 элементов последовательности 2 4 6 8 10 12 ...
for(let i = 1; i<=20;i++){
  console.log(i*2);
}

// 5. Задача на циклы: for или while
// Вывести на экран ряд чисел Фибоначчи, состоящий из n элементов.
// Числа Фибоначчи – это элементы числовой последовательности
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …, в которой каждое последующее число равно сумме двух предыдущих.

let n = 100, fib1 = 0, fib2 = 1;
while (n!=0) {
  console.log(fib1);
  n--;
  fib1 = fib2 + fib1;
  fib2 = fib1 - fib2;
}
fib1 = 0, fib2 = 1;
for(n=0; n < 100;n++){
  console.log(fib1);
  fib1 = fib2 + fib1;
  fib2 = fib1 - fib2;
}

// 6. Задача на 2 цикла for
// Вывести в консоль таблицу умножения.
// Пример вывода:
// 1*1=1
// 2*1=2
// 3*1=3
// 4*1=4
// 5*1=5
// 6*1=6
for(let m1 = 1 ; m1<=10; m1++){
  for(let m2 = 1 ; m2<=10; m2++){
    console.log(m1+'*'+m2+'='+(m1*m2));
  }
}
