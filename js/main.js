//1 es piedra, 2 es papel y 3 es tijera

let jugador = 0;
let ia = Math.floor(Math.random() * 3) + 1;

jugador = prompt(
  "Elije una opcion" + "\n1. Piedra 🪨" + "\n2. Papel  📄" + "\n3. Tijera  ✂️"
);

eleccion(jugador, "Jugador");
eleccion(ia, "PC");
combate(jugador, ia);

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

function combate(player, pc) {
  if (player == pc) {
    alert("EMPATE" + "\n Presiona F5 para volver a jugar");
  } else if (player == 1 && pc == 3) {
    alert("TU GANAS" + "\n Presiona F5 para volver a jugar");
  } else if (player == 2 && pc == 1) {
    alert("TU GANAS" + "\n Presiona F5 para volver a jugar");
  } else if (player == 3 && pc == 2) {
    alert("TU GANAS" + "\n Presiona F5 para volver a jugar");
  } else {
    alert("TU PIERDES" + "\n Presiona F5 para volver a jugar");
  }
}
