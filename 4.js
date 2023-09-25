var numero = parseInt(prompt("Digite um número inteiro:"));

function isPrimo(numero) {
  if (numero <= 1) {
    return false;
  }
  for (var i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

if (isPrimo(numero)) {
  console.log(numero + " é um número PRIMO.");
} else {
  console.log(numero + " NÃO é um número primo.");
}
