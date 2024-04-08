function showBook (name, author, year) {
  const book = {
    nome: name.toUpperCase(),
    frase: name + " por " + author , 
    totalAnos: 2050 - year,
  };
  return book;
}


const returnBook = showBook("Harry", "Doumbdore", 2023,);
console.log(returnBook);

