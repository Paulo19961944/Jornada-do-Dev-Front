let nota1 = parseFloat(prompt("Digite a Primeira Nota"));
let nota2 = parseFloat(prompt("Digite a Segunda Nota"));
let media = (nota1 + nota2) / 2;

if(media >=7){
    alert("Você está aprovado e sua nota é: " + media);
} else if(media >= 5 && media < 7){
    alert("Você está de recuperação e sua nota é: " + media)
} else{
    alert("Você está reprovado e sua nota é: "  + media)
}