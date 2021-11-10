import { exportAllDeclaration } from "@babel/types";
import { testPathPatternToRegExp } from "jest-util";
import {Character} from './../src/js/character.js'
import {Monster} from './../src/js/character.js'



describe('Character', () => {

  test('should correctly create a character class with a name and 4 attributes, an xp attribute that starts at 0 and a level that starts at 1', () => {
    const character1 = new Character("Bob", 4, 5, 3, 3);
    expect(character1.name).toEqual("Bob");
    expect(character1.health).toEqual(4);
    expect(character1.strength).toEqual(5);
    expect(character1.wisdom).toEqual(3);
    expect(character1.charm).toEqual(3);
    expect(character1.xp).toEqual(0);
    expect(character1.level).toEqual(1);
  });

  test('should correctly reassign xp and level values', () => {
    const character1 = new Character("Bob", 4, 5, 3, 3);
    character1.xp = 120;
    character1.addLevel();
    expect(character1.xp).toEqual(10);
    expect(character1.level).toEqual(2);
  });
});

describe('Monster', () => {

  test('it should create a monster class object with level, HP, attack', () => {
    const monster1 = new Monster();
    expect().toEqual();
  });
});