'use strict'
// 3. Написать функцию проверки на спам checkSpam(text, ...words)
// Функция принимает на вход текст и ...спам - слова
// (переменное количество аргументов).
// Определить по 5ти бальной шкале, как часто в тексте встречается спам.
// Результат вернуть из функции.
//
let text = "Lorem error ipsum dolor sit amet consectetur adipisicing elit Aut corporis dolor delectus ducimus dolor error iusto laudantium officia"
        +"officiis vero error voluptatibus Aliquam ea ipsa quasi dolor sapiente error ullam A dolore dolorum minima provident error  voluptas Aliquam"
         +"aut fugiat hic inventore error nam provident ratione sed";
const max = 5;
 checkSpam(text, "error", "dolor");

function checkSpam(text, ...spam){
  if (!spam) {
      return max;
    } else{
  let textArr = text.split(" ");

  let countSpam = 0;
  for (let el of textArr) {
    if(spam.includes(el))countSpam++;
  }
  let countWords = textArr.length;
  let x = countSpam*100/countWords;
  return max - max*x/100;
  }
}

// 4. На методы массивов (functions-2)
        // Дан массив:
        let numsArr = [
            [3, 5, -1, 6, 0],
            [56, -9, 111, 6],
            [11, 86, -12],
        ];
//  1. Увеличить каждый элемент массива на 10
numsArr.forEach((el1, in1, ar)=>{ar.forEach((elem, index, arr)=>{arr[in1][index]+=10})});

//  2. Создать массив, в который войдут положительные элементы numsArr
let posArray = [];//numsArr.filter(arr =>{arr.filter(elem => elem>0)});
for (var el of numsArr) {
  posArray=posArray.concat(el.filter(elem => elem>0));
}
