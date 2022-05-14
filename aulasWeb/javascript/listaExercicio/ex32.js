function mediaVetor(vetor) {
    let nums = 0
    for (let i = 0; i < vetor.length; i++){
        nums += vetor[i]
    }
    return nums / vetor.length
}

vetor = [4,5,6]
console.log(mediaVetor(vetor))