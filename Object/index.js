let spaceship = {
    velocity: 0,
    speedUp: function(acceleration) {
        this.velocity += acceleration
    }
}

function registerSpaceship() {
    spaceship.name = prompt("Informe o nome da nave")
    spaceship.type = prompt("Informe o tipo da nave")
    spaceship.maxVelocity = Number(prompt("Informe a velocidade máxima da nave"))
}

function acelerate() {
    let acceleration = Number(prompt("Quanto você quer acelerar?"))
    spaceship.speedUp(acceleration)
    if (spaceship.velocity > spaceship.maxVelocity) {
        alert(
            "VELOCIDADE MÁXIMA ULTRAPASSADA!\n" +
            "Velocidade da nave: " + spaceship.velocity + "\n" +
            "Velocidade máxima: " + spaceship.maxVelocity
        )
    }
}

function stop() {
    alert(
        "Nome: " + spaceship.name + "\n" +
        "Tipo: " + spaceship.type + "\n" +
        "Velocidade da nave: " + spaceship.velocity
    )
    spaceship.velocity = 0
}

function showMenu() {
    let chosenOption
    do {
        chosenOption = prompt(
            "Você está em uma nave espacial, o que deseja fazer?\n" +
            "1- Acelerar a nave\n" +
            "2- Parar a nave\n" +
            "3- Imprimir e sair"
        )
        switch (chosenOption) {
            case "1":
                acelerate()
                break
            case "2":
                stop()
                break
            case "3":
                alert("Você saiu do programa")
                break
            default:
                alert("Opção inválida")
        }
    } while (chosenOption != "3")
}

registerSpaceship()
showMenu()

