// **Você pode dar os nomes que quiser para as funções e variáveis, apenas lembre que eles devem ser semânticos :)

// 1) crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão), 
//cada uma delas recebendo 2 números como parâmetros e retornando o resultado

 function soma(numero1, numero2) {
    resultadoSoma = numero1 + numero2
    return resultadoSoma
}


function subtracao (numero1, numero2){
    resultadoSubtracao = numero1 - numero2
    return resultadoSubtracao
}

function divisao(numero1, numero2){
    resultadoDivisao = numero1 / numero2
    return resultadoDivisao
}

function multiplicacao (numero1, numero2){
    resultadoMultiplicacao = numero1 * numero2
    return resultadoMultiplicacao
}

/* console.log("Resultado soma:", soma (9, 8))
console.log ("Resultado subtração:",subtracao(4, 5))
console.log ("Resultado multiplicação:",multiplicacao (7, 6))
console.log ("Resultado divisão",divisao (49, 7)) */ 


// 2) para esse exercício, as funções de multiplicação e divisão não devem aceitar valores iguais a 0 (zero). 
//Adicione esta lógica nas funções.
/*
function multiplicacaoSemZero(num1, num2) {
    if (num1 === 0 || num2 === 0) {return `A multiplicação não foi executada pois 0 vezes qualquer número é igual a 0`
} else {return num1 * num2} 
}

function divisaoSemZero (num1, num2) {
    if (num1 === 0 || num2 === 0) {
        return `Utilize números diferentes de 0`
    } else { return num1 / num2}
}
console.log (`Resultado da multiplicacaoSemZero`)
console.log (multiplicacaoSemZero (7,6))
console.log (`Resultado da divisaoSemZero`)
console.log (divisaoSemZero (60,5)) 
*/
// 3) crie uma função que chame qualquer uma das funções acima e imprima o resultado no formato de String. 
//Exemplo: "O resultado da operação é X" (sendo X o valor do resultado). 

function chamarSoma (){
   soma(7,8)
          console.log(`O resultado da operação é ${resultadoSoma}`);
      }
chamarSoma 


// 4) crie uma função que receba dois números e gere outros dois números aleatórios com valores entre eles. 
//Exemplo: uma função que receba (1, 100) deve gerar dois números aleatórios entre 1 e 100. Em seguida, some estes números e devolva uma string com o resultado no formato: "a soma de [número aleatório] e [número aleatório] é XXX". Você vai ter que pesquisar o método do JS para gerar números aleatórios, `Math.random()` e como utilizá-lo.

// 5) Crie uma função com as seguintes características:
// 1. A função deve receber 3 parâmetros
// 2. Se qualquer um dos três parâmetros não estiverem preenchidos, a função deve retornar a string: "Preencha todos os valores corretamente!"
// 3. O retorno da função deve ser a multiplicação dos 3 parâmetros, somando `2` ao resultado da multiplicação.

// 6) Crie uma função com as seguintes características:
// 1. A função deve receber 3 parâmetros.
// 2. Se somente um argumento for passado, retorne o valor do argumento.
// 3. Se dois parâmetros forem passados, retorne a soma dos dois parâmetros.
// 4. Se todos os parâmetros forem passados, retorne a soma do primeiro com o segundo, e o resultado dividido pelo terceiro.
// 5. Se nenhum argumento for passado, retorne "não recebeu parâmetro"

// 7) crie uma função que receba uma string como parâmetro, e retorne essa mesma string invertida. Por exemplo, recebendo "reprograma", vai retornar "amargorper". Para isso, você vai ter que pesquisar como usar JavaScript para inverter uma string.

// 8) agora que você já sabe reverter strings, crie uma função que receba uma string, verifique se é um palíndromo e retorne true ou false. Exemplo de palíndromo: "arara".

// 9) crie uma função que receba duas strings como parâmetros e retorne a string com a maior quantidade de caracteres. Por exemplo, se passarmos como parâmetro "banana" e "chocolate" a função deve retornar "chocolate"


