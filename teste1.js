const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isFibonacci(num) {
    let a = 0, b = 1;
    if (num === a || num === b) return true;
    let next = a + b;
    while (next <= num) {
        if (next === num) return true;
        a = b;
        b = next;
        next = a + b;
    }
    return false;
}

rl.question('Informe um número para verificar se pertence à sequência de Fibonacci: ', (input) => {
    const numberToCheck = parseInt(input, 10);
    
    if (isNaN(numberToCheck)) {
        console.log("Por favor, insira um número válido.");
    } else {
        if (isFibonacci(numberToCheck)) {
            console.log(`${numberToCheck} pertence à sequência de Fibonacci.`);
        } else {
            console.log(`${numberToCheck} não pertence à sequência de Fibonacci.`);
        }
    }

    rl.close();
});
