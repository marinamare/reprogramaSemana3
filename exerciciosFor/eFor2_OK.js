/* 2) crie uma função que receba um número e devolva uma soma progressiva.
Por exemplo, recebendo o número 5, a função deve retornar 15, ou seja, 
o resultado de 1 + 2 + 3 + 4 + 5.  */ 


function soma(num) {
    let total = 0 
    for (let i = 0; i <= num; i++) {
      // total = total + i
      total += i
    }
    return total
  }

  console.log (soma(5))