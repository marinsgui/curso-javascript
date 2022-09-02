const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsuario = 'Verde';
const corPadrao = corUsuario || 'Preto';

console.log(nivelUsuario, corPadrao);