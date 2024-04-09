const buttonAtivar = document.querySelector("button")
function handleClick (event) {
  buttonAtivar.innerHTML = "DESATIVADO"
  buttonAtivar.classList.toggle("green")
  if (buttonAtivar.classList.contains("green")){
    buttonAtivar.innerHTML = "ATIVADO"
  }
}
buttonAtivar.addEventListener("click", handleClick);

