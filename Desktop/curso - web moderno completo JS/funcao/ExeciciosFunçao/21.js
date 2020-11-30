function ValorPlanoDeSaude(idade) {
    let valorDoPlano = 100

    if (idade < 10) {
        valorDoPlano += 80
    } else if (idade <= 30) {
        valorDoPlano += 50
    } else if (idade <= 60) {
        valorDoPlano += 95
    } else {
        valorDoPlano += 130
    }

    return console.log(`Para sua faixa etária o valor do plano é R$ ${valorDoPlano} Reais`)
}

ValorPlanoDeSaude(18)
ValorPlanoDeSaude(8)
ValorPlanoDeSaude(75)
ValorPlanoDeSaude(31)


