function mostraHora() {
    let data = new Date();
    return data.toLocaleTimeString('pt-br', {hour12: false})
}

const timer = setInterval(function(){
    console.log(mostraHora())
}, 1000);

setTimeout(() => {
    clearInterval(timer)
}, 5000);

setTimeout(() => {
    console.log('Fim da contagem.')
}, 8000);