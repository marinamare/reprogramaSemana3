/* 7) crie uma função que receba uma string como parâmetro,
 e retorne essa mesma string invertida. Por exemplo, recebendo 
 "reprograma", vai retornar "amargorper". Para isso, você vai
  ter que pesquisar como usar JavaScript para inverter uma 
  string.
*/

function recebeTresParametros(param1, param2, param3) {
  if (param1 != undefined && param2 === undefined && param3 === undefined) {
    return param1
  } else if (param1 != undefined && param2 != undefined && param3 === undefined) {
    return param1 + param2
  } else if (param1 != undefined && param2 != undefined && param3 != undefined) {
    return (param1 + param2) / param3
  } else {
    return "não recebeu parâmetro"
  }
}

console.log(recebeTresParametros(2, 2, 2)) // 2