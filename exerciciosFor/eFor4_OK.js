/* 4) crie uma função que receba dois números e exiba no console uma contagem regressiva entre eles, 
contando de dois em dois números. Por exemplo: recebendo o número inicial 20 e o final 0, a função 
deverá imprimir em sequência 20 18 16 14 12 10 8 6 4 2 0. */

const input = require("readline-sync")


function contagemRegressiva() {
    console.log (`===== ESCOLHA DOIS NÚMEROS E VEJA A CONTAGEM REGRESSIVA EM NÚMEROS PARES =====`)
    let numFinal = parseInt (input.question(`Número menor:`))
    let numInicial = parseInt (input.question(`Número maior:`))
    for (let i = numInicial; i >= numFinal; i = i- 2) {
      console.log(i)
    }
  }

contagemRegressiva()