/*23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.
*/

function CalcularNota (N1,N2,N3,Cod) {
    let media = 0
    let maior = 0
    if (Cod > 0) {
        if (N1 > N2 && N1 > N3) {
            media = ((N1 * 4) + (N2 * 3) + (N3 * 3)) / 10

        } else if (N2 > N3) {
            media = ((N2 * 4) + (N1 * 3) + (N3 * 3)) / 10

        }  else {
            media = ((N3 * 4 ) + (N2 * 3) + (N1 * 3)) / 10
        }
    } else {
        return console.log('Codigo invalido')
    }

    if (media >= 5) {
        return console.log (`Sua nota é ${media}, parabéns voce foi APROVADO!`)
    } else {
        return console.log(`Sua nota é ${media}, Você foi REPROVADO! Estude Mais! `)
    }
    
}

CalcularNota(5,6,02,8)



