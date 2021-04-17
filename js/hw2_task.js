'use strict'
let min = 0, max=100, tmp, asw;
alert('загадайте число от 0 до 100');
while (true) {
  tmp = (min+max)/2;
  //это число равно tmp?
  asw = prompt("это число равно "+tmp+"?");
  //если 1 - > break;
  if(asw===1){
    console.log("Ваше число "+tmp);
  }
  //это число меньше tmp;
  asw = prompt("это число меньше "+tmp+"?");
  //если 1 - > maximum = tmp;
  //если 0 - > min = tmp;
  if(answ=1)
  {
    max = tmp;
  }
  else{
    min = tmp;
  }
}
