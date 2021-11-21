// // $(document).ready(function() {

// // $("#currentDay").text(moment().format("MMM Do, YYYY"));
// var dateToday = moment().format("MMM Do, YYYY");
// $("currentDay").text(dateToday);

// //Add Task Button
// // function saveTask(){

// // }

// // $(".col-1 addButton").addEventListener("click", saveTask);
var now = moment().format("MMM Do, YYYY, hh:mm A")
$("#currentDay").text(now);
setInterval(() => {
    now = moment().format("MMM Do, YYYY, hh:mm A")
$("#currentDay").text(now);
}, 60000);