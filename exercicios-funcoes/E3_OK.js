// 3) crie uma função que chame qualquer uma das funções acima e imprima o resultado no formato de String. 
//Exemplo: "O resultado da operação é X" (sendo X o valor do resultado). 


// funções das operações

function soma (num1,num2){
    return num1 + num2
}
function subtracao (num1, num2){
    return num1 - num2
}
function multiplicacao (num1,num2){
    if (num1 === 0 || num2 === 0) {return `A multiplicação não foi executada pois 0 vezes qualquer número é igual a 0`
} else {return num1 * num2}
}
function divisao (num1, num2){
    if (num1 === 0 || num2 === 0) {
        return `Utilize números diferentes de 0`
    } else { return num1 / num2}
}

// função proposta na questão

function chamarOperacoes (){
const input = require ("readline-sync")
const operacao = input.question (`Que operacao voce deseja realizar?`)
    switch (operacao){
    case 'soma':
        let resultadoSoma = soma (8,9)
        console.log (`O resultado da soma e ${resultadoSoma}`)
        break;
    case 'subtracao':
        let resultadoSubtracao = subtracao (20,10)
        console.log (`O resultado da subtracao e ${resultadoSubtracao}`)
        break;
    case 'multiplicacao':
        let resultadoMultiplicacao = multiplicacao (10,7)
        console.log (`O resultado da multiplicacao e ${resultadoMultiplicacao}`)
    case 'divisao':
        let resultadoDivisao = divisao (49,7)
        console.log (`O resultado da divisao e ${resultadoDivisao}`)
    }
}

chamarOperacoes ()