export class Pessoa{
    #nome;
    #sobrenome;
    #idade;

    get nome(){
        this.#nome;
    }

    set nome(nome){
        this.#nome = nome;
    }

    
    get sobrenome(){
        this.#sobrenome;
    }

    set sobrenome(sobrenome){
        this.#sobrenome = sobrenome;
    }

    
    get idade(){
        this.#idade;
    }

    set idade(idade){
        this.#idade = idade;
    }
}