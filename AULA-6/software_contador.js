// 1 - Fulano precisa de um software que ao passar uma entrada, ele imprime os valores de 0 até valor X que ele passar, ele quer automatizar isso para otimizar seu tempo e ser mais produtivo.
// 2 - Crie uma função chamada imprimirValoresSequencialmente(){}
// 3 - Essa função vai ter um parâmetro chamado valorFimDoLoop.
// 4 - Vamos criar o Loop dentro da função que inicializa um "contador".
// 5 - Temos que fazer com que o loop apenas rode enquanto seja <= o valorFimDoLoop.
// 6 - Ele deve imprimir o contador toda vez que fizer uma "iteração".
// 7 - Vamos criar um prompt que fará o usuário inserir um valor.
// 8 - Iremos utilizar a forma nativa do nodejs de prompt:
// 9 - Temos um recursos chamado "Arrow Function" no código.


const readline = require("readline"); //chama função realine "ler dados"

const rl = readline.createInterface({
   input: process.stdin, //informa entrada de daos
   output: process.stdout, //informando saida de dados
 });

rl.question("Qual é o valor que será percorrido:", (valorFinal) => { //definir a pergunta para entrada de dados
    for(i = 0; i <= valorFinal; i++){
        console.log(i);
    }
    rl.close();
}); 
