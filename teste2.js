const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function countLetterA(str) {
    let count = 0;
    for (let char of str.toLowerCase()) {
        if (char === 'a') count++;
    }
    return count;
}

rl.question('Informe uma string para verificar a quantidade de letras "a": ', (input) => {
    const stringToCheck = input;
    const count = countLetterA(stringToCheck);

    if (count > 0) {
        console.log(`A letra 'a' aparece ${count} vezes na string.`);
    } else {
        console.log(`A letra 'a' não aparece na string.`);
    }

    rl.close();
});
