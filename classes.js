class Livro{
    constructor(titulo , autor , ano){
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
    }

    lerSumario(){
        return `${this.titulo} foi escrito por ${this.autor} em ${this.ano}`;
    }

    lerIdade(){
        const anos = new Date().getFullYear() - this.ano;
        return `${this.titulo} foi escrito por ${this.autor} em ${anos}`;
    }

    revisar(novoAno){
        this.ano = novoAno;
        this.revisado = true;
    }

    static topLivrosLoja(){
        return 'Folha de Sao Paulo';
    }


}

const livro1 = new Livro('Livro 1' , 'Diego', '2019');

console.log(livro1.lerSumario());