/* 7) crie uma função que receba um número positivo 
inteiro, itere de 1 ao número e some todos os números
 múltiplos de 3 OU 5. */

 function somaTresOuCinco(num) { 
    let soma = 0          
                          //15
    for (let i = 0; i <= num; i++){
      if (i % 3 === 0 || i % 5 === 0) {
        soma += i
      }
    }
    return soma
  }
  
  console.log(somaTresOuCinco(15))