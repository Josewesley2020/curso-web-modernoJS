

function ComprarAlto(alto) {
    switch (alto) {
        case 'hatch' :
            return 'Compra efetuada com sucesso'
        break 
        case 'sedan': case 'motocicleta': case 'caminhonete':
            return 'Tem certeza que não prefere este modelo?'
        break
        default:
           return 'Não trabalhamos com este tipo de automóvel aqui'
    }
}

console.log(ComprarAlto('hatch'))
console.log(ComprarAlto('sedan'))
console.log(ComprarAlto('motocicleta'))
console.log(ComprarAlto('caminhonete'))
console.log(ComprarAlto('fusca'))
