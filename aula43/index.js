function ehDivisivel (num) {

    if (typeof num !== 'number') return num;
    else if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
    else if (num % 5 === 0) return 'Buzz';
    else if (num % 3 === 0) return 'Fizz';
    else if (num % 3 !== 0 && num % 5 !== 0) return num;
    else return num;
}

for (let i = 0; i <= 100; i++) {
    console.log(ehDivisivel(i))
}
