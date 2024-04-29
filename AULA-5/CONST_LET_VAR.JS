// 1 - Originalmente até 2015 todo valor era definido com Var
// 2 - Então com ES6/ES2015 foram criadas o "let" e o "var";
// 3 - const seria para termos valores constantes sem ter um código ruim Ex: PI;
// 4 - let seria o substituto do "var", o motivo é que "var" é muito IMPREVISÍVEL quando estamos codando.
// A seguir vão alguns argumentos que fizeram criar o "let" para substituir o "var".

//Primeiro argumento: É afetado por Hoisting que é um fenômeno que joga as definições de "var" e "funções" para o topo do código no Javascript.


// PRIMEIRO EXEMPLO:

// console.log(gps); // UNDEFINED
// var gps = 5;
// console.log(gps); // 5

// TestandoHoisting(); // Eu posso rodar mesmo não existindo na linha que rodei
// function TestandoHoisting(){
//     console.log("Eu posso rodar mesmo não existindo na linha que rodei");
// }


// SEGUNDO EXEMPLO:

// function exibirOla(){
// 	mensagem = "Olá";

// 	console.log(mensagem);

// 	var mensagem;
// }

// exibirOla();

//Segundo argumento: 
// escopo do const = de bloco
// escopo do let = de bloco
// escopo do var = Global ou de função dependendo do local declarado.
// Seu escopo MUDA dependendo de onde ele está para LOCAL ou GLOBAL:

//SEGUNDO EXEMPLO:
// Transforme var mensagemDentroDoIf em uma constante.
// Execute o código e veja a diferença que o escopo afeta:
// function exibeMensagem() { 
//     const mensagemForaDoIf = 'FORA'; 
//     if(1 === 1) { 
//         let mensagemDentroDoIf = 'DENTRO'; 
//         console.log(mensagemDentroDoIf)// DENTRO;
//     } 
//     console.log(mensagemForaDoIf); // FORA

//     console.log(mensagemDentroDoIf); // DENTRO
// }

// exibeMensagem();

// testandoEscopoDaVariavelLocal();
// console.log(variavelLocal);

//Terceiro: Você pode utilizar var em seus projeto que vai funciona corretamente, mas se você verificar o código de grandes projetos tocados pelos melhores programadores vai ver que eles utilizam let no código todo e praticamente quase nunca usam var.



// 5 -Não é possível remover o "var" do javascript pelo fato que quebraria vários sistemas que utilizam Javascript mais antigo.
//  Então apenas foi criado o "let" que é uma VARIÁVEL que não tem esse comportamento inesperado.
//  Normalmente começamos a usar "var" no javascript para aprender o que é uma variável, pelo fato que fica mais fácil de entender que var = variável.
//  E também entender que Var foi a primeira forma de declarar valores no javascript então é importanto saber que existe.



// var:
// var foi a forma original de declarar variáveis em JavaScript.
// As variáveis declaradas com var têm escopo local dentro de uma função ou escopo global (se declaradas fora de qualquer função).
// Elas podem ser redeclaradas e atualizadas em qualquer lugar no código.
// No entanto, variáveis var são "hoisted" (içadas), o que significa que são elevadas para o topo do seu contexto de execução durante a fase de compilação. Isso pode levar a comportamentos inesperados em algumas situações.
// let:
// let foi introduzido no ECMAScript 6 (também conhecido como ES6) e é uma forma mais moderna de declarar variáveis.
// Variáveis declaradas com let têm escopo de bloco, o que significa que elas só são visíveis dentro do bloco onde foram definidas (por exemplo, dentro de um loop for, if, ou uma função).
// Elas não podem ser redeclaradas no mesmo escopo.
// Além disso, as variáveis let não são hoisted, o que pode evitar alguns comportamentos inesperados associados ao var.
// const:
// const também foi introduzido no ECMAScript 6.
// Ele cria uma referência imutável para um valor. Isso significa que o valor da variável não pode ser reatribuído.
// Assim como let, as variáveis const têm escopo de bloco e não são hoisted.
// No entanto, é importante notar que, para tipos de dados mutáveis como "objetos e arrays", o valor em si pode ser modificado, mas não é possível reatribuir a variável a outro objeto ou array.

let contador = 0;

while (contador <= 10){
    console.log(contador);
    contador++;
}