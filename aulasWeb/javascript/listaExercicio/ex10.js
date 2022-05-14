function verificaInteiro(numero) {
    let dividir = numero % 3
    if (dividir == 0){
        return true
    } else {
        return false
    }
}

console.log(verificaInteiro(15))