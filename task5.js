export class Player {
  constructor(name, level) {
    this.name = name;
    this.level = level;
    this.experience = 0;
    this.experienceToNextLevel = this.calculateExpForNextLevel();
    
  }
  
  info() {
    console.log(`${this.name} has reached Level ${this.level}!`);
  }

  levelUp() {
    this.level += 1;
    this.experienceToNextLevel = this.calculateExpForNextLevel();
    console.log(`${this.name} Leveled up to level ${this.level}!`);
  }

  gainExperience(points) {
    console.log(`${this.name} gained ${points} experience points!`);

    while (this.experience >= this.experienceToNextLevel) {
      this.experience -= this.experienceToNextLevel;

      this.levelUp();
    }
    this.showProgress();
  }

  showProgress() {
    const remaining = this.experienceToNextLevel - this.experience;
    console.log(`${this.name}: Level ${this.level} | xp: ${this.experienceToNextLevel} | Needed: ${remaining}`);
  }
}

const player = new Player("Tara", 1);

player.showProgress();  // Tara: Level 1 | XP: 0/100 | Needed : 100
player.gainExperience(50); // Tara gained 50 experience points!
player.gainExperience(60); // Tara gained 60 experience points! + Level up!
player.gainExperience(250); // Multiples level ups!
  