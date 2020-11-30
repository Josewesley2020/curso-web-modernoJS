/*02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).
*/

const Triangulo = function (a = 0,b = 0,c = 0) {
    let tri = 0
    if (a <= 0 || b <= 0 || c <= 0){
        tri = ('FALTAM PARAMETROS')
    } else {
        if (a == b && a == c) {
        tri = ('Equilátero')
        } else if (a == b || a == c || b == c) {
        tri = ('Isósceles')
        } else {
        tri = 'Escaleno'
        } }
     return console.log(`O triangulo é ${tri}`)
}

Triangulo(10,11,08)