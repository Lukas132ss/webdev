function contaNegativo(vetor) {
    let qtdNegativo = 0
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] < 0) {
            qtdNegativo++
        }
    }
    console.log(`tem ${qtdNegativo} numeros negativos`)
}

const vetor = [-11, -1, -2, -3, 10, 4, 2]
contaNegativo(vetor) 