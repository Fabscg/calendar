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
        var currentHour = $(this).attr('id')

        if (currentTime > currentHour) {
            $(this).addClass('past')
        }
        else if (currentTime == currentHour) {
            $(this).removeClass('past')
            $(this).addClass('present')
        }
        else {
            $(this).removeClass('past')
            $(this).removeClass('present')
            $(this).addClass('future')
        }
    })
}
// created a variable called id for the id(attr) of the save button that we are clicking on
saveButton.on("click", function () {
    var task = $(this).siblings("textarea").val;
    var hour = $(this).parent().attr("id", "");

    localStorage.setItem(hour, task);


    // created a variable called task for the siblings(textarea) of the save button that is being clicked on, and what we want from that siblings(textarea) is the val() 
});

function showTasks() {

    // loop over time blocks
    $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id").split("hour")[1])

    });


// }
    // create a for loop to loop through your local storage to get any key that are name anywhere from 9 to 17 hint:(var = 9; i < 18;)
    // in the for loop create a var that has the value of local storage get item i. 
    // then display the data to the textarea with the same id as the current key
// }


// showTasks()