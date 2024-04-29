// 1 - Verificar A, B e C e dizer qual dos três é o menor valor.
// 2 - Criar uma constante A com o valor 1: Ex: const A = 1;
// 2 - Criar uma constante B com o valor 2: Ex: const B = 2;
// 3 - Criar uma constante C com o valor 3: Ex: const C = 3;
// 4 - Para mapear as três únicas possíveis possibilidades vamos precisar de:
    // um if
    // um else if
    // um else
// 5 - Vamos utilizar os operadores de menor "<" e também o operador AND "&&"
// 6 - Vamos utilizar os seguintes saídas para cada uma das situações:
    // console.log("A é o menor");
    // console.log("B é o menor");
    // console.log("C é o menor");
// 7 - vamos executar o código com node "nome_do_arquivo.js"

const A = 1;
const B = 2;
const C = 3;

if (A < B && A < C) {
    console.log("A é o menor número")
    
} 
else if(B < A && B < C){ 
    console.log("B é o menor número")
}
else{
    console.log("C é o menor número")
}