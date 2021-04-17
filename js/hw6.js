'use strict'

// 1. Посмотреть методы строк: indexOf / lastIndexOf / slice

let str = "indexOf / lastindexOf / slice";
console.log(str.indexOf("indeffffxOf"));
console.log(str.lastIndexOf("indexOf"));
console.log(str.slice(str.lastIndexOf("indexOf")));
console.log(str.slice(-4));

// 2. Написать функцию, которая принимает на вход 2 строки и возвращает количество вхождений одной строки в другую.
// Например, слово "дом" встречается в строке "дом домик домой одомашненный" 4 раза.
function getCountSubstr(str, word){
  let count=0;
  while(str.includes(word)){
    str = str.substring(str.indexOf(word)+word.length);
    count++;
  }
  return count;
}
// 3. Написать функцию, которая принимает на вход строку и возвращает true, если функция является полиндромом и false, если нет.
// Палиндром — это число, буквосочетание, слово или текст, которые одинаково читаются по буквам или по словам как слева направо, так и справа налево.
// Например, 202 - палиндром / fafaf - палиндром / а роза упала на лапу Азора - палиндром.

function isPolidrom(str){
  str = str.replaceAll(" ","").toLowerCase();
  for(let i = 0; i<str.length/2; i++){
    if(str[i]!=str[str.length-i-1]) return false;
  }
return true;
}
