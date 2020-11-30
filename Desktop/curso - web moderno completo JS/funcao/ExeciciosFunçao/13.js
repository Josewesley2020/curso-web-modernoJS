/*13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
*/

function DiaDaSemana (dia) {
    switch (dia)  {
        case 01: case 07:
            console.log ('Fim de semana!')
            break
        case 02: case 03: case 04: case 05: case 06:
            console.log('Dia útil')
            break
        default: 
        console.log('Dia inválido')
    }
}

DiaDaSemana(9)
DiaDaSemana(7)
DiaDaSemana(4)