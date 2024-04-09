const botao = document.querySelector("button")

function somar() {
  const resultado = document.querySelector("div");
  const total = Number(resultado.innerText) + 1;
  resultado.innerText = total;
  if ( total < 10 ){
    resultado.innerText = total;
  }else {
    console.log("Não é possível adicionar mais");
  }
}
if (botao) {
  botao.addEventListener("click", somar);
}
