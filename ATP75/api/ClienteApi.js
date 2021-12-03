import { Router } from "express";
import ClienteModel from './../model/ClienteModel.js'
import ClienteRepository from './../repository/ClienteRepository.js'


const ClienteApi = Router();

const repository = new ClienteRepository;

ClienteApi.get('/', async (req, resp)=>{
    const lista = await repository.findAll();
    resp.send(lista);
});

ClienteApi.post('/', async (req, resp)=>{
    let {nome, sobrenome, idade} = req.body;
    const cliente = new ClienteModel(nome,sobrenome,idade);
    const retorno = await repository.create(cliente);
    resp.send(retorno);
});

ClienteApi.put('/:id', async (req, resp)=>{
    let id = req.params.id;
    let {nome,sobrenome,idade} = req.body;
    const cliente = new ClienteModel(nome,sobrenome,idade, id);
    const retorno = await repository.update(cliente);
    resp.send(retorno);
});

ClienteApi.delete('/:id', async (req, resp)=>{
    const id = req.params.id;
    const retorno = await repository.delete(id);
    resp.send( JSON.stringify(retorno) );
});

export default ClienteApi;