function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.')
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        seconds: '2-digit',
        hour12: false
    })
}

try {
    const hora = retornaHora();
    console.log(hora);
} catch(error) {
    console.log('Tratar erro')
} finally {
    console.log('Tenha um bom dia.')
}
