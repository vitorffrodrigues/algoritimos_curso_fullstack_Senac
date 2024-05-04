// Função de busca binária que recebe uma lista ordenada e um elemento como argumentos
function buscaBinaria(lista, elemento) {
    let inicio = 0; // Índice inicial da parte da lista a ser considerada
    let fim = lista.length - 1; // Índice final da parte da lista a ser considerada

    // Enquanto o índice inicial não ultrapassar o índice final
    while (inicio <= fim) {
        let meio = Math.floor((inicio + fim) / 2); // Calcula o índice do meio da parte da lista

        // Se o elemento do meio for igual ao elemento buscado, retorna o índice do meio
        if (lista[meio] === elemento) {
            return meio;
        } else if (lista[meio] < elemento) {
            // Se o elemento do meio for menor que o elemento buscado, atualiza o índice inicial para a parte da lista à direita do meio
            inicio = meio + 1;
        } else {
            // Se o elemento do meio for maior que o elemento buscado, atualiza o índice final para a parte da lista à esquerda do meio
            fim = meio - 1;
        }
    }

    // Se o elemento não for encontrado na lista, retorna -1
    return -1;
}

// Lista ordenada (necessário para busca binária)
const minhaListaOrdenada = [1, 2, 4, 5, 6, 7, 8, 9, 10];
const elementoBuscado = 5;

// Chama a função de busca binária passando a lista ordenada e o elemento buscado como argumentos
const indice = buscaBinaria(minhaListaOrdenada, elementoBuscado);

// Verifica se o índice retornado é diferente de -1, indicando que o elemento foi encontrado
if (indice !== -1) {
    // Imprime uma mensagem informando que o elemento foi encontrado e em qual índice
    console.log(`O elemento ${elementoBuscado} foi encontrado no índice ${indice} usando busca binária.`);
} else {
    // Imprime uma mensagem informando que o elemento não foi encontrado
    console.log(`O elemento ${elementoBuscado} não foi encontrado.`);
}
