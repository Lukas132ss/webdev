function verifica(palavra1, palavra2) {
    let estaContido = true;
    for (let i = 0; i < palavra1.length; i++) {
        let palavrinha1 = palavra1.charAt(i).toLowerCase()
        for(let j = 0; j < palavra2.length; j++){
            let palavrinha2 = palavra2.charAt(j).toLowerCase()
            if(palavrinha1 == palavrinha2) {
                estaContido = true
                break
            } else {
                estaContido = false
            }
        }
        if(!estaContido) {
            return estaContido
        }
    }
    return estaContido
}

console.log(verifica('abc', 'cba'))