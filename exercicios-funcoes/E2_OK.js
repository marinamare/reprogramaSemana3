
 /* 2) para esse exercício, as funções de multiplicação e divisão não devem aceitar valores iguais a 0 (zero). 
 Adicione esta lógica nas funções. */ 
 
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