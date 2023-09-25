var numero = parseInt(prompt("Digite um número:"));

if (isNaN(numero)) {
  console.log("Por favor, insira um número válido.");
} else {
  console.log("Tabuada do " + numero + ":");

  for (var i = 0; i <= 10; i++) {
    var resultado = numero * i;
    console.log(numero + " x " + i + " = " + resultado);
  }
}
