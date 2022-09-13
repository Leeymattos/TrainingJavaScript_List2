const prompt = require('prompt-sync')();

const number1 = parseInt(prompt('Digite o valor do primeiro número: '));

const number2 = parseInt(prompt('Digite o valor do segundo número: '));

const number3 = parseInt(prompt('Digite o valor do terceiro número: '));

if (number1 >= number2 && number1 >= number3) {
    console.log(`O maior número é: ${number1}`);

} else if (number2 >= number3) {
    console.log(`O maior número é: ${number2}`);

} else {
    console.log(`O maior número é: ${number3}`);

}
