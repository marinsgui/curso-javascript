// Função construtora -> objetos
// Função fábrica -> objetos
function Pessoa(nome, sobrenome) {
    const ID = 123456;
    const metodoInterno = function() {

    }

    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': Sou um método')
    };
}

const p1 = new Pessoa('Guilherme', 'Marins');
const p2 = new Pessoa('Maria', 'Silva');
p1.metodo();