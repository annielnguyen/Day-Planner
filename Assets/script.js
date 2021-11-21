// Add current date and time to header
var now = moment().format("MMM Do, YYYY, h:mm A")
$("#currentDay").text(now);
setInterval(() => {
    now = moment().format("MMM Do, YYYY, h:mm A")
$("#currentDay").text(now);
}, 60000);

// //Add Task When clicking on button
function addTask(){

}

$(".col-1 addButton").on("click", addTask);

//clear calendar button
function ResetCal(){

}

// $(".clearcal").accordion("ResetCal");

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

