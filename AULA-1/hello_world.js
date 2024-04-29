console.log("Hello World!");


// ENTRADA - DIGITAR A TECLA "A"
// PROCESSAMENTO - PROCESSAR AÇÃO
// SAIDA - ABRIR NAVEGADOR
// claudio.filgueira@rj.senac.br
//21 972304432

//VARIAVEIS E CONSTATNES SERVEM PARA ARMAZENAR VALORES (var / const) tbm pode usar let.
var nome = "Vitor";

var gps = 20.0000;
const pi = 3.14;

function SomarDoisValores(A,B){
    console.log(A + B);
};
SomarDoisValores(10, 10);
SomarDoisValores(20, 20);
SomarDoisValores(30, 30);
SomarDoisValores(40, 40);


function calcularIMC(peso, altura){
    let resultado = peso / (altura * altura);
    console.log(resultado.toFixed(2) + "Kg/m^2") //colocar unidade basta concatenar um texto.
};
calcularIMC(80, 1.75);