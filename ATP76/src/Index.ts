import { Cliente } from "./cliente";

const cliente = new Cliente();

cliente.id = 1;
cliente.nome = "Anna";
cliente.sobrenome = "Almeida";
cliente.idade = 23;

const lista = new Array<Cliente>();

lista.forEach(cliente=> console.log(cliente.id,cliente.nome,cliente.sobrenome,cliente.idade));