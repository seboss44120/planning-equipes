document.addEventListener("DOMContentLoaded", function () {

const urlParams = new URLSearchParams(window.location.search);
const team = urlParams.get("team");

if(team){

document.getElementById("teamTitle").innerText="Planning "+team;

var calendarEl=document.getElementById("calendar");

var calendar=new FullCalendar.Calendar(calendarEl,{

initialView:"dayGridMonth",

events:[]

});

calendar.render();

}

});

function addShift(){

let trigramme=prompt("Trigramme");

let creneau=prompt("Créneau");

let date=prompt("Date YYYY-MM-DD");

alert("Créneau ajouté : "+trigramme+" "+creneau+" "+date);

}
