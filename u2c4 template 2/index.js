// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("form").addEventListener("submit", displaydata);
var data = JSON.parse(localStorage.getItem("schedule"))||[];
  function displaydata(){
    event.preventDefault();
    var obj = {
      num : masaiForm.matchNum.value,
      teama: masaiForm.teamA.value,
      teamb:masaiForm.teamB.value,
      date:masaiForm.date.value,
      venue:masaiForm.venue.value,

    }
   data.push(obj);
   localStorage.setItem("schedule",JSON.stringify(data))
  }