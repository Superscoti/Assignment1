window.addEventListener("load", setTimeoutFunction);

function setTimeoutFunction() {
  setTimeout(hideLoader, 2000);
}

function hideLoader() {
  const loader = document.querySelector(".loader").classList.add("hidden");
}

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
