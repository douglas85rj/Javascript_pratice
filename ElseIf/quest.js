var piloto = prompt ("Qual o nome do pilot ?")
var velocidade = 0
var velocidade = prompt("Qual a velocidade o piloto deseja acelerar a nave ?")
var confirmaVelocidade = confirm("Nave alcançando a velocidade :" + velocidade + "Km/s")

if (velocidade <= 0) {
    console.log("A nave esta parada. Considere partir e aumentar a velocidade")
} else if (velocidade < 40) {
console.log("Você esta devagar, podemos aumentar mais")
} else if (velocidade >= 40 && velocidade < 80) {
    console.log("Parece uma boa velocidade par amanter")
} else if (velocidade >= 80 && velocidade < 100) {
    console.log("Velocidade alta. Considere diminuir.")
} else if(velocidade >= 100) {
    alert("Velocidade perigosa.Controle automático forçado")
} 

alert("Piloto : " + piloto + "\n velocidade : " + velocidade)

