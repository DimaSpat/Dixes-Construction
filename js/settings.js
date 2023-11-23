function toggleMenu() {
  var menuContainer = document.querySelector(".other-header");
  var button = document.querySelector("#show-header");

  if (menuContainer.style.display === "block") {
    menuContainer.style.display = "none";
    button.innerHTML = "&Congruent;";
  } else {
    menuContainer.style.display = "block";
    button.innerHTML = "&times;";
  }
}
