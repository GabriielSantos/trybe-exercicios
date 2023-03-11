let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media = 0;
let maior = 0;
let menor = 0;
let contimpar = 0;
let impares = [];

for (let index = 0; index < numbers.length; index += 1){

    soma = soma + numbers[index];

    if (numbers[index] > maior){
        maior = numbers[index];
        menor = numbers[index];
    } 
    
    if (numbers[index] < menor) {
        menor = numbers[index];
    }

    if (numbers[index] % 2 !== 0) {
        contimpar = contimpar + 1;
        impares.push(numbers[index]);
    }
}

media = soma / numbers.length;

if (media > 20) {
    console.log('Valor da média maior que 20');
} else {
    console.log('Valor menor ou igual a 20');
}

console.log(soma + '/' + media + '/' + maior + '/' + menor + '/' + contimpar + '/' + impares);

