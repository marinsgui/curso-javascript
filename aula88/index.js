function aleatorio(min = 0, max = 5) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== 'string') {
            reject('ERRO');
            return;
        }
            resolve(msg.toUpperCase() + ' - Passei na promise');
            return;
        }, tempo);
    });
}

async function executa() {
    const fase1 = await esperaAi('Fase 1', aleatorio());
    console.log(fase1);

    const fase2 = await esperaAi('Fase 2', aleatorio());
    console.log(fase2);

    const fase3 = await esperaAi('Fase 3', aleatorio());
    console.log(fase3);
}
executa();