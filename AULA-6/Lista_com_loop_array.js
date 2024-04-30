// 1 - Utilizando ForLoop e array juntos, faça uma lista com 5 nomes, e faça o forLoop percorrer por ela exibindo todos os nomes um por um.
// Será necessário um método de array chamado "length".

const listaNome = ["Vitor", "Marcela", "Carlota", "Marcos", "Tamiris"]
for (let contador = 0; contador < listaNome.length; contador++){
    console.log(contador + 1 + ":" + listaNome[contador]); //contador + 1 para melhorar a visuaçização para o usuário.
}

 
       