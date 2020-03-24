window.addEventListener("load", setTimeoutFunction);

function setTimeoutFunction() {
  setTimeout(hideLoader, 2000);
}

function hideLoader() {
  const loader = document.querySelector(".loader").classList.add("hidden");
}