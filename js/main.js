//1 es piedra, 2 es papel y 3 es tijera

let jugador = 0;
let ia = 0;

jugador = prompt(
  "Elije una opcion" + "\n1. Piedra 🪨" + "\n2. Papel  📄" + "\n3. Tijera  ✂️"
);

eleccion(jugador);

function eleccion(eleccion) {
  if (eleccion >= 1 && eleccion <= 3) {
    alert("Elejiste " + jugador);
  } else {
    alert("Tu eleccion es incorrecta");
  }
}
