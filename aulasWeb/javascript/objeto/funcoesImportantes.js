const pessoa = {
    nome: 'Lukas',
    idade: 20,
    peso: 75
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '05/07/2001'
})

pessoa.dataNascimento = '01/01/2000'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign
const dest = { a: 1}
const o1 = { b: 2}
const o2 = { c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 123412
console.log(obj)
