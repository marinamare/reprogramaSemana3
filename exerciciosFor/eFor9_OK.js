/* 9) crie uma função que receba um número qualquer devolva 
o seguinte padrão como resultado (inclusive com os espaços). 
Por exemplo, caso receba o número 5 como parâmetro:
// *
// **
// ***
// ****
// *****
// ******

*/ 

function escadinha(num) {
    let estrela = ''
    for (let i = 0; i <= num; i++) {
      estrela += '*'
      console.log(estrela)
    }
  }
  
  escadinha(10)
  