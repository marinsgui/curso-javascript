function aleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') {
            reject('ERRO');
            return;
        }

        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na promise')
        }, tempo);
    });
}

function baixaPagina() {
    const emCache = true;

    if(emCache) {
        return Promise.resolve('Página em cache');
    } else {
        return esperaAi('Baixei a página', 3000);
    }
}

baixaPagina().then(dadosPagina => {
    console.log(dadosPagina);
}).catch(erro => console.log('ERRO:', erro));


// const promises = [esperaAi('Promise 1', aleatorio(1, 5)), esperaAi('Promise 2', aleatorio(1, 5)), esperaAi('Promise 3', aleatorio(1, 5))];

// Promise.race(promises).then(function(valor) {
//     console.log(valor);
// }).catch(function (erro) {
//     console.log(erro);
// });