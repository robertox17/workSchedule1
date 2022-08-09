var currentDayEl = $('#currentDay');
var rightNow = moment().format("dddd, MMMM Do YYYY,");



currentDayEl.text(rightNow);

$('.saveBtn').on('click', function(event){
    var time = ($(this).parent().attr('id'))
    var input= ($(this).siblings('textarea').val())
    localStorage.setItem(time,input)
});
$(document).ready (function () {
    for (let i = 9; i < 18; i++){
        $("#hour-"+ i + " .description").val(localStorage.getItem("hour-"+ i))
      }
      function checkTime(){
        var currentHour= moment().hour()
    console.log(currentHour)
        $('.time-block').each(function(){
        var blockHour= parseInt($(this).attr('id').split('-')[1])
    console.log(blockHour)
        if(blockHour < currentHour ){
            $(this).removeClass('present')
            $(this).removeClass('future')
            $(this).addClass('past')
        }else if(currentHour === blockHour) {
            $(this).removeClass('future')
            $(this).removeClass('past')
            $(this).addClass('present')
    
        }else{
            $(this).removeClass('present')
            $(this).removeClass('past')
            $(this).addClass('future')
        }
        })
    }
      checkTime()
      setInterval(checkTime,2000)
    });
