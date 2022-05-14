function Arredonda(num) {
    return `R$${num.toFixed(2).replace('.', ',')}`
}

console.log(Arredonda(0.30000000000000004)) 