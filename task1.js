export class Player {
  constructor(name) {
    this.name = name;
  }
}

// Ejemplo de uso:
const player1 = new Player("Almendra");
const player2 = new Player("Tomas");

console.log(player1.name); // "Almendra"
console.log(player2.name); // "Tomas"