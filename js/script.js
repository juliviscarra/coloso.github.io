
const nav = document.querySelector("header nav");
const menuBtn = document.querySelector(".menu-btn");
const menuLink = document.querySelectorAll(".nav-item a");
const fulImgBox = document.getElementById("VentanaImgAbierta");
const fulImg = document.getElementById("imgGrande")



menuBtn.addEventListener("click", toggleMenu);
menuLink.forEach( el => {
  el.addEventListener('click', toggleMenu);
});

function toggleMenu(e) {

  e.preventDefault();
  
  if (window.innerWidth < 640) {
    nav.classList.toggle("menuVisible");

  }


  if ( this.hasAttribute("href") ) {
    let adondeVoy = this.getAttribute("href");
    window.location = adondeVoy;  
  } 

  
}

function cerrarImg (){
  VentanaImgAbierta.style.display="none"
}

function abrirImg(reference){
  VentanaImgAbierta.style.display="flex"
  imgGrande.src = reference
}