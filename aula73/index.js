const produto = { nome: 'Produto', preco: 1.8 };

for(let valor of Object.entries(produto)) {
    console.log(valor[0], valor[1]);
}