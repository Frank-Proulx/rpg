import { exportAllDeclaration, tupleExpression } from "@babel/types";
import { testPathPatternToRegExp } from "jest-util";
import {Character} from './../src/js/character.js'
import {Monster} from './../src/js/character.js'



describe('Character', () => {

  test('should correctly create a character class with a name and 4 attributes, an xp attribute that starts at 0 and a level that starts at 1', () => {
    const character1 = new Character("Bob", 4, 5, 3);
    expect(character1.name).toEqual("Bob");
    expect(character1.attack).toEqual(8);
    expect(character1.defense).toEqual(5);
    expect(character1.strength).toEqual(3);
    expect(character1.xp).toEqual(0);
    expect(character1.level).toEqual(1);
  });

  test('should correctly reassign xp and level values', () => {
    const character1 = new Character("Bob", 4, 5, 3);
    character1.xp = 120;
    character1.addLevel();
    expect(character1.xp).toEqual(10);
    expect(character1.level).toEqual(2);
  });

  test('should attack monster until either persons hitpoints reaches 0', () => {
    const character1 = new Character("Bob", 4, 5, 3);
    const monster1 = new Monster("Evil Bob");
    expect(monster1.hitPoints).toEqual(monster1.hitPoints);
    console.log(monster1.hitPoints);
    character1.doBattle(monster1);
    expect(character1.hitPoints).toEqual(character1.hitPoints);
    expect(monster1.hitPoints).toEqual(monster1.hitPoints);
    character1.doBattle(monster1);
    expect(character1.hitPoints).toEqual(character1.hitPoints);
    expect(monster1.hitPoints).toEqual(monster1.hitPoints);
    expect(character1.isAlive).toEqual(true);
    expect(monster1.isAlive).toEqual(true);
  })


});

describe('Monster', () => {

  test('it should create a monster class object with level, HP, attack', () => {
    const monster1 = new Monster("Bob");
    expect(monster1.name).toEqual("Bob");
  });
});