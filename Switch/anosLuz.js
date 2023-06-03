let distanceInLY = prompt("Digite a distância em anos luz:");

let chosenOption = prompt(
  "Para qual unidade deseja converter ? \n 1 - parse(pc) \n 2 - unidade AStronômica \n 3 - Quilômetros(KM) \n\n (Digite um número da opção desejada"
);

let chosenUnity;
let convertedDistance;

switch (chosenOption) {
  case "1":
    chosenUnity = "parsec";
    convertedDistance = distanceInLY * 0.306601;
    break
  case "2":
    chosenUnity = "Unidade Astronômica";
    convertedDistance = distanceInLY * 63241.1;
    break
  case "3":
    chosenUnity = "Quilômetros";
    convertedDistance = distanceInLY * 9.5 * Math.pow(10, 2);
    break
  default:
    chosenUnity = "Unidade não identificada";
    convertedDistance = "Conversão fora do escopo";
}

alert("Distância em anos luz : " + distanceInLY + "\n  " + chosenUnity + ":" + convertedDistance )
