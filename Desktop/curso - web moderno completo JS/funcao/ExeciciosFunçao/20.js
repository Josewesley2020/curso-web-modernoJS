function troco (n) {
    let produto = n
    let cont100 = 0
    let cont50  = 0
    let cont10  = 0
    let cont5   = 0
    let cont1   = 0
    while ( produto != 0) {
        if (produto >= 100) {
            produto -= 100
            cont100++
        } else if (produto >=50) {
            produto -= 50
            cont50++
        } else if (produto >= 10) {
            produto -= 10
            cont10++
        } else if (produto >= 5) {
            produto -= 5
            cont5++
        } else {
            produto -= 1
            cont1++
        }
    }

    return Operação (cont100,cont50,cont10,cont5,cont1)
}

function Operação (cont100,cont50,cont10,cont5,cont1) {
        let resultado = ' '
        if (cont100 > 0)  { 
            resultado += `${cont100} nota(s) de R$ 100. `
        }
        if (cont50 > 0)  { 
            resultado += `${cont50} nota(s) de R$ 50. `
        }
        if (cont10 > 0)  { 
            resultado += `${cont10} nota(s) de R$ 10. `
        }
        if (cont5 > 0)  { 
            resultado += `${cont5} nota(s) de R$ 5. `
        }
        if (cont1 > 0)  { 
            resultado += `${cont1} nota(s) de R$ 1. `
        }
        return resultado
}

console.log(troco(165))