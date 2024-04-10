const imagens = document.querySelectorAll("#galeria li img");

function galeriaTrocar(event) {
  const principal = document.querySelector("#imagem-principal");
  const clicada = event.currentTarget;
  principal.src = clicada.src;
  principal.alt = clicada.alt;
  console.log(clicada.src);
}

function galeriaClick(imagem) {
  imagem.addEventListener("click", galeriaTrocar);
}

imagens.forEach(galeriaClick);
