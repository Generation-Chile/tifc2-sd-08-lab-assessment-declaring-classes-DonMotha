export class Player {
  constructor(name, level) {
      this.name = name;
    this.level = level;
   
  }
    info(){
      console.log(`${this.name} has reached Level ${this.level}!`)
    }
}

// Ejemplo de uso:
const player1 = new Player("Tara", 5);
  
player1.info();

console.log(player1.info());