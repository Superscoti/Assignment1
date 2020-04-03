/*pre-loading animation*/
window.addEventListener("load", setTimeoutFunction);

function setTimeoutFunction() {
  setTimeout(hideLoader, 2000);
}

function hideLoader() {
  const loader = document.querySelector(".loader").classList.add("hidden");
}

/*toggle Dark Mode*/
function toggleDarkMode() {
   var darkMode = document.body;
   darkMode.classList.toggle("dark-mode-button");
   document.getElementById('wrapper').id = 'wrapper-darkmode';
}

function toggleLightMode() {
  var lightMode = document.body;
  lightMode.classList.toggle("dark-mode-button");
  document.getElementById('wrapper-darkmode').id = 'wrapper';
}

/*Slideshow*/


/*Live-Clock*/
function startTime() {

  var liveTime = new Date();
  var hours = liveTime.getHours();
  var months = liveTime.getMinutes();
  var second = liveTime.getSeconds();

  months = liveTimeCheck(months);
  second = liveTimeCheck(second);

  document.getElementById('dateText').innerHTML =
  hours + ":" + months + ":" + second;

  var time = setTimeout(startTime, 500);
}
function liveTimeCheck(i) {
  if (i < 10) {
    i = "0" + i
  };
  return i;
}