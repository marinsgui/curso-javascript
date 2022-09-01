const inputPeso = document.querySelector('#input-peso');
const inputAltura = document.querySelector('#input-altura');
const botaoCalcular = document.querySelector('.button');
const resultado = document.querySelector('#resultado');
botaoCalcular.addEventListener('click', calcular);

resultado.innerHTML = ''

function isNumeric(value) {
    return /^\d+$/.test(value);
}

function calcular() {
    Number(inputPeso.value);
    Number(inputAltura.value);
    let calculo;
    
    calculo = inputPeso.value / (inputAltura.value * inputAltura.value);

    if (calculo < 18.5) {
        resultado.innerHTML = `<p>O seu IMC é: ${calculo.toFixed(2)} (Abaixo do peso)</p>`
    } else if (calculo >= 18.5 && calculo <= 24.9) {
        resultado.innerHTML = `<p>O seu IMC é: ${calculo.toFixed(2)} (Peso normal)</p>`
    } else if (calculo >= 25 && calculo <= 29.9) {
        resultado.innerHTML = `<p>O seu IMC é: ${calculo.toFixed(2)} (Sobrepeso)</p>`
    } else if (calculo >= 30 && calculo <= 34.9) {
        resultado.innerHTML = `<p>O seu IMC é: ${calculo.toFixed(2)} (Obesidade grau 1)</p>`
    } else if (calculo >= 35 && calculo <= 39.9) {
        resultado.innerHTML = `<p>O seu IMC é: ${calculo.toFixed(2)} (Obesidade grau 2)</p>`
    } else if (calculo > 40) {
        resultado.innerHTML = `<p>O seu IMC é: ${calculo.toFixed(2)} (Obesidade grau 3)</p>`
    } else if (!isNumeric(inputPeso.value)) {
        resultado.innerHTML = `<p class="erro">Peso inválido!</p>`
    } else if (!isNumeric(inputAltura.value)) {
        resultado.innerHTML = `<p class="erro">Altura inválida!</p>`
    }
}