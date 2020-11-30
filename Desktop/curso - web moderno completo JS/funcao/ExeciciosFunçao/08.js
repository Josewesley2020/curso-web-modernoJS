const ListaPontuacao = [10,20, 20, 08, 25, 3, 0, 30, 1]

function Desempenho () {
    var maior = 0
    var menor = 0
    var Record = -1
    var RecordPior = 0

for (let i in ListaPontuacao) {
    menor = ListaPontuacao[i] 

        if (ListaPontuacao[i] > maior) {
            maior = ListaPontuacao[i]
            Record = Record + 1
        }  
    }

for ( let i in ListaPontuacao) {
        if ( ListaPontuacao[i] < menor) {
            menor = ListaPontuacao[i] 
            RecordPior = parseInt (i) + parseInt (1)
        }
    }
return console.log (`
Maior Resultado ${maior}
Menor Resultado ${menor}
Bateu o record ${Record} vezes
Número do pior Jogo ${RecordPior}`)
}

Desempenho()
