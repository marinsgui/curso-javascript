const pessoa = {
    nome: 'Guilherme',
    sobrenome: 'Marins',
    idade: 25,
    endereco: {
        rua: 'Av Brasil',
        numero: 100
    }
};

const {nome, sobrenome, ...resto} = pessoa;
console.log(nome, sobrenome, resto);