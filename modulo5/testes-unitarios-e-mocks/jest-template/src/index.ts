import { Character } from "./types/type";

export function validateCharacter(character:Character):boolean {
    if(
        !character.name ||
        character.life === undefined ||
        character.defense === undefined||
        character.power === undefined
    ){
        return false
    } 

    if(
        character.life <= 0 ||
        character.defense <= 0 ||
        character.power <= 0 
    ){
        return false
    }

    return true
}
export function performAttack(attacker:Character, defender:Character) {
    if(!validateCharacter(attacker) || !validateCharacter(defender)){
        return "Invalid character"
    } 
    if(attacker.power > defender.defense){
        defender.defense = defender.defense - attacker.power
    }
    if(defender.defense > attacker.power){
        defender.defense = defender.defense
    }

    return true
}
export function injDependencyPerformAttack(
    attacker:Character,
    defender:Character,
    validateCharacterDependency: (character:Character)=>boolean
){
    if(!validateCharacterDependency(attacker) || !validateCharacterDependency(defender)){
        return "Invalid character"
    } 
    if(attacker.power > defender.defense){
        defender.defense = defender.defense - attacker.power
    }
    if(defender.defense > attacker.power){
        defender.defense = defender.defense
    }
    return true
}
/* validateCharacter({name:"", life:5000, defense:1000, power:800})
console.log("response",validateCharacter) */



export class ValidateCaharacterClass {
    constructor(character:Character) {}
}

export function ValidateCaharacterFunction(character:Character) {
    
}