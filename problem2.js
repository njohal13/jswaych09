//Character inventory
//Improve the example RPG to add character inventory management according to the following rules:
//A character's inventory contains a number of gold and a number of keys.
//Each character begins with 10 gold and 1 key.
//The character description must show the inventory state.
//When a character slays another character, the victim's inventory goes to its vanquisher.

class Character {
    constructor(name, health, strength){
        this.name = name
        this.health = health
        this.strength = strength
        this.xp = 0
        this.gold = 10
        this.keys = 1
    }

    attack(target){
        //1. if our character is alive, lets see how they damage the opponent
        if (this.health > 0){
            const damage = this.strength
            console.log(
                `${this.name} attacks ${target.name} and causes ${damage} damage points`)
            
            target.health -= damage;
            if(target.health > 0 ){
                console.log(
                    `${target.name} has ${target.health} health points left`)

            //Lets do this when target is eliminated
            } else {
                target.health = 0
                const bonusXP = 10
                console.log(
                    `${this.name} eliminated ${target.name} and wins ${bonusXP} experience points, ${target.gold} gold, and ${target.keys} key(s) from ${target.name}`
                  )
                  this.xp += bonusXP
                  this.gold += target.gold
                  this.keys += target.keys
                  target.gold = 0
                  target.keys = 0
                
            }
         //2. if out character's health is below 0 they can't attack
        } else {
            console.log(`${this.name} can't attack (they've been eliminated)`);
        }
    }

    //3. Lets create another method to see stats of our character and opponent after the attack
    describe() {
         return `${this.name} has ${this.health} health points, ${this
             .strength} as strength and ${this.xp} XP points, ${this.gold} gold and ${this.keys} keys`;
    }
    
}
// Lets use our class to create new hero characters
const aurora = new Character('Aurora', 150, 25)
const glacius = new Character('Glacius', 130, 30)


console.log("Welcome to the adventure! Here are our heroes:")

//lets see the stats of new characters
console.log(aurora.describe())
console.log(glacius.describe())

//lets create a villain character that attacks our heros
const monster = new Character ('Spike', 40, 20)
console.log("A wild monster has appeared: it's named " + monster.name); 

monster.attack(aurora)
monster.attack(glacius)

//heros attack back
aurora.attack(monster)
glacius.attack(monster)

//new stats after attack
console.log(aurora.describe())
console.log(glacius.describe())
console.log(monster.describe())

monster.attack(aurora)