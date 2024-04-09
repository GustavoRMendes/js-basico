const links = Array.from(document.querySelectorAll("nav a"));
const body = document.querySelector("body");
function ativarLink(link) {
  if (link.href === document.location.href) {
    body.style.backgroundColor = "black"
    link.style.color = "white";
  }
}

links.forEach(ativarLink);
