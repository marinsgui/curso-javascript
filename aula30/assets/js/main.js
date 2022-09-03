// const data = new Date();
// let dia = data.getDate();
// let ano = data.getFullYear();
// let hora = data.getHours();
// let minutos = data.getMinutes();
// let diaSemanaTexto;
// let mesTexto;

// function getDiaSemanaTexto (diaSemana) {
//     switch (diaSemana) {
//         case 0 : diaSemanaTexto = 'Domingo'; break
//         case 1 : diaSemanaTexto = 'Segunda'; break
//         case 2 : diaSemanaTexto = 'Terça'; break
//         case 3 : diaSemanaTexto = 'Quarta'; break
//         case 4 : diaSemanaTexto = 'Quinta'; break
//         case 5 : diaSemanaTexto = 'Sexta'; break
//         case 6 : diaSemanaTexto = 'Sábado'; break
//     }
//     return diaSemanaTexto;
// }

// function getMesTexto (mes) {
//     switch (mes) {
//         case 0 : mesTexto = 'Janeiro'; break
//         case 1 : mesTexto = 'Fevereiro'; break
//         case 2 : mesTexto = 'Março'; break
//         case 3 : mesTexto = 'Abril'; break
//         case 4 : mesTexto = 'Maio'; break
//         case 5 : mesTexto = 'Junho'; break
//         case 6 : mesTexto = 'Julho'; break
//         case 7 : mesTexto = 'Agosto'; break
//         case 8 : mesTexto = 'Setembro'; break
//         case 9 : mesTexto = 'Outubro'; break
//         case 10 : mesTexto = 'Novembro'; break
//         case 11 : mesTexto = 'Dezembro'; break
//     }
//     return mesTexto;
// }

// function criaData(data) {
//     let diaSemana = data.getDay();
//     let mes = data.getMonth();
//     let nomeDia = getDiaSemanaTexto(diaSemana);
//     let nomeMes = getMesTexto(mes);

//     return `${nomeDia}, ${dia} de ${nomeMes} de ${ano} ${hora}:${minutos}` 
// }

// h1.innerHTML = `${criaData(data)}`


const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleString('pt-br', {dateStyle: 'full', timeStyle: 'short'});