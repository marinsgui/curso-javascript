const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const altura = 1.80;
let imc = peso / (altura * altura);
let anoNascimento = 2022 - idade

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}Kg, tem ${altura} de altura e seu IMC é de ${imc}.`)
console.log(`${nome} nasceu em ${anoNascimento}`)