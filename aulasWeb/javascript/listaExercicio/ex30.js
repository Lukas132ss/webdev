function maiorMenor(vetor) {
    let maiorNum
    let menorNum
    for(let i = 0; i < vetor.length; i++) {
        if (maiorNum === undefined && menorNum === undefined) {
            maiorNum = vetor[i]
            menorNum = vetor[i]
        }else {
            if (vetor[i] > maiorNum) {
                maiorNum = vetor[i]
            }if(vetor[i] < menorNum){
                menorNum = vetor[i]
            }
        } 
    }
    console.log(menorNum, maiorNum)
}

vetor =  [10, 5, 7, 3, 1, 3, 11, 20, 6, 9]
maiorMenor(vetor)