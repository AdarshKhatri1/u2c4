// write js code here corresponding to favourites.html

  var data = JSON.parse(localStorage.getItem("favourites"))||[];

  displaydata(data);


function displaydata(data){
  document.querySelector("tbody").innerHTML= "";
  data.forEach(function(elem,ind){
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
    td6.innerText ="Delete"
    td6.style.color = "red";
    td6.style.cursor= "pointer"
    td6.addEventListener("click",function(){
      Delete(elem,ind);
    })   

    tr.append(td1,td2,td3,td4,td5,td6);
    document.querySelector("tbody").append(tr);

  })

}

function Delete(elem,ind){
  event.target.parentNode.remove();
  data.splice(ind,1);
  // console.log(elem)
  // elem.splice(ind,1);
  localStorage.setItem("favourites",JSON.stringify(data));
  displaydata(data)
  
}
