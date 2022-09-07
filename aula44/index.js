function soma(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return erro
    } else {
        return num1 + num2
    }
}

try {
    console.log(soma(1, '2'))
} catch (erro) {
    console.log('num1 e num2 precisam ser números')
}