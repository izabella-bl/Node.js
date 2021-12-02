import ClienteModel from "./model/ClienteModel.js";
import ClienteRepository from "./repository/ClienteRepository.js";


const cliente = new ClienteModel();
cliente.id = 4
cliente.nome = "Pessoa teste";
cliente.sobrenome = "tal coisa";
cliente.idade = 35;



const rp = new ClienteRepository();

 //rp.create(cliente);
 //rp.delete(2)
rp.update(cliente);

 const lista = await rp.findAll();
 console.log(lista);