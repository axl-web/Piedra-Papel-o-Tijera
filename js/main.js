//1 es piedra, 2 es papel y 3 es tijera

let jugador = 0;
let min = 1;
let max = 3;
let pc = aleatorio(1, 3);

jugador = prompt(
  "Elije una opcion" + "\n1. Piedra 🪨" + "\n2. Papel  📄" + "\n3. Tijera ✂️"
);

eleccion(jugador, "Jugador");
eleccion(pc, "PC");
combate(jugador, pc);

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
  }
}

function combate(playerH, playerPC) {
  if (playerH == playerPC) {
    alert("EMPATE" + "\n Presiona F5 para volver a jugar");
  } else if (playerH == 1 && playerPC == 3) {
    alert("TU GANAS" + "\n Presiona F5 para volver a jugar");
  } else if (playerH == 2 && playerPC == 1) {
    alert("TU GANAS" + "\n Presiona F5 para volver a jugar");
  } else if (playerH == 3 && playerPC == 2) {
    alert("TU GANAS" + "\n Presiona F5 para volver a jugar");
  } else {
    alert("TU PIERDES" + "\n Presiona F5 para volver a jugar");
  }
}
