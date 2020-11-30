/*07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”.*/


function Bask (a,b,c) {
    const Delt = b*b - 4*a*c
    if (Delt < 0) {
        console.log ('Delta negativo')
    } else {
        const X1 = - b + Math.sqrt(Delt) / 2*a
        const X2 = - b - Math.sqrt(Delt) / 2*a
        const conjuntoVerdade = [X1,X2]
        console.log (conjuntoVerdade)
    }
}

Bask(1,8,-9)

