export class Player {
  constructor(name, level) {
       this.name = name;
       this.level = level;
    }
    
    info() {
        console.log(`${this.name} has reached Level ${this.level}!`);
    }

    levelUp() {
        this.level += 1;
    }
}

// Ejemplo de uso:
const player1 = new Player("Tara", 5);

console.log(player1.info()); 
player1.levelUp();
console.log(player1.info());