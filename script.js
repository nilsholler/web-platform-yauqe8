

//function to display only available times after user selected date
$("#timeSelect").html('<option>00:00</option>');

//Create bootstrap-datepicker
var datepickerOptions={language: 'de'}
$('.datepicker').datepicker(datepickerOptions);




//Function to analyze number of people and increase to number divisible by two

function divisibleByTwo(number){
  return number + (number % 2);
}

