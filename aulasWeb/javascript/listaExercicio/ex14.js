function venderFrunta(fruta){
    switch (fruta) {
        case 'maçã':
            return 'Não vendemos esta fruta aqui'
            break
        case 'kiwi':
            return 'Estamos com escassez de kiwi'
            break
        case 'melancia':
            return 'Aqui está, são 3 reais o quilo'
            break
        default:
            return 'ERRO'
    }
}

console.log(venderFrunta('pera'))