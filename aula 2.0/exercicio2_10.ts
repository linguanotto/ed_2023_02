function somaRecursiva(n: number): number {
  if (n === 1) {
    return 1;
  } else {
    return n + somaRecursiva(n - 1);
  }
}

// Exemplo de uso:
const resultado1: number = somaRecursiva(5); // Soma de 1 + 2 + 3 + 4 + 5
console.log(resultado1); // Deve imprimir 15

function somaRecursivaDeCauda(n: number, somaParcial: number = 0): number {
  if (n === 0) {
    return somaParcial;
  } else {
    return somaRecursivaDeCauda(n - 1, somaParcial + n);
  }
}

// Exemplo de uso:
const resultado2: number = somaRecursivaDeCauda(5); // Soma de 1 + 2 + 3 + 4 + 5
console.log(resultado2); // Deve imprimir 15