import Pessoa, { nome, sobrenome, idade, soma } from "./modulo1";

console.log(new Pessoa('Joãozinho', 'Silva'));


const p1 = new Pessoa(nome, sobrenome);

console.log(nome, sobrenome, idade);
console.log(soma(5, 5));
console.log(p1);