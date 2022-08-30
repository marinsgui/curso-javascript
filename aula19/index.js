/*
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - Valores copiados

Referência (mutáveis) - array, object, function - Passados por referência
*/ 

const a = {
    nome: 'Guilherme',
    sobrenome: 'Marins'
};
const b = a;

b.nome = 'Davi'
console.log(a);
console.log(b);