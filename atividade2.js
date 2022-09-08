let deposit, rend, total

deposit = prompt("Qual o valor do seu depósito? ")

rend = parseFloat(deposit) * (0.70/100)
alert("Você teve um rendimento de: " + rend)
		
total = parseFloat(rend) + parseFloat(deposit)
alert("\nSeu saldo total é: " + total)