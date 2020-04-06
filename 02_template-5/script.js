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
   let darkMode = document.body;
   darkMode.classList.toggle("dark-mode-button");
   document.getElementById('wrapper').id = 'wrapper-darkmode';
}

function toggleLightMode() {
  let lightMode = document.body;
  lightMode.classList.toggle("dark-mode-button");
  document.getElementById('wrapper-darkmode').id = 'wrapper';
}

/*Live-Clock*/
function startTime() {
  let liveTime = new Date();
  let hours = liveTime.getHours();
  let minutes = liveTime.getMinutes();
  let second = liveTime.getSeconds();

  minutes = liveTimeCheckUnder10(minutes);
  second = liveTimeCheckUnder10(second);

  document.getElementById('dateText').innerHTML =
  hours + ":" + minutes + ":" + second;

  let time = setTimeout(startTime, 500);
}

function liveTimeCheckUnder10(number) {
  if (number < 10) {
    number = "0" + number
  };
  return number;
}

/*mail-alert*/
function mailAlert() {
  alert("Our mailadress is not working for 2 months! Please call us instead of mailing!");
}

/*Back-up-prank*/
function youWantToGoBackUp() {
  document.getElementById("pranked").innerHTML = "Pranked! You have to scroll-up by yourself"
}