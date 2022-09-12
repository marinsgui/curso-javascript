function* geradora1() {
    yield 'Valor 1';
    yield 'Valor 2';
    yield 'Valor 3';
}

function* geradora2() {
    let i = 0;

    while(true) {
        yield i;
        i++
    }
}

const g1 = geradora1();
const g2 = geradora2();

console.log(g1.next().value);
console.log(g2.next().value);