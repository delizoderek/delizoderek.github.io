const burgerBtn = document.querySelector("#navBtn");
const navMenu = document.querySelector("#navMenu");

burgerBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (navMenu.style.display === "block") {
    navMenu.style.display = "none";
  } else {
    navMenu.style.display = "block";
  }
});
