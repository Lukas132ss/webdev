function aumentoSalario(planos, salario) {
    switch (planos) {
        case 'A': 
            console.log((salario * 0.1)+ salario)
            break
        case 'B':
            console.log((salario * 0.15)+ salario)
            break
        case 'C':
            console.log((salario * 0.2)+ salario)
            break
        default:
            console.log('Plano invalido')
    }
}

aumentoSalario('A', 1000)
aumentoSalario('B', 1100)
aumentoSalario('C', 1500)
aumentoSalario('D')