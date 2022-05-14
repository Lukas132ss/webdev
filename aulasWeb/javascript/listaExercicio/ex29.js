function numerosVetor(vetor) {
    let qtdNunEntre = 0
    let qtdNunFora = 0
    for (i = 0;i < vetor.length;i++) {
        if (vetor[i] >= 10 && vetor[i] <=20) {
            qtdNunEntre++
        }else{
            qtdNunFora++
        }
    }
    console.log(`tem ${qtdNunEntre} numeros entre e ${qtdNunFora} fora`)
}

vector = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
numerosVetor(vector)