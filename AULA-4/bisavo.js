// 1 - Vamos criar um algoritmo que vai nos ajudar a entender um pouco melhor aninhamento dentro da programação.
// 2 - Crie uma função chamada "bisavo" e dentro da sua primeira linha escreva um: console.log("Eu sou o Bisavô")
// 3 - execute a função "bisavo", crie uma linha que rode a função "bisavo" e depois execute o arquivo para ver o resultado.
//  Mensagem que vai aparecer no terminal: Eu sou o Bisavô.
// 4 - Agora vai começar a ficar interessante, dentro da função "bisavo" crie uma função nova chamada "avo"
// 5 - lá dentro da função "avo" adicione uma linha de saída que será: console.log("Eu sou o Avô").
// 6 - Execute a função "avo" dentro do escopo da função "bisavo".
// 7 - Abaixo do console.log que foi criado anteriormente ainda dentro da função "bisavo" você vai criar uma nova função chamada "avo"
// 8 - Dentro da função "Bisavo" abaixo da função "avo" criada, vai rodar "avo".
// 9 - Agora você vai rodar novamente o arquivo para ver o resultado.
// 10 - Continue até chegar em neto, e após rode o arquivo para ver o resultado, verifique se está correto.
// Obs: A função INTERNA consegue ver as EXTERNAS, só que as EXTERNAS não conseguem ver as que são INTERNAS, se você tenta executar uma função seguindo essa lógica vai conseguir já o contrário não, esse é o segredo do aninhamento

function bisavo() {
    function avo() {
        function pai(){
            function filho(){
                function neto(){
                    console.log("Eu sou o neto");
                }
                console.log("Eu sou o filho");
                neto()
            }
            console.log("Eu sou o pai");
            filho()
        }
        console.log("Eu sou o avô");
        pai()
    }
    console.log("Eu sou o bisavô");
    avo();  
    
}

bisavo();