var numero = parseInt(prompt("Digite um número inteiro positivo:"));

if (numero < 0) {
  console.log("Por favor, insira um número inteiro positivo.");
} else {
  var fatorial = 1;

  for (var i = 1; i <= numero; i++) {
    fatorial *= i;
  }
  console.log("O fatorial de " + numero + " é: " + fatorial);
}
