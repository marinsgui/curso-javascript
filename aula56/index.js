function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,

        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala(assunto) {
            return `${this.nome} está ${assunto}`
        },

        altura,
        peso,

        get imc() {
            const indice = this.peso / this.altura ** 2
            return indice.toFixed(2)
        }
    };
};

const p1 = criaPessoa('Guilherme', 'Marins', 1.78, 68);
const p2 = criaPessoa('João', 'Silva', 1.85, 88);
const p3 = criaPessoa('Maria', 'Santos', 1.68, 56);

console.log(p1.imc)
console.log(p2.imc)
console.log(p3.imc)