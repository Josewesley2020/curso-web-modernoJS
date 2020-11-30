/*04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.
*/

function Divisão (a,b) {
    if (a < b ) {
        const c = a 
        a = b 
        b = c 
    }
    const div = a/b 
    const res = a % b
    return console.log (`Divisão entre ${a} e ${b} = ${Math.trunc(div)}, sobra ${res}`)
}

Divisão(5,2)