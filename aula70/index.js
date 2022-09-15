function Pessoa(nome, sobrenome) {
    this.nome = nome,
    this.sobrenome = sobrenome;

    Object.freeze(this)
}

const p1 = new Pessoa('Guilherme', 'Marins');
const p2 = new Pessoa('Lais', 'Marins');

console.log(p1);
console.log(p2);