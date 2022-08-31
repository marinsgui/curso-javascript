function meuEscopo() {
    const form = document.querySelector('.form');
    
    const pessoas = [];
    let objetoPessoas;

    function recebeEventoForm(evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        const resultado = document.querySelector('.resultado');

        objetoPessoas = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        }

        pessoas.push(objetoPessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`

        console.log(pessoas)
    }

    form.addEventListener('submit', recebeEventoForm)
}
meuEscopo();