function Triangulo (a, b, c) {
    if (a == b && b == c) {
        return 'Triangulo Equilátero'
    }else if (a == b || b == c || a == c) {
        return 'Triangulo Isósceles'
    } else {
        return 'Triangulo Escaleno'
    }
}
console.log(Triangulo(1,1,1))