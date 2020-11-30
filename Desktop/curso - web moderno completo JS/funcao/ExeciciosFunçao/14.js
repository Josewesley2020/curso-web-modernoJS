

function Feira (fruta) {
    switch (fruta) {
        case 'maçã': case 'maça': case 'maca':
            console.log('Não vendemos esta fruta aqui')
            break
        case 'kiwi':
            console.log('Estamos com escassez de kiwis')
            break
        case 'melancia':
            console.log('Aqui está, são 3 reais o quilo')
            break
        default:
            console.log('Erro! Tente de novo! ')
    }
}

Feira('melancia')