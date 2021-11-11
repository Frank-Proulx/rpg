import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {Character, Monster} from './js/character.js';


function gameplay() {
  let monsterName = "";
  let decider = Math.floor(Math.random() * 2 + 1);
  if (decider === 1) {
    monsterName = "Goblin";
  } else if (decider === 2) {
    monsterName = "Dragon";
  } else if (decider === 3) {
    monsterName = "Werewolf";
  }
  newMonster = new Monster(`${monsterName}`);
  decider = Math.floor(Math.random() * 2 + 1);
  if (decider === 1) {
    return `You are walking through the woods at night and there is no one around, when all of the sudden, a ${newMonster.name} jumps at you! Attack or Flee?`;
  } else if (decider === 2) {
    return `You are walking over a bridge when a very spooky ${newMonster.name} jumps at you! Attack or Flee?`;
  } else if (decider === 3) {
    return `You encounter a frightening ${newMonster.name}! Attack or Flee?`;
  }
}

let myCharacter;
let newMonster;
$("#startForm").submit(function(event) {
  event.preventDefault();
  let name = $("#name").val();
  let characterMap = new Map([]);
  if (parseInt($("#stat").val()) == 1) {
    characterMap.set(1, 7);
    characterMap.set(2, 1);
    characterMap.set(3, 2);
  } else if (parseInt($("#stat").val()) == 2) {
    characterMap.set(1, 3);
    characterMap.set(2, 5);
    characterMap.set(3, 2);
  } else {
    characterMap.set(1, 3);
    characterMap.set(2, 2);
    characterMap.set(3, 5);
  }
  myCharacter = new Character(name, parseInt(characterMap.get(1)), parseInt(characterMap.get(2)), parseInt(characterMap.get(3)));
  $("#output").html(gameplay());
  $("#start").hide();
  $("#battle").show();
});

$("#fight").click(function() {
  myCharacter.doBattle(newMonster);
  $("#player-status").html(`Hitpoints: ${myCharacter.hitPoints} | Level: ${myCharacter.level} | Inventory: ${myCharacter.inventory.size} ${myCharacter.inventory.get(1)}`)
  if (!myCharacter.isAlive) {
    $("#character").html("You died!");
    $("#fight").hide();
  } else if (!newMonster.isAlive) {
    $("#character").html(`You slayed the ${newMonster.name}!`);
    $("#fight").hide();
  }
});

  $("#run").click(function() {
  
  });
  
  $("#potion").click(function() {
  
  });
