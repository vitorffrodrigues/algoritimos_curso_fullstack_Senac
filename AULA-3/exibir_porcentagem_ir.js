// 1 - Crie um algoritmo que exiba apenas a porcentagem do imposto de renda dependendo do valor.
// 2 - Defina uma variável chamada salário Ex: var salário
// 3 - Atribua um valor de salário a variavel salario Ex: 1500.00
// 4 - Devemos respeitar a seguintes regras:
// Até 2259,20 -> Isento não paga imposto de renda portanto é ZERO
// De 2259,21 até 2.826,65 -> 7,5%
// De 2.826,66 até 3.751,05 -> 15%
// De 3.751,06 até 4.664,68 -> 22,5%
// Acima de 4.664,68 -> 27,5

var salario = 45000.00;

if (salario <= 2259.20) {
    console.log("0");
}

else if (salario >= 2259.21 && salario <= 2826.65) {
    console.log("7,5%");

}

else if (salario >= 2826.66 && salario <= 3751.05) {
    console.log("15%");
    
}

else if (salario >= 3751.06 && salario <= 4664.68) {
    console.log("22.5%")
    
}
 
else{
    console.log("27,5%")
}