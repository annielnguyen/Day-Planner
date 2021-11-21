// $(document).ready(function() {
//     const currentDayEl = $("header #currentDay");
// }

$("#currentDay").text(moment().format("MMM Do, YYYY"));

//Add Task Button
col-1-addButton.addEventListener("click", saveTask);