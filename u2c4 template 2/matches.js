// write js code here corresponding to matches.html


var data = JSON.parse(localStorage.getItem("schedule"))||[];
// console.log(data)

displaydata(data);

function seevenue(){
var selected = document.querySelector("#filterVenue").value;
console.log(selected)
var filterdata = data.filter(function(elem){
  if(elem.venue == selected){
    return elem ;
  }
})
// console.log(filterdata)
displaydata(filterdata);
}

function displaydata(data){
  document.querySelector("tbody").innerHTML= "";
  data.forEach(function(elem){
    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.innerText = elem.num;
    var td2 = document.createElement("td");
    td2.innerText = elem.teama;
    var td3 = document.createElement("td");
    td3.innerText = elem.teamb;
    var td4 = document.createElement("td");
    td4.innerText = elem.date;
    var td5 = document.createElement("td");
    td5.innerText = elem.venue;
    var td6 = document.createElement("td");
    td6.innerText ="favourites"
    td6.style.color = "blue";
    td6.style.cursor= "pointer"
    td6.addEventListener("click",function(){
      favourites(elem);
    })

    tr.append(td1,td2,td3,td4,td5,td6);
    document.querySelector("tbody").append(tr);

  })
}
var favdata = [];
function favourites(elem){
  // console.log(elem)
  favdata.push(elem);
  localStorage.setItem("favourites",JSON.stringify(favdata));
}

