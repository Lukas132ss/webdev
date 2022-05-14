function Calculadora(numA, operador, numB) {
    switch (operador) {
        case '+':
            console.log(numA + numB)
            break
        case '-':
            console.log(numA - numB)
            break
        case '/':
            console.log(numA / numB)
            break
        case '*':
            console.log(numA * numB)
            break
        default:
            console.log('Operação inválida')
    }
}

Calculadora(1,'+', 2)
Calculadora(2,'*', 2)
Calculadora(10,'/', 2)
Calculadora(4,'-', 2)
Calculadora(4,'da', 2)