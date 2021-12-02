import { Pessoa } from "./Pessoa.js";

export class PessoaJuridica extends Pessoa{
    #cnpj;

    
    get cnpj(){
        this.#cnpj;
    }

    set cnpj(cnpj){
        this.#cnpj = cnpj;
    }

    constructor(){
        super();
    }
}