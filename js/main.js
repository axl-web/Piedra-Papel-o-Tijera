function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function eleccion(opcion) {
  let resultado = " ";
  if (opcion == 1) {
    resultado = " Elije 🪨";
  } else if (opcion == 2) {
    resultado = " Elije 📄";
  } else if (opcion == 3) {
    resultado = " Elije ✂️";
  } else {
    resultado = "No ingreso una opcion correcta.";
    alert(
      "No ingresaste un opcion correcta \n Preciona F5 para vovler a jugar"
    );
  }
  return resultado;
}

function combate(playerH, playerPC) {
  if (playerH == playerPC) {
    alert("EMPATE");
  } else if (
    (playerH == 1 && playerPC == 3) ||
    (playerH == 2 && playerPC == 1) ||
    (playerH == 3 && playerPC == 2)
  ) {
    alert("TU GANAS");
    rodasGanadas = rodasGanadas + 1;
  } else {
    alert("TU PIERDES");
    rondasPerdidas = rondasPerdidas + 1;
  }
}

let jugador = 0;
let pc = 0;
let rodasGanadas = 0;
let rondasPerdidas = 0;

while (rodasGanadas < 3 && rondasPerdidas < 3) {
  jugador = prompt(
    "Elije una opcion" + "\n1. Piedra 🪨" + "\n2. Papel  📄" + "\n3. Tijera ✂️"
  );
  pc = aleatorio(1, 3);
  alert("El Jugador " + eleccion(jugador));
  alert("La PC " + eleccion(pc));
  combate(jugador, pc);
}

alert("Ganaste " + rodasGanadas + "\n Perdistes " + rondasPerdidas);
