var numero = parseInt(prompt("Digite um número inteiro positivo:"));

if (numero <= 0) {
  console.log("Por favor, insira um número inteiro positivo.");
} else {
 
  var soma = 0;

  for (var i = 1; i < numero; i++) {
    soma += i;
  }

  console.log("A soma dos números antecessores a " + numero + " é: " + soma);
}
