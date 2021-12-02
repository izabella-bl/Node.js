import { Produto } from "./Produto.js";
import { Categoria } from "./Categoria.js";

const produto = new Produto();
produto.id = 1;
produto.nome = "Tv";
produto.preco = 3839.82;

const categoria = new Categoria();
categoria.nomeCat ="Eletro";
categoria.descricao = "eletro";

console.log(produto);
console.log(categoria);
