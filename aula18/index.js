function criaPessoa(nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade
    }
}

const pessoa1 = criaPessoa('Guilherme', 'Marins', 25);
const pessoa2 = criaPessoa('João', 'Silva', 45);
const pessoa3 = criaPessoa('Gilmar', 'Oliveira', 34);

console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome)