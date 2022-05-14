Array.prototype.filter2 = function(callback) {
    const newArray = []
    for (i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}


const produto = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4499, fragil: true},
    {nome: 'Copo de Vidro', preco: 20, fragil: true},
    {nome: 'Copo de Plástico', preco: 10, fragil: false}
]

const eCaro = e => e.preco >= 500
const eFragil = f => f.fragil
console.log(produto.filter2(eCaro).filter2(eFragil))