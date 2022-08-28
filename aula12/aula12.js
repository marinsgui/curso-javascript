let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

let valorA = varA;
let valorB = varB;
let valorC = varC;

varA = valorB;
varB = valorC;
varC = valorA;

console.log(varA, varB, varC);