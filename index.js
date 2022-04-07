const fulImgBox = document.getElementById("fulImgBox");
const fulImg = document.getElementById("fulImg");
const ham = document.querySelector(".ham");
const enlaces = document.querySelector(".containLi");
const barras = document.querySelectorAll(".ham span");
const containLi = document.querySelector(".containLi");
const ulls = document.querySelector(".liNav ul");

/*fotos*/
function openFulImg(reference) {
  fulImgBox.style.display = "flex";
  fulImg.src = reference;
}

function closeImg() {
  fulImgBox.style.display = "none";
}

/*menu hamburguesa*/

ham.addEventListener("click", () => {
  enlaces.classList.toggle("activado");
  barras.forEach(child => {child.classList.toggle("animado")});
})

containLi.addEventListener("click", () => {
  enlaces.classList.toggle("activado");
  ulls.forEach(child => {child.classList.toggle("animado")});
})

/*iconos redes*/

window.addEventListener("scroll", ()=>{
  let content = document.querySelector(".contentRedes");
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight/1;
  if(contentPosition < screenPosition){
    content.classList.add("active");
  }else{
    content.classList.remove("active")
  }

});


