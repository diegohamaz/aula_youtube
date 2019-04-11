function Livro(titulo , autor , ano){
  this.titulo = titulo;
  this.autor  = autor;
  this.ano = ano;
}

Livro.prototype.lerSumario = function(){
  return `${this.titulo} foi escrito por ${this.autor} em ${this.ano}`;
}

Livro.prototype.lerIdade = function(){
  const anos = new Date().getFullYear() - this.ano;
  return `${this.titulo} foi escrito por ${this.autor} em ${anos}`;
}

Livro.prototype.revisar = function(novoAno){
  this.ano = novoAno;
  this.revisado = true;
}

const livro1 = new Livro('Livro 1' , 'Diego Lisboa' , '2015');
const livro2 = new Livro('Livro 2' , 'Rodrigo Campos' , '2016');

console.log(livro1.lerSumario());
console.log(livro1.lerIdade());

livro2.revisar('2019')

console.log(livro2);