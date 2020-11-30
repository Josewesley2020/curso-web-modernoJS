function criarProduto(nome, preco) {
    if (preco <= 1000) {
        var react = 'Da pra comprar! kkk'
        
    } else {
        var react = 'Muito caro, corre!'
    }

    return {
        nome,
        preco,
        desconto: 0.1,
        react
    }
  
}

console.log(criarProduto('Notebook',2199.49))
console.log(criarProduto('Ipad',1199.49))
console.log(criarProduto('Cueca Usada', 1.50))