function aleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject(false);

        setTimeout(() => {
            resolve(msg)
        }, tempo);
    });
}

esperaAi('Conexão com o BD', aleatorio(1, 3)).then(resposta => {
    console.log(resposta);
    return esperaAi('Buscando dados na BASE', aleatorio(1, 3));
}).then(resposta => {
    console.log(resposta);
    return esperaAi(1111111, aleatorio(1, 3));
}).then(resposta => {
    console.log(resposta);
}).then(() => {
    console.log('Exibe dados na tela');
}).catch(erro => {
    console.log('ERRO:', erro);
});

console.log('Isso será exibido antes de tudo.')