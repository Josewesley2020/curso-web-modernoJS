

function notas (n) {
    if (n < 40 ) {
        console.log('Reprovado')
    } else if (n % 5 != 0) {
        const Acresc = 5 - (n%5)
        if (Acresc < 3) {
        n = n + Acresc 
    }
    
    }
    console.log(`Aprovado nota ${n}`)
}

notas(43)
notas(82)
notas(94)