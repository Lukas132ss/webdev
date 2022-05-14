let Pontuacao = "10, 20, 20, 8, 25, 3, 0, 30, 1"

function CompararValores(Pontuacao) {
    let pontuacoes = Pontuacao.split(",")
    let quebraRecord = 0
    let piorPartida = 1 
    let maiorPonto = pontuacoes[0]
    let menorPonto = pontuacoes[0]

    for (let i = 1; i < pontuacoes.lenght; i++) {
        if(pontuacoes[i] > maiorPonto){
            maiorPonto = pontuacoes[i]
            quebraRecord++
        }else if (pontuacoes[i] < menorPonto) {
            menorPonto = pontuacoes[i]
            piorPartida = i+1
        }
    } 
    return [quebraRecord, piorPartida]
}

console.log(CompararValores(Pontuacao))