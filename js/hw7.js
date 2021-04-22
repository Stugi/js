'use strict'
let goods = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 50
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5
    }
};
//1
function createObjectGoods(obj, from, to){
  if(!checkForCreateObjectGoods(obj, from, to))
    return false;
  let ret = {};
  for(let good in obj){
    if(obj[good].price>=from && obj[good].price<to){
        ret[good] = obj[good];
    }
  }
// 2 способ
//  ret = Object.fromEntries((Object.entries(goods)).filter(([key,value])=>value.price >= from && value.price < to ));

  return isEmpty(ret)?false:ret;
}

function checkForCreateObjectGoods(obj, from, to){
  return typeof obj==='object' && obj!==null && typeof from==='number' && typeof to==='number';
}

function isEmpty(obj){
  for(let prop in obj){
    // hasOwnProperty - содержит ли объект указанное свойство
    if(obj.hasOwnProperty(prop)) return false;
  }
  return true;
}

// Задача 2
function minusGoodsByTitle(map, title, countToCart){
  if(!checkForMinusGoodsByTitle(map, title, countToCart))
    return false;
  for (let key in map) {
    if (map[key]['title']===title){
        if(map[key]['count']>=countToCart){
          map[key]['count']-=countToCart;
          return true;
        }else{
          console.log(title+": не хватает товара. Доступное количество: "+map[key]['count']);
          return false;
        }
    }
  }
  return false;
}
/*function minusGoodsByTitle(map, title, countToCart){
  let ret = false;
  if(!checkForMinusGoodsByTitle(map, title, countToCart))
    return ret;
  let finded = Object.entries(map).filter(([key, value])=>value.title===title);
  if(finded.length==0) return ret;
  finded.map(([key, value])=>{  if(value.count >= countToCart){
                                value.count-=countToCart;
                                ret = true;
                              } else {
                                console.log(title+": не хватает товара. Доступное количество: "+value.count);
                                ret = false;
                              }
                            });
  return ret;
}*/
function checkForMinusGoodsByTitle(obj, title, countToCart){
    return typeof obj==='object' && obj!==null && typeof title==='string' && typeof countToCart==='number' && countToCart>0;
}

let books = [
    { author: 'Пушкин', title: 'Пир во время чумы'},
    { author: 'Толстой', title: 'Война и мир'},
    { author: 'Лермонтов', title: 'Тамань'},
    { author: 'Гончаров', title: 'Обломов'},
    { author: 'Лермонтов', title: 'Герой Нашего Времени'},
    { author: 'Пушкин', title: 'Руслан и Людмила'},
    { author: 'Лермонтов', title: 'И скучно, и грустно'},
];
// 3
function createArrayBooksByAuthor(allbooks, author){
  return allbooks.filter(b=>b.author===author);
}
// 4
function sortBooks(allbooks, orderBy="title"){
  allbooks.sort((b1,b2)=>b1[orderBy]<b2[orderBy]?-1:(b1[orderBy]>b2[orderBy]?1:0));
}
console.log(createArrayBooksByAuthor(books, "Лермонтов"));
sortBooks(books,"title"); console.log(books);
