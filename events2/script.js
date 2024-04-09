const buttonAtivar = document.querySelector("button");
function handleClick(event) {
  buttonAtivar.innerHTML = "DESATIVADO";
  buttonAtivar.classList.toggle("green");
  if (buttonAtivar.classList.contains("green")) {
    buttonAtivar.innerHTML = "ATIVADO";
  }
}
buttonAtivar.addEventListener("click", handleClick);

// Window

console.log(window);
const larguraTela = window.innerWidth;

function coordenadaMouse (event) {
  const coordenadas = {
    x: event.x , 
    y: event.y ,
  }
  console.log(coordenadas);
}
function scroll () {
  console.log(window.scrollY);
}
window.addEventListener("mousemove", coordenadaMouse);
window.addEventListener("scroll",scroll);