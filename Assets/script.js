// Add current date and time to header
var now = moment().format("MMM Do, YYYY, h:mm A")
$("#currentDay").text(now);
setInterval(() => {
    now = moment().format("MMM Do, YYYY, h:mm A")
$("#currentDay").text(now);
}, 60000);

function renderTasks() {
    $("#9").val(localStorage.getItem("9"));
    $("#10").val(localStorage.getItem("10"));
    $("#11").val(localStorage.getItem("11"));
    $("#12").val(localStorage.getItem("12"));
    $("#1").val(localStorage.getItem("1"));
    $("#2").val(localStorage.getItem("2"));
    $("#3").val(localStorage.getItem("3"));
    $("#4").val(localStorage.getItem("4"));
    $("#5").val(localStorage.getItem("5"));
}
renderTasks()
// //Add Task When clicking on button

function addTask(e){
   var row_id= e.target.getAttribute("row")
    console.log(row_id);
    console.log(e.target.attributes[0]);
    console.log($("#"+row_id).val());
    localStorage.setItem(row_id,$("#"+row_id).val());
}

$(".saveBtn").on("click", addTask);



//clear calendar button (reset)
function ResetCal(){
localStorage.clear()
location.reload()
}

$(".clearcal").on("click",ResetCal);


//change to military time
function mapToMilitary(time, am_pm){
    if ( am_pm == "PM" && time != "12"){
//change time from string to integer; if it's PM, add 12hrs to get military time
        var time = parseInt(time) + 12
    } else {
//if it's not PM, then leave time as is
        var time = parseInt(time)
    }
    return time
}
//Update colors of rows according to past, present, future tasks 
function updateColors () {
    var d = new Date();
    var compareHr = d.getHours();
    var rows = $(".hour")
    
    for (var i = 0; i< rows.length; i++){
        var text = rows[i].textContent
        var time = parseInt(text.substring(0, text.length - 2))
        var row_am_pm = text.substring(text.length-2, text.length)
        var time_mil = mapToMilitary(time,row_am_pm)
        console.log(compareHr, time)

        if ( compareHr == time_mil){
            $("#" + String(time)).addClass("present")
        } else if ( compareHr > time_mil ){
            $("#" + String(time)).addClass("past")
        } else {
            $("#" + String(time)).addClass("future")
        }

        
    }
}

updateColors()

// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist