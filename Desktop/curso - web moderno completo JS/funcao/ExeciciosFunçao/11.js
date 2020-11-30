/*11) As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false.
*/
function Bissexto (n) {
    let resposta 
    if (n % 400 == 0) {
        resposta = true
    } else if (n % 4 == 0 && n % 100 != 0) {
        resposta = true
    } else {
        resposta = false
    }
    return console.log(resposta)
}

Bissexto(100)
Bissexto(400)
Bissexto(300)
Bissexto(144)