let dobro = function (a) {
    return 2 * a
}

dobro = a => 2 * a // return implicito
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola1 = _ => 'Olá' // Possui parametro
console.log(ola())
console.log(ola1())