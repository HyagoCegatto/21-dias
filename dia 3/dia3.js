let nome = ""
let idade = 0
let altura = 0
let peso = 0

//-----------------//

nome = prompt("digite seu nome")
idade = parseInt(prompt("digite sua idade"))
altura = parseFloat(prompt("digite sua altura"))
peso = parseInt(prompt("digite seu peso"))

//-----------------//

let ano = 0
anoNasc = 2024 - idade

let imc = 0
imc = peso / (altura * altura )

//------------------//

console.log("ola " + nome + ", voce tem " + idade + " anos, nasceu em " + anoNasc + ", tem " + altura + " de altura, pesa " + peso + " kg e seu imc é " + imc + " kg/m2 ") 

