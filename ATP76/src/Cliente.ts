export class Cliente{
    private _id:number;
    private _nome:string;
    private _sobrenome:string;
    private _idade:number;

    get id():number{
        return this._id;
    } 
    
    set id(iden:number){
        this._id = iden;
    }

    set nome(nome:string){
        this._nome = nome;
    }

    get nome():string{
        return this._nome;
    }

    set sobrenome(sobrenome:string){
        this._sobrenome = sobrenome;
    }

    get sobrenome():string{
        return this._sobrenome;
    }

    get idade():number{
        return this._idade;
    } 
    
    set idade(idade:number){
        this._idade = idade;
    }
}