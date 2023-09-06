import { Cliente } from "./cliente.js";
import { Pedido } from "./pedido.js";
import { Produto } from "./produto.js";

var listaPedidos = [];

//Criando o pedido de Danrlei
var clienteDanrlei = new Cliente("Danrlei", "99999-9999", 301);
var pedidoDanrlei = new Pedido(Date.now, clienteDanrlei);
var tapiocaDanrlei = new Produto("Tapioca", 7.50, 1);
var aguaDanrlei = new Produto("Água", 5.00, 2);
pedidoDanrlei.addProduto(tapiocaDanrlei);
pedidoDanrlei.addProduto(aguaDanrlei);

listaPedidos.push(pedidoDanrlei);

//Criando o pedido de Michael Jackson
var clienteMichael = new Cliente("Michael Jackson", "98888-9999", 301);
var pedidoMichael = new Pedido(Date.now, clienteMichael);
var tapiocaMichael = new Produto("Tapioca de Queijo", 9.50, 1);
var aguaMichael = new Produto("Água com gás", 5.00, 1);
pedidoMichael.addProduto(tapiocaMichael);
pedidoMichael.addProduto(aguaMichael);

listaPedidos.push(pedidoMichael);

//Criando o pedido de Leon
var clienteLeon = new Cliente("Leon", "77777-9999", 201);
var pedidoLeon = new Pedido(Date.now, clienteLeon);
var tapiocaLeon = new Produto("Coxinha", 5.50, 2);
pedidoLeon.addProduto(tapiocaLeon);
pedidoLeon.addProduto(aguaLeon);

listaPedidos.push(pedidoLeon);

console.log(listaPedidos);

console.log(listaPedidos.shift());

console.log(listaPedidos);