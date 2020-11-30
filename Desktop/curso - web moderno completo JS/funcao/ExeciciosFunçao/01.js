/*01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.*/

function calc (a,b) {
    if (a < b) {
        const c = a  // Caso A seja menor que B, inverta os valores. 
        a = b 
        b = c 
    } 
    const soma = a + b
    const sub  = a - b 
    const mult = a * b
    const div = a / b
    return console.log (`
     Soma = ${soma}
     Subtração = ${sub} 
     Multiplicação = ${mult} 
     Divisão = ${div}`)
}

calc(28,400)