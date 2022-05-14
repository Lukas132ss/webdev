const produto = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4499, fragil: true},
    {nome: 'Copo de Vidro', preco: 20, fragil: true},
    {nome: 'Copo de Plástico', preco: 10, fragil: false}
]

console.log(produto.filter(function(p){
    return p.preco > 2300
}))

const eCaro = e => e.preco >= 500
const eFragil = f => f.fragil
console.log(produto.filter(eCaro).filter(eFragil))