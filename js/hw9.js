'use sctrict'

document.body.append(
    // generateField(10, getPrises()),
    generateCart(getCats())
);

document.body.style.background= "linear-gradient(90deg, #f8ff00 0%, #3ad59f 100%)";

function generateCart(arr){
  let section = document.createElement("section");
  section.classList.add("cats");
  arr.map( el =>{
    let div = document.createElement("div");
    div.classList.add("col-3");
    let catDiv = document.createElement("div");
    div.append(catDiv);
    catDiv.classList.add("cat");
    let name = document.createElement("h3");
    name.innerText = el.name;
    let age = document.createElement("p");
    age.innerText = typeof el.age==='string'?el.age:el.age+" года";
    let color = document.createElement("p");
    color.innerText = el.color;
    let info = document.createElement("div");
    info.innerHTML = `${el["additional_info"]["vaccinations"]?"<span> Есть прививки.<span>":""}
                      ${el["additional_info"]["vaccinations"]?"<span> Есть паспорт.<span>":""}
                      `;
    catDiv.append(name, age, color, info);
    section.append(div);
  });

  return section;
}

function generateField(n, data){
  n = n>=3?n:3;
  let field = document.createElement("div");
  field.style.cssText =
    "margin: 0 auto;"+//'элемент поцентру'
    "width: 50vw;"+
    "display: flex;" +
    "flex-wrap: wrap;";
// создание одной ячейки
// n*n - общее количество ячеек
    for(let i = 0; i <  n * n; i++){
      let cell = document.createElement("div");
      cell.style.border = "1px solid black";
      cell.style.width = cell.style.height = 50/n + "vw";
      cell.style.boxSizing  = "border-box";
      field.append(cell);
    }
    addRandomData(field, data);
    return field;
}

function addRandomData(field, dataObject){
  let attr = Object.keys(dataObject);
  for(let attrValue of attr){

    let randomIndex = count=>Math.floor(Math.random()*count);

    let divElem;
    while(!divElem || divElem.hasAttribute("prise")){
      divElem = field.children[randomIndex(field.children.length)];
    }
    divElem.setAttribute("prise", attrValue);
    }
}

function getPrises(){
return {
  headphones: "Наушники",
  book:"Книги",
  postcard: "Открытка"
};
}
function getCats() {
    return [
        {
            "name": "Люся",
            "age": "1 год",
            "color": "трехцветная",
            "additional_info": {"vaccinations": true, "passport": true}
        },
        {
            "name": "Том",
            "age": "3 месяца",
            "color": "белый",
            "additional_info": {"vaccinations": false, "passport": false}
        },
        {
            "name": "Макс",
            "age": 2,
            "color": "серый",
            "additional_info": {"vaccinations": false, "passport": true}
        },
        {
            "name": "Василий",
            "age": 3,
            "color": "черный",
            "additional_info": {"vaccinations": true, "passport": true}
        }
    ];
}
