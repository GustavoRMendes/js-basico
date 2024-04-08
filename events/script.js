const curso = {
  nome : "Typescript", 
  mostrar() {
    console.log(this.nome);
  }
}

curso.mostrar();
 /** @param {MouseEvent} event */
const buttonAtivar = document.querySelector(".btn")
function handleClick (event) {
  console.log(event.x);
  console.log(event.y);
  console.log(event.timeStamp);
  console.log(event.currentTarget);
  console.log("Cliquei");
}
buttonAtivar.addEventListener("click", handleClick);

