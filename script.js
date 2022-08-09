var currentDayEl = $('#currentDay');
var rightNow = moment().format("dddd, MMMM Do YYYY,");



currentDayEl.text(rightNow);

$('.saveBtn').on('click', function(event){
    var time = ($(this).parent().attr('id'))
    var input= ($(this).siblings('textarea').val())
    localStorage.setItem(time,input)
});

