function Cardapio (cod,quant) {
   
    switch (cod) {
        case 100:
            return  console.log (`O valor total é = ${3.00 * quant} Reais` )
        case 200:
            return console.log (`O valor total é = ${4.00 * quant} Reais` )
        case 300:
            return console.log (`O valor total é = ${5.50 * quant} Reais` )
        case 400:
            return console.log (`O valor total é = ${7.50 * quant} Reais` )
        case 500:
            return console.log (`O valor total é = ${3.50 * quant} Reais` ) 
        case 600:
            return console.log (`O valor total é = ${2.80 * quant} Reais` ) 
        default:
            return 'Produto não existente!'
    }
}

console.log (Cardapio(100,2))
console.log (Cardapio(200,2))
console.log (Cardapio(300,2))
console.log (Cardapio(400,2))
console.log (Cardapio(500,2))
console.log (Cardapio(600,2))
console.log (Cardapio(700,2))