//1 es piedra, 2 es papel y 3 es tijera

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
    resultado =
      "No ingreso una opcion correcta." + "\n Presiona F5 para volver a jugar";
    jugable = false;
  }
  return resultado;
}

function combate(playerH, playerPC) {
  if (playerH == playerPC) {
    alert("EMPATE" + "\n Presiona F5 para volver a jugar");
  } else if (
    (playerH == 1 && playerPC == 3) ||
    (playerH == 2 && playerPC == 1) ||
    (playerH == 3 && playerPC == 2)
  ) {
    alert("TU GANAS" + "\n Presiona F5 para volver a jugar");
  } else {
    alert("TU PIERDES" + "\n Presiona F5 para volver a jugar");
  }
}

function play(ok) {
  if (ok) {
    alert("La PC " + eleccion(pc));
    combate(jugador, pc);
  }
}

let jugador = 0;
let pc = aleatorio(1, 3);
let jugable = true;

jugador = prompt(
  "Elije una opcion" + "\n1. Piedra 🪨" + "\n2. Papel  📄" + "\n3. Tijera ✂️"
);

alert("El Jugador " + eleccion(jugador));
play(jugable);
