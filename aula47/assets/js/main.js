function relogio() {
    const relogio = document.querySelector('.relogio');
    let segundos = 0;
    let timer;

    function criaHoraDosSegundos(segundos) {
        const data = new Date(segundos * 1000)
        return data.toLocaleTimeString('pt-br', {
            hour12: false,
            timeZone: 'GMT'
        })
    }

    function iniciaRelogio() {
        timer = setInterval(() => {
            segundos++;
            relogio.innerHTML = criaHoraDosSegundos(segundos);
        }, 1000);
    }

    document.addEventListener('click', function (evento) {
        const elemento = evento.target;

        if (elemento.classList.contains('iniciar')) {
            clearInterval(timer);
            iniciaRelogio();
            relogio.classList.remove('pausado');
        }

        if (elemento.classList.contains('pausar')) {
            clearInterval(timer);
            relogio.classList.add('pausado');
        }

        if (elemento.classList.contains('zerar')) {
            clearInterval(timer);
            relogio.innerHTML = `00:00:00`
            segundos = 0;
            relogio.classList.remove('pausado');
        }
    })
}
relogio();

