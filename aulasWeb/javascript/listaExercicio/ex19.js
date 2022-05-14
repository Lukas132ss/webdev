function cardapio(codigo, quantidade){
    switch(codigo){
        case 100:
            return quantidade * 3.00
            break
        case 200:
            return quantidade * 4.00
            break
        case 300:
            return quantidade * 5.50
            break
        case 400:
            return quantidade * 7.50
            break
        case 500:
            return quantidade * 3.50
            break
        case 600:
            return quantidade * 2.80
            break
        default:
            return 'Produto não existe!'
        }
}

console.log(cardapio(100, 1))
console.log(cardapio(200, 1))
console.log(cardapio(300, 1))
console.log(cardapio(400, 1))
console.log(cardapio(500, 1))
console.log(cardapio(600, 1))