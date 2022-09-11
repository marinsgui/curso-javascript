(function(idade, peso, altura) {

    const sobrenome = 'Marins'
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Guilherme'))
    }

    falaNome();
    console.log(idade, peso, altura)
})(25, 68, 1.78);