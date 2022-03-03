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
var slider = document.querySelector('.eso')
var slider1 = document.querySelector('.eso1')

// method
function toggleMenu (event) {
  this.classList.toggle('is-active');
  document.querySelector( ".menuppal" ).classList.toggle("is_active");
  event.preventDefault();
}

// event
menu.addEventListener('click', toggleMenu, false);


function toggleClose(event) {
  this.classList.toggle('close')
  document.querySelector(".menuppal").classList.toggle("close")
  event.preventDefault();
}

slider.addEventListener('click', toggleClose, false);



function toggleAfterClose(event) {
  this.classList.remove('close')
  document.querySelector(".menuppal").classList.remove("close")
  event.preventDefault();
}

menu.addEventListener('click', toggleAfterClose, false);


// slider1

function toggleClose(event) {
  this.classList.toggle('close')
  document.querySelector(".menuppal").classList.toggle("close")
  event.preventDefault();
}

slider1.addEventListener('click', toggleClose, false);



function toggleAfterClose(event) {
  this.classList.remove('close')
  this.classList.remove('is-active')
  document.querySelector(".menuppal").classList.remove("is-active")
  document.querySelector(".menuppal").classList.remove("close")
  event.preventDefault();
}

menu.addEventListener('click', toggleAfterClose, false);