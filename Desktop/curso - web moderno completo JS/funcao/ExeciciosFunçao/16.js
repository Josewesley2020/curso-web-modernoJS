/*16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.
*/

const Calc = function (a,b,c) {
    let result

    switch (b) {
        case '*' : 
            result = a*c
        break

        case '+':
            result = a+c
        break
        
        case '-':
            result = a-c
        break

        case '/':
            result = a/c
        break
        default:
            result = 'Operação invalida'
    }
    return  result
}

console.log(Calc(1,'*',2))
console.log(Calc(1,'-',2))
console.log(Calc(1,'+',2))
console.log(Calc(1,'/',2))
console.log(Calc(1,'e',2))