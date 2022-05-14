function comprarCarro(carro) {
    switch (carro) {
        case 'hatch':
            console.log('Compra efetuada com sucesso!')
            break
        case 'sedans':
        case 'motocicletas':
        case 'caminhonetes':
            console.log('Tem certeza que não prefere outro modelo?')
            break
        default:
            console.log('Não trabalhamos com este tipo de automovel aqui.')
    }
}
comprarCarro('hatch')
comprarCarro('caminhonetes')
comprarCarro('fusca')