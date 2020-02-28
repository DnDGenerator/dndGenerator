const dice = require('./dice');


class MapDescription{
    constructor(numChambers,purpose){
        this.numChambers = numChambers;

        this.purpose = purpose
        
        this.descriptions = {chambers:[], currentChamberState:[], contents:[]};
        this.dice = dice;
        
        this.purposeSwitchStation = this.purposeSwitchStation.bind(this);
        this.deathTrapDescriptions = this.deathTrapDescriptions.bind(this);
        this.generalDungeonChambers = this.generalDungeonChambers.bind(this);
        this.randomHazard = this.randomHazard.bind(this);
        this.randomObstacles = this.randomObstacles.bind(this);
        this.randomTraps = this.randomTraps.bind(this);
        this.monsterMotivation = this.monsterMotivation.bind(this);
        this.randomTricks = this.randomTricks.bind(this);
    }
    monsterMotivation(){
        const roll = this.dice.roll(`1d20`).result;

        if(roll < 3){
            return "Find a santuary";
        }else if(roll < 6){
            return "Conquer the dungeon";
        }else if(roll < 9){
            return "Seek an item in the dungeon";
        }else if(roll < 12){
            return "Slay a rival";
        }else if(roll < 14){
            return "Hide from enemies";
        }else if(roll < 16){
            return "Recover from a battle";
        }else if(roll < 18){
            return "Avoid danger";
        }else{
            return "Seek wealth";
        }
    }
    randomTricks(){
        const objRoll = dice.roll(`1d20`).result;
        const trickRoll = dice.roll(`1d100`).result;

        let trick = '';
        switch(objRoll){
            case 1:
                trick+='Book ';
                break;
            case 2:
                trick+='Brain preserved in a jar ';
                break;
            case 3:
                trick+='Burning fire';
                break;
            case 4:
                trick+="Cracked gem ";
                break;
            case 5:
                trick+="Door ";
                break;
            case 6:
                trick+="Fresco ";
                break;
            case 7:
                trick+="Furniture ";
                break;
            case 8:
                trick+="Glass sculpture ";
                break;
            case 9:
                trick+="Mushroom field ";
                break;
            case 10:
                trick+="Painting ";
                break;
            case 11:
                trick+="Plant or tree ";
                break;
            case 12:
                trick+="Pool of water ";
                break;
            case 13:
                trick+="Runes engraved on wall or floor ";
                break;
            case 14:
                trick+="Skull ";
                break;
            case 15:
                trick+="Sphere of magical energy ";
                break;
            case 16:
                trick+="Statue ";
                break;
            case 17:
                trick+="Stone obelisk ";
                break;
            case 18:
                trick+="Suit of armor ";
                break;
            case 19:
                trick+="Tapestry or rug ";
                break;
            case 20:
                trick+="Target dummy ";
        }

        if(trickRoll < 4){
            trick+="Ages the first person to touch the object";
        }else if(trickRoll < 7){
            trick+="The touched object animates, or it animates other objects";
        }else if(trickRoll < 11){
            trick+="Asks three skill-testing questions (if all three are answered correctly, a reward appears)";
        }else if(trickRoll < 14){
            trick+="Bestows resistance or vulnerability";
        }else if(trickRoll < 17){
            trick+="Changes a character's alignment, personality, size, appearance, or sex when touched";
        }else if(trickRoll < 20){
            trick+="Changes one substance to another, such as gold to lead or metal to brittle crystal";
        }else if(trickRoll < 23){
            trick+="Creates a force field";
        }else if(trickRoll < 27){
            trick+="Creates an illusion";
        }else if(trickRoll < 30){
            trick+="Suppresses magic items for a time";
        }else if(trickRoll < 33){
            trick+="Enlarges or reduces characters";
        }else if(trickRoll < 36){
            trick+="Magic mouth speaks a riddle";
        }else if(trickRoll < 39){
            trick+="Confusion (targets all creatures within 10ft)";
        }else if(trickRoll < 42){
            trick+="Gives directions (true or false)";
        }else if(trickRoll < 45){
            trick+="Grants a wish";
        }else if(trickRoll < 48){
            trick+="Flies about to avoid being touched";
        }else if(trickRoll < 51){
            trick+="Casts geas on the characters";
        }else if(trickRoll < 54){
            trick+="Increases, reduces, negates, or reverses gravity";
        }else if(trickRoll < 57){
            trick+="Induces greed";
        }else if(trickRoll < 60){
            trick+="Contains an imprisoned creature";
        }else if(trickRoll < 63){
            trick+="Locks or unlocks exits";
        }else if(trickRoll < 66){
            trick+="Offers a game of chance, with the promise of a reward or valuable information";
        }else if(trickRoll < 69){
            trick+="Helps or harms certain types of creatures";
        }else if(trickRoll < 72){
            trick+="Casts polymorph on the characters (lasts 1 hour)";
        }else if(trickRoll < 76){
            trick+="Presents a puzzle or riddle";
        }else if(trickRoll < 79){
            trick+="Prevents movement";
        }else if(trickRoll < 82){
            trick+="Releases coins, falses coins, gems, false gems, a magic item, or a map";
        }else if(trickRoll < 85){
            trick+="Releases, summons, or turns into a monster";
        }else if(trickRoll < 88){
            trick+="Casts suggestion on the characters";
        }else if(trickRoll < 91){
            trick+="Wails loudly when touched";
        }else if(trickRoll < 94){
            trick+="Talks (normal speech, nonsense, poetry and rhymes, singing, spellcasting, or screaming)";
        }else if(trickRoll < 98){
            trick+="Teleports characters to another place";
        }else{
            trick+="Swaps two or more characters' minds";
        }

        return trick;

    }
    randomTraps(){
        const triggerRoll = dice.roll(`1d6`).result;
        const severityRoll = dice.roll(`1d6`).result;
        const effectsRoll = dice.roll(`1d100`).result;
        let trapResult = '';

        trapResult += 'A trap with a damage severity of ';
        if(severityRoll < 3){
            trapResult += 'Setback ';
        }else if(severityRoll < 6){
            trapResult += 'Dangerous ';
        }else{
            trapResult += "Deadly ";
        }

        trapResult += "that is triggered by being ";
        switch(triggerRoll){
            case 1:
                trapResult += "Stepped on (floor, stairs) ";
                break;
            case 2:
                trapResult += "Moved through (doorway, hallway) ";
                break;
            case 3:
                trapResult += "Touched (doorknob, statue) ";
                break;
            case 4:
                trapResult += "Opened (door, treasure chest) "
                break;
            case 5:
                trapResult += "Looked at (mural, arcane symbol) "
                break;
            case 6:
                trapResult += "Moved (cart, stone block) "
                break;
        }

        trapResult += " \nthe effect of the trap being ";
        if(effectsRoll < 5){
            trapResult += "Magic missles shoot from a statue or object";
        }else if(effectsRoll < 8){
            trapResult += "Collapsing staircase creates a ramp that deposits characters into a pit at its lower end";
        }else if(effectsRoll < 11){
            trapResult += "Ceiling block falls, or entire ceiling collapses";
        }else if(effectsRoll < 13){
            trapResult += "Ceiling lowers slowly in locked room";
        }else if(effectsRoll < 15){
            trapResult += "Chute opens in floor";
        }else if(effectsRoll < 17){
            trapResult += "Clanging noise attracts nearby monsters";
        }else if(effectsRoll < 20){
            trapResult += "Touching an object triggers a disintegrate spell";
        }else if(effectsRoll < 24){
            trapResult += "Door or other object is coated with contact poison";
        }else if(effectsRoll < 28){
            trapResult += "Fire shoots out from wall, floor, or object";
        }else if(effectsRoll < 31){
            trapResult += "Touching an object triggers a flesh to stone spell";
        }else if(effectsRoll < 34){
            trapResult += "Floor collapses or is an illusion";
        }else if(effectsRoll < 37){
            trapResult += "Vent releases gas: blinding, acidic, obsuring, paralyzing, poisonous, or sleep-inducing"
        }else if(effectsRoll < 40){
            trapResult += "Floor tiles are electrified";
        }else if(effectsRoll < 44){
            trapResult += "Glyph of warding";
        }else if(effectsRoll < 47){
            trapResult += "Huge wheeled statue rolls down corridor";
        }else if(effectsRoll < 50){
            trapResult += "Lightning bolt shoots from wall or object";
        }else if(effectsRoll < 53){
            trapResult += "Locked room floods with water or acid";
        }else if(effectsRoll < 57){
            trapResult += "Darts shoot out of an opened chest";
        }else if(effectsRoll < 60){
            trapResult += "A weapon, suit of armor, or rug animates and attacks when touched";
        }else if(effectsRoll < 63){
            trapResult += "Pendulum, either bladed or weighted as a maul, swings accross the room or hall";
        }else if(effectsRoll < 68){
            trapResult += "Hidden pit opens beneath characters (25 perfecnt chance that a black pudding or gelatinous cube fills the bottom of the pit)"
        }else if(effectsRoll < 71){
            trapResult += "Hidden pit opens beneath characters and begins to flood with acid or fire";
        }else if(effectsRoll < 74){
            trapResult += "Hidden pit opens beneath characters then closes and locks while it floods with water"
        }else if(effectsRoll < 78){
            trapResult += "Scything blade emerges from wall or object";
        }else if(effectsRoll < 82){
            trapResult += "Spears (possibly poisoned) spring out";
        }else if(effectsRoll < 85){
            trapResult += "Brittle stairs collapse of spikes";
        }else if(effectsRoll < 89){
            trapResult += "Thunderwave knocks character into a pit or spikes";
        }else if(effectsRoll < 92){
            trapResult += "Steel or stone jaws restrain a character";
        }else if(effectsRoll < 95){
            trapResult += "Stone block smashes across hallway";
        }else if(effectsRoll < 98){
            trapResult += "Symbol spell";
        }else{
            trapResult += "Walls slide together";
        }

        return trapResult;
    }
    randomObstacles(){
        const roll = this.dice.roll(`1d20`).result;
        if(roll < 2){
            return `Antilife aura with a radius of 1d10x 10ft; while in the aura, living creatures can't regain hit points`;
        }else if(roll < 3){
            return `Battering winds reduce speed by half, impose disadvantage on ranged attack rolls`;
        }else if(roll < 4){
            return `Blade barrier blocks passage`;
        }else if(roll < 9){
            return `Cave-in`;
        }else if(roll < 13){
            return `Chasm 1d4 x 10ft wide and 2d6 x 10ft deep, possibly connected to other levels of the dungeon`;
        }else if(roll < 15){
            return `Flooding leaves 2d10 ft of water in the area; create nearby upward-sloping passages, raised floors, or rising stairs to contain the water`
        }else if(roll < 16){
            return `Lava flows through the area (50 percent chance of stone bridge crossing it)`
        }else if(roll < 17){
            return "Overgrown mushrooms block progress and must be hacked down (25 precent chance of a mold or fungus dungeon hazard among them)";
        }else if(roll < 18){
            return "Poisonous gas (deals 1d6 poison damage per minute of exposure)";
        }else if(roll < 19){
            return "Reverse gravity effect causes creatures to fall toward the ceiling";
        }else if(roll < 20){
            return "Wall of fire blocks passage";
        }else{
            return "Wall of force blocks passage";
        }
    }
    randomHazard(){
        const roll = this.dice.roll(`1d20`).result;

        if(roll < 4){
            return "Brown mold";
        }else if(roll < 9){
            return "Green slime";
        }else if(roll < 11){
            return "Shrieker";
        }else if(roll < 16){
            return "Spiderwebs";
        }else if(roll < 18){
            return "Violet fungus";
        }else{
            return "Yellow mold"
        }
    }

    chamberDescriptions(){
        this.purposeSwitchStation();
        for(let i = 0; i < this.numChambers; i++){    
            const currentStateRoll = this.dice.roll(`1d20`).result;
            const contentsRoll = this.dice.roll(`1d100`).result;
            if(currentStateRoll < 4){
                this.descriptions.currentChamberState.push(`Rubble, ceiling partially collapsed`)
            }else if(currentStateRoll < 6){
                this.descriptions.currentChamberState.push(`Holes, floor partially collapsed`)
            }else if(currentStateRoll < 8){
                this.descriptions.currentChamberState.push(`Ashes, contents mostly burned`)
            }else if(currentStateRoll < 10){
                this.descriptions.currentChamberState.push(`Used as a campsite`)
            }else if(currentStateRoll < 12){
                this.descriptions.currentChamberState.push(`Pool of water; chamber's original contents are 
                water damaged `)
            }else if(currentStateRoll < 17){
                this.descriptions.currentChamberState.push(`Furniture wrecked but still present`)
            }else if(currentStateRoll < 19){
                this.descriptions.currentChamberState.push(generalDungeonChambers())
            }else if(currentStateRoll < 20){
                this.descriptions.currentChamberState.push("Stripped bare");
            }else{
                this.descriptions.currentChamberState.push("Pristine and in original state")
            }
            if(contentsRoll < 9){
                this.descriptions.contents.push("Monster (dominant inhabitant) motivated to " + this.monsterMotivation());
            }else if(contentsRoll < 16){
                this.descriptions.contents.push("Monster (dominant inhabitant) with treasure motivated to " + this.monsterMotivation());
            }else if(contentsRoll < 28){
                this.descriptions.contents.push("Monster (pet or allied creature) motivated to " + this.monsterMotivation());
            }else if(contentsRoll < 34){
                this.descriptions.contents.push("Monster (pet or allied creature) guarding treasure");
            }else if(contentsRoll < 43){
                this.descriptions.contents.push("Monster (random creature) motivated to " + this.monsterMotivation());
            }else if(contentsRoll < 51){
                this.descriptions.contents.push("Monster (random creature) with treasure motivated to "+ this.monsterMotivation());
            }else if(contentsRoll < 59){
                this.descriptions.contents.push(this.randomHazard());
            }else if(contentsRoll < 64){
                this.descriptions.contents.push(this.randomObstacles());
            }else if(contentsRoll < 74){
                this.descriptions.contents.push(this.randomTraps());
            }else if(contentsRoll < 77){
                this.descriptions.contents.push(this.randomTraps() + " protecting treasure");
            }else if(contentsRoll < 81){
                this.descriptions.contents.push(this.randomTricks());
            }else if(contentsRoll < 89){
                this.descriptions.contents.push("Empty room")
            }else if(contentsRoll < 95){
                this.descriptions.contents.push("Empty room with "+ this.randomHazard());
            }else{
                this.descriptions.contents.push("Empty room with treasure");
            }
        }
        return this.descriptions;
    }
    generalDungeonChambers(){
        const precentile = this.dice.roll(`1d100`).result;
        if(precentile < 2){
            return "Antechamber";
        }else if(precentile < 4){
            return "Armory";
        }else if(precentile < 5){
            return "Audience chamber";
        }else if(precentile < 6){
            return "Aviary";
        }else if(precentile < 8){
            return "Banquet room";
        }else if(precentile < 11){
            return "Barracks";
        }else if(precentile < 12){
            return "Bath or latrine";
        }else if(precentile < 13){
            return "Bedroom";
        }else if(precentile < 14){
            return "Bestiary";
        }else if(precentile < 17){
            return "Cell";
        }else if(precentile < 18){
            return "Chantry";
        }else if(precentile < 19){
            return "Chapel";
        }else if(precentile < 21){
            return "Cistern";
        }else if(precentile < 22){
            return "Classroom";
        }else if(precentile < 23){
            return "Closet";
        }else if(precentile < 25){
            return "Conjuring room";
        }else if(precentile < 27){
            return "Court";
        }else if(precentile < 30){
            return "Crypt";
        }else if(precentile < 32){
            return "Dining room";
        }else if(precentile < 34){
            return "Divination room";
        }else if(precentile < 35){
            return "Dormitory";
        }else if(precentile < 36){
            return "Dressing room";
        }else if(precentile < 37){
            return "Entry";
        }else if(precentile < 39){
            return "Gallery";
        }else if(precentile < 41){
            return "Game room";
        }else if(precentile < 44){
            return "Guardroom";
        }else if(precentile < 46){
            return "Hall";
        }else if(precentile < 48){
            return "Great hall";
        }else if(precentile < 50){
            return "Hallway";
        }else if(precentile < 51){
            return "Kennel";
        }else if(precentile < 53){
            return "Kitchen";
        }else if(precentile < 55){
            return "Laboratory";
        }else if(precentile < 58){
            return "Library";
        }else if(precentile < 60){
            return "Lounge";
        }else if(precentile < 61){
            return "Meditation chamber";
        }else if(precentile < 62){
            return "Observatory";
        }else if(precentile < 63){
            return "Office";
        }else if(precentile < 65){
            return "Pantry";
        }else if(precentile < 67){
            return "Pen or prison";
        }else if(precentile < 69){
            return "Reception room";
        }else if(precentile < 71){
            return "Refectory";
        }else if(precentile < 72){
            return "Robing room";
        }else if(precentile < 73){
            return "Salon";
        }else if(precentile < 75){
            return "Shrine";
        }else if(precentile < 77){
            return "Sitting room";
        }else if(precentile < 79){
            return "Smithy";
        }else if(precentile < 80){
            return "Stable";
        }else if(precentile < 82){
            return "Storage room";
        }else if(precentile < 84){
            return "Strong room or vault";
        }else if(precentile < 86){
            return "Study";
        }else if(precentile < 89){
            return "Temple";
        }else if(precentile < 91){
            return "Throne room"
        }else if(precentile < 92){
            return "Torture chamber";
        }else if(precentile < 94){
            return "Training or exercise room";
        }else if(precentile < 96){
            return "Trophy room or museum";
        }else if(precentile < 97){
            return "Waiting room";
        }else if(precentile < 98){
            return "Nursery or schoolroom";
        }else if(precentile < 99){
            return "Well";
        }else{
            return "Workshop";
        }
    }
    deathTrapDescriptions(){
        
        
        for(let i = 0; i < this.numChambers; i++){
            const roll = this.dice.roll(`1d20`).result;
            if(roll < 2){
                this.descriptions.chambers.push('Antechamber or waiting room for spectators');
            }else if(roll < 9){
                this.descriptions.chambers.push('Guardroom fortified against intruders');
            }else if(roll < 12){
                this.descriptions.chambers.push(`Vault for holding important treasures, accessible 
                only by locked or secret door (75 percent chance 
                of being trapped)`)
            }else if(roll < 15){
                this.descriptions.chambers.push(`Room containing a puzzle that must be solved to 
                bypass a trap or monster`)
            }else if(roll < 20){
                this.descriptions.chambers.push(`Trap designed to kill or capture creatures`)
            }else{
                this.descriptions.chambers.push(`Observation room, allowing guards or spectators 
                to observe creatures moving through the dungeon `)
            }
            
        }
    }

    purposeSwitchStation(){
        switch(this.purpose){
            case "Death trap":
                this.deathTrapDescriptions();
                break;
            case "Lair":
                break;
            case "Maze":
                break;
            case "Mine":
                break;
            case "Planar gate":
                break;
            case "Stronghold":
                break;
            case "Temple or shrine":
                break;
            case "Tomb":
                break;
            case "Treasure vault":
                break;
        }
    }
    
}




module.exports = MapDescription;