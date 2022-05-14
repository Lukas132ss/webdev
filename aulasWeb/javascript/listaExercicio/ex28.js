function paresImpares(vetorNumeros) {
    let qtdPar = 0
    let qtdImpar = 0
    for (let i = 0; i < vetorNumeros.lenght; i++) {
        if (vetorNumeros[i] % 2 == 0) {
            qtdPar++
        }else {
            qtdImpar++
        }
    }
    console.log(qtdPar)
    console.log(qtdImpar)
}
