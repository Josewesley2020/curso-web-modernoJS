
function AumentoSalario(plano,salarioAtual) {
    let aumento 
    switch (plano) {
        case 'A': case 'a':
        return salarioAtual * 1.1 

        case 'B': case 'b':
        return salarioAtual * 1.15 

        case 'C': case 'c':
        return salarioAtual * 1.2 
    }
}

console.log(AumentoSalario('a',1000))
console.log(AumentoSalario('b',1000))
console.log(AumentoSalario('c',1000))
