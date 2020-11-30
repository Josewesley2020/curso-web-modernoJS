function Pessoa (nome) {
    this.nome = nome

    this.falar = function () {
    console.log(`Meu nome é ${this.nome}`)
    }
    
}

const a = new Pessoa('Wesley')
a.falar()