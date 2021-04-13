// 1. На многомерный массив
// Дан массив:
let arr =  [
        [23, 56, 75, -90, 123],
        [17, 0, -6429, -122],
        [19, 86, 55, -3, 900, 0, 0],
        [4, 9, -2]
    ];
// Увеличить значение каждого элемента массива на 10

for (let i = 0; i<arr.length; i++) {
  for(let j = 0; j < arr[i].length;j++){
     arr[i][j]+=10;
   }
}
// 2. Создать массив из целых чисел, заполнить массив рандомными значениями. Размер массива - 7.
// Поменять элементы с максимальным и минимальным значениями местами.
//1 способ
let array = [];
array.length = 7;
for (let i = 0; i < array.length; i++) {
  array[i] = Math.floor(Math.random()*500);
}
let min = array.indexOf(Math.min(...array));
let max = array.indexOf(Math.max(...array));
[array[min],array[max]] = [array[max],array[min]];

//2 способ
let array = [23, 56, 75, -90, 123, 17, 0];
let min = Number.MAX_VALUE, max = Number.MIN_VALUE;
for (let el of array) {
    if(el < min) min = el;
    if(el > max) max = el;
}

// 3. Создать массив из целых чисел.
// Отрицательные элементы массива скопировать в новый массив.
// i способ
arr = [23, 56, 75, -90, 123, 17, 0, -6429, -122, 19, 86, 55, -3, 900, 0, 0, 4, 9, -2];
let negativarr = [];
for (let arrelem of arr) {
  if(arrelem<0) negativarr.push(arrelem);
}

// ii способ
let newArray = [];
for(let i = arr.length - 1; i>=0;i-=1){//Запомни! перебор массива с конца, нужен если удаляем эл-ты !! иначе при удалении i++
  if (nums[i]<0) newArray.push(nums[i]);
  // Отрицательные элементы массива вырезать в новый массив.
  // if (nums[i]<0) newArray.push(arr.splice(i,0)[0]);
}
