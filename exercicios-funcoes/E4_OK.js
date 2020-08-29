/* 4) crie uma função que receba dois números e gere outros dois números aleatórios com valores entre eles. 
Exemplo: uma função que receba (1, 100) deve gerar dois números aleatórios entre 1 e 100. 
Em seguida, some estes números e devolva uma string com o resultado no formato: 
"a soma de [número aleatório] e [número aleatório] é XXX". 
Você vai ter que pesquisar o método do JS para gerar números aleatórios, 
`Math.random()` e como utilizá-lo. */


function aleatoria (){
    const input = require ("readline-sync")
    console.log (`== Insira dois números e receba dois números aleatórios entre eles ==`)
    
    const nMenor = parseInt (input.question(`Escolha o menor numero:`))
    const nMaior = parseInt (input.question (`Escolha o maior numero:`))
    let num = parseInt ( `${nMaior} + 1`)

    console.log ('== Seu primeiro numero ALEATORIO é: ==')
    console.log (Math.floor(Math.random() * `${num}`))

    console.log ('== Seu segundo numero ALEATORIO é: ==')
    console.log (Math.floor(Math.random() * `${num}`))
}

aleatoria ()
