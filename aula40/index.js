const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// continue continua para a próxima iteração
// break termina o laço
for (let numero of numeros) {

    if (numero === 2) {
        continue;
    }

    if (numero === 7) {
        break;
    }

    console.log(numero)
}