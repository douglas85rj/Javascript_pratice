let departureDateEntry = prompt("Digite a data de partida (formato DD/MM/YYYY")

let departureDate = moment(departureDateEntry, "DD/MM/YYYY")

let today = moment()

let dateDiff = today - departureDate

let chosenOption = prompt("Escolha como gostaria de exibir o tempo de partida \n 1- Segundos \n 2 - Minutos \n 3 - Horas \n 4 - Dias")

if (chosenOption == "1") {
    let secondsOfDeparture = Math.round(dateDiff / 1000)
    alert("Tempo de voo : " + secondsOfDeparture + " segundos")
} else if (chosenOption == "2"){
    let minutesOfDeparture = Math.round(dateDiff / 1000 / 60)
    alert("tempo de voo: " + minutesOfDeparture + " minutos")
} else if (chosenOption == "3"){
    let hoursOfDeparture = Math.round(dateDiff / 1000 / 3600)
    alert("tempo de voo: " + hoursOfDeparture + " horas")
} else if (chosenOption == "4"){
    let daysOfDeparture = Math.round(dateDiff / 1000 / 60 / 3600 / 24)
    alert("tempo de voo: " + daysOfDeparture + " dias")
} else{
    alert("Opção invalida")
}