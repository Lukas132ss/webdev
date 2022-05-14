function calcularNotas(codAlunos, n1, n2, n3) {
    let notas = []
    notas.push(n1)
    notas.push(n2)
    notas.push(n3)
    notas.sort((a, b) => a < b ? 1 : -1)

    let mediaFinal = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3)/10
    console.log(`Código do Aluno: ${codAlunos}. Notas: ${n1}, ${n2}, ${n3}. ${mediaFinal < 5 ? 'Reprovado.' : 'Aprovado.'}`)
}

calcularNotas(123, 2.8, 6, 3.5)