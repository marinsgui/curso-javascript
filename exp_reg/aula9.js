const { lookahead } = require('./base');

console.log(lookahead);

console.log(lookahead.match(/.+[^in]active$/gim));

console.log(lookahead.match(/.+[^in]inactive$/gim));