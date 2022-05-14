function Fatorar(numero){
    if (numero == 0){
        return 1
    }
    else {
        return numero * Fatorar(numero-1)
    }
}

console.log(Fatorar(5))