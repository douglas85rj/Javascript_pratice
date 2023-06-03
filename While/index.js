let nave = prompt("Qual o nome da sua nave ? ")
let warpCount = 0

let chosenOption = ""

chosenOption = prompt("Deseja entrar em dobra espacial ? (\n 1 - Sim \n 2 - Não")

while (chosenOption == "1") {

    warpCount += 1
  chosenOption = prompt("Deseja realizar a próxima dobra ? \n 1 - Sim \n 2 - Não")
}
alert(" A Nave " + nave + "executou " + warpCount + " dobras.")