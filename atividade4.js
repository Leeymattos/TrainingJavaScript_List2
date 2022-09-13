const prompt = require('prompt-sync')();

const number = parseInt(prompt('Digite um número qualquer: '))

if (number % 2 != 0) {
    console.log(`O número: ${number} é impar e o seu quadrado é: ${Math.pow(number, 2)}`)
} else {
    console.log(`O número: ${number} é par e sua raiz quadrada é: ${Math.sqrt(number)}`)
}