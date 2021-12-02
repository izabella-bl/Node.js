import { Pessoa } from "./Pessoa.js";

export class PessoaFisica extends Pessoa{
    #cpf;

     
    get cpf(){
        this.#cpf;
    }

    set cpf(cpf){
        this.#cpf = cpf;
    }

    constructor(){
        super();
    }
   
}