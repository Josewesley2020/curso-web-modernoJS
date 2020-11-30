/*06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/


function JurosSimples (a,b,c) {
    let JS = 0
    JS = a * b * c  
    let Mont = JS + a

    return console.log (`
    O montante calculado a juros simples com o Capital inicial
    de ${a} a Taxa de Juros de ${b} e o tempo ${c} resultou em ${Mont}`)
}

JurosSimples(100,0.80,10)

