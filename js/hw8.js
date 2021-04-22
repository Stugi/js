'use script'
let createHws = function () {
    task2(getArticles(), "task2_a");
    task2(getGoods(), "task2_g");
};
createHws();
function task2(obj, idSection){
  // check obj??
  let section = generateSection(idSection);
  let table = generateTable(obj);
  section.append(table);
  document.querySelector("main").append(section);
}



function generateTable(arrObj){
   let table = document.createElement("table");
   table.classList.add("cinereousTable");

  let columns = [];
  arrObj.map(el=>{
    Object.keys(el).map(key=>{ if(!columns.includes(key)) columns.push(key);
    });
  });
  let row_header = table.insertRow(0);
  columns.forEach((item, index, array)=>{
      let cell_header = row_header.insertCell(index);
      cell_header.innerText = item;
  });
  arrObj.forEach((it, index, array)=>{
        let row = table.insertRow(index+1);
        columns.forEach((el,ind,arr)=>{
          let cel = row.insertCell(ind);
          cel.innerText = it[el]===undefined?"-":it[el];
        });
  });


  return table;
}
function generateSection(id){
  let section = document.createElement("section");
  section.setAttribute("id",id);
  // document.querySelector("main").append(section);
  return section;
}
function getArticles(){
  return [
      {
          id: 1,
          title: "JS",
          // text: "Статья про JS",
          author: "Александр"
      },
      {
          id: 2,
          title: "PHP",
          text: "Статья про PHP",
          author: "Виталий"
      },
      {
          id: 3,
          title: "Базы Данных",
          text: "Статья про Базы Данных",
          author: "Евгения"
      },
      {
          id: 4,
          title: "HTML",
          text: "Статья про HTML",
          author: "Виталий"
      }
  ];
}
function getGoods(){
  return [
      {
          title: "Пианино",
          price: 3000,
          count: 25
      },
      {
          title: "Гитара",
          price: 1200,
          count: 40
      },
      {
          title: "Барабаны",
          price: 2700,
          count: 12
      },
      {
          title: "Флейта",
          price: 900,
          count: 50
      },
      {
          title: "Арфа",
          price: 3400,
          count: 5
      }
  ];
}
