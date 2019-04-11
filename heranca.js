const livrosProto ={
    lerSumario: function(){
        return `${this.titulo} foi escrito por ${this.autor} em ${this.ano}`;
    }
}

const livro1= Object.create(livrosProto , {
    titulo : {value: 'Livro 1'},
    autor : {value: 'Diego Lisboa'},
    ano : {value: '2019'}
})

console.log(livro1.lerSumario);