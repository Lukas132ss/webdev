function valorPago(idade) {
    if (idade <= 10) {
        return 'Paga R$180'
    }else if (idade >= 10 && idade <= 30) {
        return 'Paga R$150'
    }else if (idade > 30 && idade <= 60) {
        return 'Paga R$195'
    }else {
        return 'Paga R$230'
    }   
}