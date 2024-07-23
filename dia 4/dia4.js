const fome = prompt("Você está com fome? (sim/nao))")
const dinheiro = prompt("Você tem dinheiro? (sim/nao)")
const restaurante = prompt("O restaurante esta aberto? (sim/nao)")

if (fome === "nao" || dinheiro == "nao"){
    console.log("Hoje a janta sera em casa");
} 
else if (dinheiro === "sim" && restaurante == "sim"){
    console.log("Hoje o jantar vai sera no restaurante");
} else {
    console.log("peça delivery");
}