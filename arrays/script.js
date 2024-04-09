const list = ["Gustavo", "Felipe", "Téo", "Camilo"];
console.log(list);

list.forEach((nomes) => {
  console.log(nomes);
});

for (let i = 0; i < list.length; i++) {
  console.log(list[i]);
}
const numbers = [1, 2, 3];

numbers.forEach((n) => {
  console.log(n);
});
// ARRAY LIKE
const links = document.querySelectorAll("nav a");
console.log(links); // NODE LIST

// ARRAY
// const links = Array.from(document.querySelectorAll("nav a"));


links.forEach((link) => {
  console.log(link.href);
});

const languages = ["Javascript", "C++", "PYTHON", "JAVA"];

languages.push("C#");
languages.pop();
languages.shift();
languages.unshift("Ruby");
console.log(languages);
