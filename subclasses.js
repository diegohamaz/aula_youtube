class Livro{
    constructor(titulo , autor , ano){
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
    }

    lerSumario(){
        return `${this.titulo} foi escrito por ${this.autor} em ${this.ano}`;
    }


}

class Revista extends Livro{
    constructor(titulo , autor , ano , mes){
        super(titulo , autor , ano );
        this.mes = mes;
    }
}

const revista1 = new Revista('Livro 1' , 'Diego', '2019' , 'Jan');

console.log(revista1);