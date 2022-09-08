let cot, valor, conv

valor = prompt("Qual valor a ser convertido? ");
cot = prompt("Qual a cotação atual do dólar? ");

conv = parseFloat(valor) * parseFloat(cot)

alert("Valor da conversão é: " + conv);