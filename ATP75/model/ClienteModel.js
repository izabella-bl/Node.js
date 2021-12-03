
class ClienteModel{
    id
    nome;
    sobrenome;
    idade;

    constructor(nome,sobrenome,idade,id =null ){
         this.nome = nome;
         this.sobrenome = sobrenome;
         this.idade = idade;
         this.id = id;
    }
}

export default ClienteModel;