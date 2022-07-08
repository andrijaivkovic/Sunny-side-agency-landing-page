const navButton = document.querySelector(".navigation__menu-icon-box");

navButton.addEventListener("click", function (e) {
  const menuList = document.querySelector(".navigation__list");

  menuList.classList.toggle("hidden");
});
