//Display the actual date

var date = moment().format('dddd, MMMM Do, YYYY');
$("#currentDay").text(date);

//global variables
var currentTime = moment().hour()
var timeBlock = $("textarea")
var saveButton = $('.saveBtn')

//setting the time color according to past, present and future events through a loop

setTimeColor()

function setTimeColor() {
    timeBlock.each(function () {
        var currentHour = $(this).attr("id")

        if (currentTime > currentHour) {
            $(this).addClass("past")
        }
        else if (currentTime == currentHour) {
            $(this).removeClass("past")
            $(this).addClass("present")
        }
        else {
            $(this).removeClass("past")
            $(this).removeClass("present")
            $(this).addClass("future")
        }
    })
}
// created a variable called id for the id(attr) of the save button that we are clicked on
saveButton.on("click", function () {
    var task = $(this).siblings(".description").val();
    var hour = $(this).parent().attr("id");

    localStorage.setItem(hour, task);


});


$("#hour9 .task").val(localStorage.getItem("hour9"));
$("#hour10 .task").val(localStorage.getItem("hour10"));
$("#hour11 .task").val(localStorage.getItem("hour11"));
$("#hour12 .task").val(localStorage.getItem("hour12"));
$("#hour13 .task").val(localStorage.getItem("hour13"));
$("#hour14 .task").val(localStorage.getItem("hour14"));
$("#hour15 .task").val(localStorage.getItem("hour15"));
$("#hour16 .task").val(localStorage.getItem("hour16"));
$("#hour17 .task").val(localStorage.getItem("hour17"));



