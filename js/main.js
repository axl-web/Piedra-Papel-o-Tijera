//1 es piedra, 2 es papel y 3 es tijera

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function eleccion(opcion, player) {
  if (opcion == 1) {
    alert(player + " Elijio 🪨");
  } else if (opcion == 2) {
    alert(player + " Elijio 📄");
  } else if (opcion == 3) {
    alert(player + " Elijio ✂️");
  } else {
    alert(
      "No ingresaste una opcion correcta." +
        "\n Presiona F5 para volver a jugar"
    );
    jugable = false;
  }
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
    eleccion(pc, "PC");
    combate(jugador, pc);
  }
}

let jugador = 0;
let pc = aleatorio(1, 3);
let jugable = true;

jugador = prompt(
  "Elije una opcion" + "\n1. Piedra 🪨" + "\n2. Papel  📄" + "\n3. Tijera ✂️"
);

eleccion(jugador, "Jugador");
play(jugable);
