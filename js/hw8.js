'use script'

document.body.append(
  generateTable(getArticles()),
  generateTable(getGoods())
);

function generateTable(arrObj){
   let table = document.createElement("table");
   table.classList.add("cinereousTable");

   let thead = document.createElement("thead");
   let captionRow = document.createElement("tr");
   table.append(thead);
   thead.append(captionRow);

   Object.keys(arrObj[0]).map(el=>{
     let captionCell = document.createElement("th");
     captionCell.innerText = el;
     captionRow.append(captionCell);
   });
   let tbody = document.createElement("tbody");
   table.append(tbody);
   arrObj.map(el=>{
     let row = tbody.insertRow();
     Object.values(el).map(one=>{
       let cell = row.insertCell();
       cell.innerText = one;
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
           text: "Статья про JS",
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
