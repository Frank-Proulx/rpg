export class Character {
  constructor(name, health, strength, wisdom, charm) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.wisdom = wisdom;
    this.charm = charm;
    this.xp = 0;
    this.level = 1;
    this.hitPoints = health * 50;
  }

  addLevel() {
    let xpNeeded = 100 + (this.level * 10); 
    if (this.xp >= xpNeeded) {
      this.xp = this.xp - xpNeeded;
      this.level++;
    }
  }

  doBattle() {
  
  }
}

export class Monster extends Character {
  constructor(){
    super();
    this.level = Math.floor(Math.random()*19 + 1);
    this.hitPoints = 20 * this.level;
    this.attack = 20 * this.level;
  }
}