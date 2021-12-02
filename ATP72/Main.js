import { PessoaFisica } from "./PessoaFisica.js";
import { PessoaJuridica } from "./PessoaJuridica.js";

const pf = new PessoaFisica();
pf.nome = "Ines";
pf.sobrenome = "Brasil";
pf.idade = "52";
pf.cpf = "777.999.999.-99";


const pj = new PessoaJuridica();
 pj.nome = "Joelma";
 pj.sobrenome = "calypson";
 pj.cnpj = "88283/0001-83";

 console.log(pf.nome,pf.sobrenome,pf.idade,pf.cpf);
 console.log(pj)