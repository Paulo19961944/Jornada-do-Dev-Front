function soma(num1, num2) {
    return num1 + num2;
}

function subtrair(num1, num2) {
    return num1 - num2;
}

function multiplicar(num1, num2) {
    return num1 * num2;
}

function dividir(num1, num2) {
    return num1 / num2;
}

let primeiroParametro = parseFloat(prompt("Insira o primeiro número a ser calculado."));
let segundoParametro = parseFloat(prompt("Insira o segundo número a ser calculado."));

alert(`A soma de ${primeiroParametro} + ${segundoParametro} é: ${soma(primeiroParametro, segundoParametro)}\nA Subtração de 
${primeiroParametro} - ${segundoParametro} é: ${subtrair(primeiroParametro, segundoParametro)}\nA multiplicação de ${primeiroParametro}
 * ${segundoParametro} é: ${multiplicar(primeiroParametro, segundoParametro)}\nA divisão de ${primeiroParametro} / ${segundoParametro}
é: ${dividir(primeiroParametro, segundoParametro)}`);
