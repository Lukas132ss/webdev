function SistemaDeNotas(nota) {
    let notaArredondada = arredondar(nota) 
    if (nota >= 40) {
        return `Aprovado com ${notaArredondada}`
    }else{
        return `Reprovado com ${notaArredondada}`
    }
}

function arredondar(nota) {
    if (nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}

console.log(SistemaDeNotas(20))
console.log(SistemaDeNotas(38))
console.log(SistemaDeNotas(99))