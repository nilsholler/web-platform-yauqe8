//after window is loaded completely
window.onload = function() {
  //hide the preloader
  sleep(1000);
  document.querySelector(".sk-chase").style.display = "none";
  fadeOutEffect();
  document.querySelector(".spinner-wrapper").style.display = "none";
};

function fadeOutEffect() {
  var fadeTarget = document.getElementById("spinner-wrapper");
  var fadeEffect = setInterval(function() {
    if (!fadeTarget.style.opacity) {
      fadeTarget.style.opacity = 1;
    }
    if (fadeTarget.style.opacity > 0) {
      fadeTarget.style.opacity -= 0.1;
    } else {
      clearInterval(fadeEffect);
    }
  }, 50);
}

function sleep(miliseconds) {
  var currentTime = new Date().getTime();

  while (currentTime + miliseconds >= new Date().getTime()) {}
}
