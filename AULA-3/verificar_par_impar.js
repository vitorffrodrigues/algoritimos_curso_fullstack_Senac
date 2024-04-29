// Escreva um algoritmo que verifique se um número é par.
// 1 - Você deve definir uma constante chamada valor;
// 2 - Será necessária um único if e também um único else;
// 3 - O operador % que é o operador de RESTO será necessário.
// 4 - O operador === que é o operador IDÊNTICO será necessário.
// 5 - Caso a constante valor seja par imprimir a saída com console.log("O valor é par");
// 6 - Caso contrário imprimir a saída com console.log("O valor é impar");
// 7 - No final executar com node 'nome_do_arquivo.js' para vermos a execução no terminal

const valor = 1

const verificaParOuImpar = (valor % 2);

if (verificaParOuImpar === 0){
    console.log("O valor é par");

}
else {
    console.log("O valor é impar");

}









// 1 - Crie um algoritmo que exiba apenas a porcentagem do imposto de renda dependendo do valor.
// 2 - Defina uma variável chamada salário Ex: var salário
// 3 - Atribua um valor de salário a variavel salario Ex: 1500.00
// 4 - Devemos respeitar a seguintes regras:
// Até 2259,20 -> Isento não paga imposto de renda portanto é ZERO
// De 2259,21 até 2.826,65 -> 7,5%
// De 2.826,66 até 3.751,05 -> 15%
// De 3.751,06 até 4.664,68 -> 22,5%
// Acima de 4.664,68 -> 27,5

var salario = 1500.00;

if(salario <= 2259.20){
    console.log("0%");
}
else if(salario >= 2259.21 && salario < 2826.65){
    console.log("7,5%");
}
else if(salario >= 3751.06 && salario < 4664.68){
    console.log("15%");
}
else{
    console.log("27,5%");
}