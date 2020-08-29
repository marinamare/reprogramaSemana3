/* Crie uma função com as seguintes características:
1. A função deve receber 3 parâmetros.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois parâmetros forem passados, retorne a soma dos dois parâmetros.
4. Se todos os parâmetros forem passados, retorne a soma do primeiro com o segundo, e o resultado dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne "não recebeu parâmetro" */ 

function recebeTresParametros (p1, p2, p3){
   if (p1 != undefined && p2 === undefined && p3 === undefined){
       return p1
   }  else if (p1 != undefined && p2 != undefined && p3 === undefined){
       return p1 + p2 
   }  else if (p1 != undefined && p2 != undefined && p3 != undefined){
       return (p1 + p2)/p3
   } 
}

console.log (recebeTresParametros(7,14,3))