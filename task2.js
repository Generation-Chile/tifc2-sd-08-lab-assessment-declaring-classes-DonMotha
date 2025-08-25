export class Player {
  constructor(name, level) {
    this.name = name;
    this.level = level;
   
  }
    
}

// Ejemplo de uso:
const player1 = new Player("Almendra", 5);
const player2 = new Player("Tomas", 12);

console.log(player1.name);  // "Almendra"
console.log(player1.level); // 5

console.log(player2.name);  // "Tomas"
console.log(player2.level); // 12
