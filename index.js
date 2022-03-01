// //  seleccionamos los dos elementos que serán clickables

// const toggleButton = document.getElementById("button-menu");
// const navWrapper = document.getElementById("nav");

// /* 
//   cada ves que se haga click en el botón 
//   agrega y quita las clases necesarias 
//   para que el menú se muestre.
// */
// toggleButton.addEventListener("click", () => {
//   toggleButton.classList.toggle("close");
//   navWrapper.classList.toggle("show");
// });

// /* 
//   Cuándo se haga click fuera del contenedor de enlaces 
//   el menú debe esconderse.
// */

// navWrapper.addEventListener("click", e => {
//   if (e.target.id === "nav") {
//     navWrapper.classList.remove("show");
//     toggleButton.classList.remove("close");
//   }
// });

// selector
var menu = document.querySelector('.hamburger');

// method
function toggleMenu (event) {
  this.classList.toggle('is-active');
  document.querySelector( ".menuppal" ).classList.toggle("is_active");
  event.preventDefault();
}

// event
menu.addEventListener('click', toggleMenu, false);