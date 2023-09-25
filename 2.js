var numero = parseInt(prompt("Digite um número inteiro positivo:"));

if (numero <= 0) {
  console.log("Por favor, insira um número inteiro positivo.");
} else {
  console.log("Contagem regressiva de " + numero + " até 0:");

  for (var i = numero; i >= 0; i--) {
    console.log(i);
  }
}
