function somaRecursiva(n) {
    if (n === 1) {
        return 1;
    }
    else {
        return n + somaRecursiva(n - 1);
    }
}
// Exemplo de uso:
var resultado1 = somaRecursiva(5); // Soma de 1 + 2 + 3 + 4 + 5
console.log(resultado1); // Deve imprimir 15
function somaRecursivaDeCauda(n, somaParcial) {
    if (somaParcial === void 0) { somaParcial = 0; }
    if (n === 0) {
        return somaParcial;
    }
    else {
        return somaRecursivaDeCauda(n - 1, somaParcial + n);
    }
}
// Exemplo de uso:
var resultado2 = somaRecursivaDeCauda(5); // Soma de 1 + 2 + 3 + 4 + 5
console.log(resultado2); // Deve imprimir 15
