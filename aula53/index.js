function retornaFuncao(nome) {
    return function() {
        return nome;
    }
}

const funcao = retornaFuncao('Guilherme');
const funcao2 = retornaFuncao('Marins');
console.log(funcao)
console.log(funcao2)
console.log(funcao(), funcao2());