/* 5) Crie uma função com as seguintes características:
1. A função deve receber 3 parâmetros
2. Se qualquer um dos três parâmetros não estiverem preenchidos, 
a função deve retornar a string: "Preencha todos os valores corretamente!"
3. O retorno da função deve ser a multiplicação dos 3 parâmetros, somando `2`
 ao resultado da multiplicação. */ 
/// exercicio inacabado

function exercicioCinco () {
// biblioteca readline-sync
const input = require (`readline-sync`)

// variáveis _let_ como para guardar os parâmetros
let p1 = parseInt (input.question ('Parametro 1 _lembre-se que o parametro precisar ser um número_'))
let p2 = parseInt (input.question ('Parametro 2 _lembre-se que o parametro precisar ser um número_'))
let p3 = parseInt (input.question ('Parametro 3 _lembre-se que o parametro precisar ser um número_'))

    if (p1 === undefined || !p2 === undefined ||!p3 === undefined) {
        return `preencha os parametros corretamente!`
    } else {
        return (p1 * p2 * p3) + 2
    }
}
console.log?(exercicioCinco())

