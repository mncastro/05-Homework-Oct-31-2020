$(document).ready(function () {
  var date = moment().format('MMMM Do YYYY, h:mm:ss a');
  $('#currentDay').append(date);

  $('.saveBtn').on('click', function () {
    var activity = $(this).siblings('.description').val();

    var hour = $(this).parent().attr('id');
    localStorage.setItem(hour, activity)
    console.log(localStorage)

  });

  function evaluateRow() {
      var momentTime = moment().hours();
      console.log(momentTime)
    
    
      $('.row').each(function () {
      var rowHour = parseInt($(this).attr('id').split("-")[1])
      console.log(rowHour);

      if (momentTime > rowHour) {
         $(this).addClass("past")
      } else if (momentTime === rowHour){
        // this the present
        $(this).addClass("present")
      } else {
          // this is future
        $(this).addClass("future")

      }
            

    });
  }
  
  evaluateRow()
  
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));
  $('#hour-18 .description').val(localStorage.getItem('hour-18'));
});
