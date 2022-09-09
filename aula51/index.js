function criaMultiplicacao(multiplicador) {
    return function(num) {
        return num * multiplicador
    }
}

const duplicar = criaMultiplicacao(2)
const triplicar = criaMultiplicacao(3)
const quadriplicar = criaMultiplicacao(4)

console.log(duplicar(5))
console.log(triplicar(5))
console.log(quadriplicar(5))