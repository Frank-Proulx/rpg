export class Character {
  constructor(name, attack, defense, strength) {
    this.name = name;
    this.attack = attack;
    this.defense = defense;
    this.strength = strength;
    this.xp = 0;
    this.level = 1;
    this.hitPoints = strength * 50;
    this.isAlive = true;
  }

  addLevel() {
    let xpNeeded = 100 + (this.level * 10); 
    if (this.xp >= xpNeeded) {
      this.xp = this.xp - xpNeeded;
      this.level++;
      this.hitPoints += 100;
    }
  }

  doBattle(monster) {
    this.hitPoints -= monster.attack / this.defense;
    monster.hitPoints -= this.attack;
    if (this.hitPoints <= 0) {
      this.isAlive = false;
    }
    if (monster.hitPoints <= 0) {
      monster.isAlive = false;
      this.xp += monster.xp;
      this.addLevel();
    }
    // console.log(this.hitPoints);
    // console.log(monster.hitPoints);
    // console.log("monster.hitPoints");
    // console.log(this.isAlive);
    // console.log(monster.isAlive);
  }
}

export class Monster extends Character {
  constructor(name){
    super(name);
    this.name = name;
    this.level = Math.floor(Math.random()*19 + 1);
    this.hitPoints = 30 * this.level;
    this.attack = 10 * this.level;
    this.xp = this.level * 5;
    this.isAlive = true;
  }
}