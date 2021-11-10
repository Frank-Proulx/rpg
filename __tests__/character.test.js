import { exportAllDeclaration } from "@babel/types";
import { testPathPatternToRegExp } from "jest-util";
import {Character} from './../src/js/character.js'


describe('Character', () => {

  test('should correctly create a character class with a name and 4 attributes', () => {
    const character1 = new Character("Bob", 4, 5, 3, 3);
    expect(character1.name).toEqual("Bob");
    expect(character1.health).toEqual(4);
    expect(character1.strength).toEqual(5);
    expect(character1.wisdom).toEqual(3);
    expect(character1.charm).toEqual(3);
  });
});