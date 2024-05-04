function buscaElemento(lista, elemento) { // Definição da função buscaElemento que recebe uma lista e um elemento como argumentos
    for(let i = 0; i < lista.length; i++){ //Loop for para iterar sobre cada elemento da lista
        if (lista[i] === elemento) {// Verifica se o elemento atual é igual ao elemento buscado
            return i; // Retorna o índice do elemento encontrado
        }
    }
   return -1; //Retorna -1 se o elemento não for encontrado na lista
}

const minhalista = [1,2,4,5,6,7,8,9,10]; // Declaração da lista e do elemento que será buscado
const elementoBuscado = 11; //Elemento para ser buscado
const indice = buscaElemento (minhalista, elementoBuscado); // Chama a função buscaElemento passando a lista e o elemento buscado como argumentos

if(indice !== -1){ // Verifica se o índice retornado é diferente de -1, indicando que o elemento foi encontrado
    console.log(`O elemento ${elementoBuscado} foi encontrado no indice ${indice}`);
    }
    else{
        console.log(`O elemento ${elementoBuscado} não foi encontrado.`);
    }
