var attemps = prompt("Indica cuantas veces quieres jugar");

var playerValue;
var computerValue;
var playerPoints = 0;
var computerPoints = 0;

for (i=0; i < attemps; i++){
    var choice = prompt("Escribe tu elección: piedra, papel o tijera");
    
    if (choice == "piedra"){
        playerValue = 0;
    }
    else if (choice == "papel"){
        playerValue = 1;
    }
    else if (choice == "tijera"){
        playerValue = 2;
    }
    else{
        alert("Elección no válida, solamente escribe: papel, piedra o tijera");
    }

    computerValue = Math.floor(Math.random()*3);

    if (computerValue == 0){
        alert("La computadora eligió: Piedra");
    }
    if (computerValue == 1){
        alert("La computadora eligió: Papel");
    }
    if (computerValue == 2){
        alert("La computadora eligió: Tijera");
    }

    if(playerValue == 0 && computerValue == 2){
        alert("Piedra le gana a tijera");
        alert("Has ganado esta ronda!");
        playerPoints++;
    }
    if(playerValue == 1 && computerValue == 0){
        alert("Papel le gana a piedra");
        alert("Has ganado esta ronda!");
        playerPoints++;
    }
    if(playerValue == 2 && computerValue == 1){
        alert("Tijera le gana a papel");
        alert("Has ganado esta ronda!");
        playerPoints++;
    }
    if(computerValue == 0 && playerValue == 2){
        alert("Piedra le gana a tijera");
        alert("Has perdido esta ronda!");
        computerPoints++;
    }
    if(computerValue == 1 && playerValue == 0){
        alert("Papel le gana a piedra");
        alert("Has perdido esta ronda!");
        computerPoints++;
    }
    if(computerValue == 2 && playerValue == 1){
        alert("Tijera le gana a papel");
        alert("Has perdido esta ronda!");
        computerPoints++;
    }
    if(computerValue == playerValue){
        alert("Es un empate!!");
    }
}

alert("Puntaje final:\n Computadora: " + computerPoints + "\n Tú: " + playerPoints);

if (playerPoints > computerPoints){
    alert("Felicidades!!! Has ganado el juego!");
}
if (computerPoints > playerPoints){
    alert('Lo siento, has perdido el juego :(');
}
if (computerPoints == playerPoints){
    alert("Increible! Es un empate!!");
}