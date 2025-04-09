const menuTlacitko = document.querySelector("#menu-tlacitko");
const menuPolozky = document.querySelector("#menu-polozky");

menuTlacitko.addEventListener("click", function() {
menuPolozky.classList.toggle("show");
const ikonka = menuTlacitko.querySelector("i");
  if (menuPolozky.classList.contains("show")) {
    ikonka.className = "fas fa-xmark";
  } else {
    ikonka.className = "fas fa-bars";
  }
});
