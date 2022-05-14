function JuroSimples (capital, taxa, tempo) {
    let juros = capital * taxa * tempo
    return juros + capital
}

function JurosComposto (capital, taxa, tempo) {
    return capital * (1 + taxa) ** tempo
}

console.log(JuroSimples(100, 10/100, 2))
console.log(JurosComposto(100, 10/100, 2).toFixed(2))