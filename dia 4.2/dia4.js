let nome
let idade
let temCnh = false
let temCarro =  false   

nome = prompt("digite seu nome")
idade = parseInt(prompt("digite sua idade"))
let opcaoCnh = prompt("você possui habilitação? (sim/nao)")
if (opcaoCnh == "sim"){
    temCnh = true
}

let opcaoCarro = prompt("você tem carro? (sim/nao)")
if (opcaoCarro == "sim"){
    temCarro = true
}

if (idade < 18 || !temCnh ){
    console.log(nome + " você não pode dirigir")
} else if(idade >= 18 && temCnh && !temCarro) {
    console.log(nome + ", você pode dirigir mas não tem carro")
} else {
    console.log(nome + ", você sera motorista")
}