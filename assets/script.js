var date = moment().format('dddd, MMMM Do, YYYY');
$("#currentDay").text(date);

var currentTime = moment().hour()
var timeBlock = $("textarea")

setTimeColor()

function setTimeColor() {
    timeBlock.each(function() {
        var currentHour = $(this).attr('id')

        if(currentTime > currentHour) {
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