
let spaceshipName = prompt(" digite o nome da nave : ")

let invertedName = ""

for (let i = spaceshipName.length - 1; i >= 0; i-- ) {
    if(spaceshipName[i] == "e"){
        break
    }
    invertedName += spaceshipName[i]
}
alert("Nome original da nave : " + spaceshipName +  "\n nome após ocultação :" + invertedName)

//s u p e r n o v a
//0 1 2 3 4 5 6 7 8