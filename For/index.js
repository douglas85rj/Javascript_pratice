let nave = prompt("Digite o nome da nave: ");

let charToReplace = prompt("Qual caracter deseja substituir ?");

let replacementChar = prompt("Por qual caracter deseja substituir ?");

let newSpaceship = "";

for (let pos = 0; pos < nave.length; pos++) {
  if (nave[pos] == charToReplace) {
    newSpaceship += replacementChar;
  } else {
    newSpaceship += nave[pos];
  }
}

alert("O novo nome da nave é :" + newSpaceship);
