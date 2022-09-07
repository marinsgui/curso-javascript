function soma(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return erro = new Error ('num1 e num2 precisam ser números.')
    } else {
        return num1 + num2
    }
}

try {
    console.log(soma(1, '2'))
} catch {
    console.log(erro)
}