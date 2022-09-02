const data = new Date();

function formataData(data) {
    const dia = data.getDate();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();

    return `${dia}/${mes}/${ano}`
}

const dataBrasil = formataData(data);

console.log(dataBrasil);
console.log(data.toString());