const list = ['Gustavo', 'Felipe', "Téo", "Camilo"];
console.log(list);

list.forEach(nomes => {
    console.log(nomes);
});

for (let i = 0; i < list.length; i++) {
  console.log(list[i]);
}
const numbers = [1, 2, 3,]

numbers.forEach(n => {
  console.log(n);
})


const links = document.querySelectorAll("nav a");
console.log(links)

links.forEach(link => {
  console.log(link.href);
})