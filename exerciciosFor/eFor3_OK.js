/* 3) crie um programa que pergunta seu nome. Depois que digitar o nome,
 o programa deverá responder 'Olá [nome]'.
Enquanto digitar qualquer palavra, 
print o que foi digitado mas avise que, para sair, é só dizer 'Tchau'.
O programa vai dizer 'Tchau [nome]' e finalizar.
*/ 
const input = require ("readline-sync")

function imprimeComandos() {
    let nome = (input.question ("== Qual o seu nome? =="))
    console.log (`Olá, ${nome}`)
    let texto = ''
    do {
        texto = input.question ('== Digite algo OU "Tchau" para sair ==')
        console.log (`Você digitou: ${texto}`)
    
    } while (texto != "Tchau") 
    
    console.log (`Tchau, ${nome}`)
}

imprimeComandos()