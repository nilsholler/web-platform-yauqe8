//function to display only available times after user selected date
$("#timeSelect").html("<option>00:00</option>");

//Create bootstrap-datepicker
var datepickerOptions = { language: "de" };
$(".datepicker").datepicker(datepickerOptions);

//Function to analyze number of people and increase to number divisible by two

function divisibleByTwo(number) {
  return number + (number % 2);
}

$("#forward").click(formForward);
$("#backward").click(formBackward);

var formSteps = document.getElementsByClassName("form-step");
var currentStep = 1;
var lastStep = formSteps.length;

var stepSize = 100 / lastStep; //Size of one step = 100/number of Steps

function updateProgress(value) {
  var progressBarStep = value*stepSize;
  $("#progress").css("width", progressBarStep + "%");
  $("#progress").attr("aria-valuenow", progressBarStep);
  $("#progress-current").html(value);
}

//Initialize progress bar
$("#progress-max").html(lastStep);
updateProgress(currentStep);

function formForward() {
  if (currentStep < lastStep) {
    formSteps[currentStep - 1].style.display = "none";
    $("#backward").show();
    currentStep++;
    updateProgress(currentStep);
    formSteps[currentStep - 1].style.display = "initial";
    if (currentStep == lastStep) {
      //Hide the forward button if max number of steps is reached
      $("#forward").hide();
    }
  }
}

function formBackward() {
  if (currentStep > 1) {
    formSteps[currentStep - 1].style.display = "none";
    $("#forward").show();
    currentStep--;
    updateProgress(currentStep);
    formSteps[currentStep - 1].style.display = "initial";
    if (currentStep == 1) {
      $("#backward").hide();
    } //Hide the forward button if max number of steps is reached
  }
}
