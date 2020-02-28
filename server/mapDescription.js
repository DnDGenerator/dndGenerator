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
        this.lairDescription = this.lairDescription.bind(this);
        this.mazeDescription = this.mazeDescription.bind(this);
        this.mineDescription = this.mineDescription.bind(this);
        this.planarGateDescription = this.planarGateDescription.bind(this);
        this.strongholdDescription = this.strongholdDescription.bind(this);
        this.templeDescription = this.templeDescription.bind(this);
        this.tombDescription = this.tombDescription.bind(this);
        this.treasureVultDescription = this.treasureVultDescription.bind(this);

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
        
        for(let i = 0; i < this.numChambers; i++){
            this.purposeSwitchStation();    
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
    lairDescription(){
        for(let i = 0; i < this.numChambers; i++){
            const roll = this.dice.roll(`1d20`).result;
            if(roll === 1){
                this.descriptions.chambers.push('Armory stocked with weaponry and armor');
            }else if(roll === 2){
                this.descriptions.chambers.push("Audience chamber, used to recieve guests");
            }else if(roll === 3){
                this.descriptions.chambers.push("Banquet room for important celebrations");
            }else if(roll === 4){
                this.descriptions.chambers.push("Barracks where the lair's defenders are quartered");
            }else if(roll === 5){
                this.descriptions.chambers.push("Bedroom, for use by leaders");
            }else if(roll === 6){
                this.descriptions.chambers.push("Chapel where the lair's inhabitants worship");
            }else if(roll === 7){
                this.descriptions.chambers.push("Cistern or well for drinking water");
            }else if(roll < 10){
                this.descriptions.chambers.push("Guardroom for the defense of the lair");
            }else if(roll === 10){
                this.descriptions.chambers.push("Kennel for pets or guard beasts");
            }else if(roll === 11){
                this.descriptions.chambers.push("Kitchen for food storage and preperation");
            }else if(roll === 12){
                this.descriptions.chambers.push("Pen or prison where captivates are held");
            }else if(roll < 15){
                this.descriptions.chambers.push("Storage, mostly nonperishable goods");
            }else if(roll === 15){
                this.descriptions.chambers.push("Throne room where the lair's leaders hold court");
            }else if(roll === 16){
                this.descriptions.chambers.push("Torture chamber");
            }else if(roll === 17){
                this.descriptions.chambers.push("Training and exercise room");
            }else if(roll === 18){
                this.descriptions.chambers.push("Trophy room or museum");
            }else if(roll === 19){
                this.descriptions.chambers.push("Latrine or bath");
            }else{
                this.descriptions.chambers.push("Workshop for the construction of weapons, armor, tools, and other goods");
            }
        }
    }
    mazeDescription(){
        const roll = dice.roll(`1d20`).result;

        if(roll < 2){
            this.descriptions.chambers.push("Conjuring room, used to summon creatures that guard the maze");
        }else if(roll < 6){
            this.descriptions.chambers.push("Guardroom for sentinels that patrol the maze");
        }else if(roll < 11){
            this.descriptions.chambers.push("Lair for guard beasts that patrol the maze");
        }else if(roll === 11){
            this.descriptions.chambers.push("Pen or prision accessible only by secret door, used to hold captives condemned to the maze");
        }else if(roll === 12){
            this.descriptions.chambers.push("Shrine dedicated to a god or other entity");
        }else if(roll < 15){
            this.descriptions.chambers.push("Storage for food, as well as tools used by the maze's guardians to keep the complex in working order");
        }else if(roll < 19){
            this.descriptions.chambers.push("Trap to confound or kill those sent into the maze");
        }else if(roll === 19){
            this.descriptions.chambers.push("Well that provides drinking water");
        }else{
            this.descriptions.chambers.push("Workshop where doors, torch sconces, and other furnishings are repaired and maintained");
        }
    }
    mineDescription(){
        const roll = dice.roll(`1d20`).result;

        if(roll < 3){
            this.descriptions.chambers.push("Barracks for miners");
        }else if(roll === 3){
            this.descriptions.chambers.push("Bedroom for a supervisor or manager");
        }else if(roll === 4){
            this.descriptions.chambers.push("Chapel dedicated to a patron deity of miners, earth, or protection");
        }else if(roll === 5){
            this.descriptions.chambers.push("Cistern providing drinking water for miners");
        }else if(roll < 8){
            this.descriptions.chambers.push("Guardroom");
        }else if(roll === 8){
            this.descriptions.chambers.push("Kitchen used to feed workers");
        }else if(roll === 9){
            this.descriptions.chambers.push("Laboratory used to conduct tests on strange minerals extracted from the mine");
        }else if(roll < 16){
            this.descriptions.chambers.push("Lode where metal ore is mines (75 percent chance of being depeleted)");
        }else if(roll === 16){
            this.descriptions.chambers.push("Office used by the mine supervisor");
        }else if(roll === 17){
            this.descriptions.chambers.push("Smithy for repairing damaged tools");
        }else if(roll < 20){
            this.descriptions.chambers.push("Storage for tools and other equipment");
        }else{
            this.descriptions.chambers.push("Strong room or vault used to store ore for transport to the surface");
        }
    }
    planarGateDescription(){
        const roll = dice.roll(`1d100`).result;

        if(roll < 4){
            this.descriptions.chambers.push("Decorated foyer or antechamber");
        }else if(roll < 9){
            this.descriptions.chambers.push("Armory used by the portal's guardians");
        }else if(roll < 11){
            this.descriptions.chambers.push("Audience chamber for receiving vistors");
        }else if(roll < 20){
            this.descriptions.chambers.push("Barracks used by the portal's guards");
        }else if(roll < 24){
            this.descriptions.chambers.push("Bedroom for use by the high-ranking members of the order that guards the portal");
        }else if(roll < 31){
            this.descriptions.chambers.push("Chapel dedicated to a diety or deities related to the portal and its defenders");
        }else if(roll < 36){
            this.descriptions.chambers.push("Cistern providing fresh water");
        }else if(roll < 39){
            this.descriptions.chambers.push("Classroom for use of initiates learning about the portal's secrets");
        }else if(roll === 39){
            this.descriptions.chambers.push("Conjuring room for summoning creatures used to investigate or defend the portal");
        }else if(roll < 42){
            this.descriptions.chambers.push("Crypt where the remains of those that died guarding the portal are kept");
        }else if(roll < 48){
            this.descriptions.chambers.push("Dining room");
        }else if(roll < 51){
            this.descriptions.chambers.push("Divination room used to investigate the portal and events tied to it");
        }else if(roll < 56){
            this.descriptions.chambers.push("Dormitory for visitors guards");
        }else if(roll < 58){
            this.descriptions.chambers.push("Entry room or vestibule");
        }else if(roll < 60){
            this.descriptions.chambers.push("Gallery for displaying trophies and objects related to the portal and those that guard it");
        }else if(roll < 68){
            this.descriptions.chambers.push("Guardroom to protect or watch over the portal");
        }else if(roll < 73){
            this.descriptions.chambers.push("Kitchen");
        }else if(roll < 78){
            this.descriptions.chambers.push("Laboratory for conducting experiments relating to the portal and creatures that emerge from it");
        }else if(roll < 81){
            this.descriptions.chambers.push("Library holding books about the portal's history");
        }else if(roll < 86){
            this.descriptions.chambers.push("Pen or prision for holding captives or creatures that emerge from the portal");
        }else if(roll < 88){
            this.descriptions.chambers.push("Planar junction, where the gate to another plane once stood (25 percent chance of being active)");
        }else if(roll < 91){
            this.descriptions.chambers.push("Storage");
        }else if(roll === 91){
            this.descriptions.chambers.push("Strong room or wault, for guarding valuable treasures connected to the portal or funds used to pay the planar gate's guardians");
        }else if(roll < 94){
            this.descriptions.chambers.push("Study");
        }else if(roll === 94){
            this.descriptions.chambers.push("Torture chamber, for questioning creatures that pass through the portal or attempt to cladestinely use it");
        }else if(roll < 99){
            this.descriptions.chambers.push("Latrine or bath");
        }else{
            this.descriptions.chambers.push("Workshop for constructing tools and gear needed to study the portal");
        }
    }
    strongholdDescription(){
        const roll = dice.roll(`1d100`).result;

        if(roll < 3){
            this.descriptions.chambers.push("Antechamber where visitors seeking to the stronghold wait");
        }else if(roll < 6){
            this.descriptions.chambers.push("Armory holding high-quality gear, including siege weapons such as ballistas");
        }else if(roll === 6){
            this.descriptions.chambers.push("Audience chamber used by the master of the stronghold to receive vistors");
        }else if(roll === 7){
            this.descriptions.chambers.push("Aviary or zoo for keeping exotic creatures");
        }else if(roll < 12){
            this.descriptions.chambers.push("Banquet room for hosting celebrations and guests");
        }else if(roll < 16){
            this.descriptions.chambers.push("Barracks used by elite guards");
        }else if(roll === 16){
            this.descriptions.chambers.push("Bath outfitted with a marble floor and other luxurious accoutrements");
        }else if(roll === 17){
            this.descriptions.chambers.push("Bedroom for use by the stronghold's master or important guests");
        }else if(roll === 18){
            this.descriptions.chambers.push("Chapel dedicated to a deity associated with the stronghold's master");
        }else if(roll < 22){
            this.descriptions.chambers.push("Cistern providing drinking water");
        }else if(roll < 26){
            this.descriptions.chambers.push("Dining room for intimate gatherings or informal meals");
        }else if(roll === 26){
            this.descriptions.chambers.push("Dressing room featuring a number of wardrobes");
        }else if(roll < 30){
            this.descriptions.chambers.push("Gallery for the display of expensive works of art and trophies");
        }else if(roll < 33){
            this.descriptions.chambers.push("Game room used to entertain visitors");
        }else if(roll < 51){
            this.descriptions.chambers.push("Guardroom");
        }else if(roll === 51){
            this.descriptions.chambers.push("Kennel where monsters or trained animals that protect the stronghold are kepts");
        }else if(roll < 58){
            this.descriptions.chambers.push("Kitchen designed to prepare exotic foods for large numbers of guests");
        }else if(roll < 62){
            this.descriptions.chambers.push("Library with an extensive collection of rare books");
        }else if(roll === 62){
            this.descriptions.chambers.push("Lounge used to entertain guests");
        }else if(roll < 71){
            this.descriptions.chambers.push("Pantry, including cellar fo rwine or spirits");
        }else if(roll < 75){
            this.descriptions.chambers.push("Sitting room for family and initmate guests");
        }else if(roll < 79){
            this.descriptions.chambers.push("Stable");
        }else if(roll < 87){
            this.descriptions.chambers.push("Storage of mundane goods supplies");
        }else if(roll === 87){
            this.descriptions.chambers.push("Storage room or vault for protecting important treasures (757 percent chance of behing hidden behind a secret door)");
        }else if(roll < 93){
            this.descriptions.chambers.push("Study, including a writing desk");
        }else if(roll === 93){
            this.descriptions.chambers.push("Throne room, elaborately decorated");
        }else if(roll < 97){
            this.descriptions.chambers.push("waiting room where lesser guests are held before receiving an audience");
        }else if(roll < 99){
            this.descriptions.chambers.push("Latrine or bath");
        }else{
            this.descriptions.chambers.push("Crypt belonging to the stronghold's master or someone else of importance");
        }
    }
    templeDescription(){
        const roll = dice.roll(`1d100`).result;

        if(roll < 4){
            this.descriptions.chambers.push("Armory filled with weapons and armor, battle banners, and pennants");
        }else if(roll < 6){
            this.descriptions.chambers.push("Audience chamber where priests of the temple receive commonors and low-ranking visitors");
        }else if(roll < 8){
            this.descriptions.chambers.push("Banquet room used for celebrations and holy days");
        }else if(roll < 11){
            this.descriptions.chambers.push("Barracks for the temple's military arm or its hired guards");
        }else if(roll < 15){
            this.descriptions.chambers.push("Cells where the faithful can sit in quiet contemplation");
        }else if(roll < 25){
            this.descriptions.chambers.push("Central temple built to accommodate rituals");
        }else if(roll < 29){
            this.descriptions.chambers.push("Chapel dedicated to a lesser deity associated with the temple's major deity");
        }else if(roll < 32){
            this.descriptions.chambers.push("Classroom used to train initiates and priests");
        }else if(roll < 35){
            this.descriptions.chambers.push("Conjuring room, specially sanctified and used to summon extraplanar creatures");
        }else if(roll < 41){
            this.descriptions.chambers.push("Crypt for a high priest or similar figure, hidden and heavily guarded by creatures and traps");
        }else if(roll < 43){
            this.descriptions.chambers.push("Dining room (large) for the temple's servants and lesser priests");
        }else if(roll === 43){
            this.descriptions.chambers.push("Dining room (small) for the temple's high priests");
        }else if(roll < 47){
            this.descriptions.chambers.push("Divination room, inscribed with runes and stocked with soothsaying implements");
        }else if(roll < 51){
            this.descriptions.chambers.push("Dormitory for lesser priests and students");
        }else if(roll < 57){
            this.descriptions.chambers.push("Guardroom");
        }else if(roll === 57){
            this.descriptions.chambers.push("Kennel for animals or monsters associated with the temple's deity");
        }else if(roll < 61){
            this.descriptions.chambers.push("Kitchen (might bear a disturbing resemblance to a torture chambe in an evil temple)");
        }else if(roll < 66){
            this.descriptions.chambers.push("Library, well stocked with religious treatises");
        }else if(roll < 69){
            this.descriptions.chambers.push("Prison for captuared enemies (in good or neutral temples) or those designated as sacrifices(in evil temples)");
        }else if(roll < 74){
            this.descriptions.chambers.push("Robing room containing ceremonial outfits and items");
        }else if(roll === 74){
            this.descriptions.chambers.push("Stable for riding horses and mounts belonging to the temple or for visiting messengers and caravans");
        }else if(roll < 80){
            this.descriptions.chambers.push("Storage holding mundane supplies");
        }else if(roll === 80){
            this.descriptions.chambers.push("Strong room or vault holding important relics and ceremonial items, heavily trapped");
        }else if(roll < 83){
            this.descriptions.chambers.push("Torture chamber, used in inquistions (in good or neutral temples with a lawful bent) or for sheer joy of causing pain(evil temple)") ;
        }else if(roll < 90){
            this.descriptions.chambers.push("Trophy room where art celebrating key figures and events from mythology is displayed");
        }else if(roll === 90){
            this.descriptions.chambers.push("Latrine or bath");
        }else if(roll < 95){
            this.descriptions.chambers.push("Well for drinking water, defendable in the case of attack or siege");
        }else{
            this.descriptions.chambers.push("Workshop for repairing or creating weapons, religious items, and tools");
        }
    }
    tombDescription(){
        const roll = dice.roll(`1d20`).result;

        if(roll === 1){
            this.descriptions.chambers.push("Antechamber for those that have come to pay respect to the dead or prepare themselves for burial rituals");
        }else if(roll < 4){
            this.descriptions.chambers.push("Chapel dedicated to deities that watch over the dead and protect their resting places");
        }else if(roll < 9){
            this.descriptions.chambers.push("Crypt for less important burials");
        }else if(roll === 9){
            this.descriptions.chambers.push("Divination room, used in rituals to contact the dead for guidance");
        }else if(roll === 10){
            this.descriptions.chambers.push("False crypt (trapped) to kill or capture thieves");
        }else if(roll === 11){
            this.descriptions.chambers.push("Gallery to display the deeds of the deceased through trophies, statues, paintings and so forth");
        }else if(roll === 12){
            this.descriptions.chambers.push("Grand crypt for a noble, high priest, or other important individual");
        }else if(roll < 15){
            this.descriptions.chambers.push("Guardroom, usually guarded by undead, constructs, or other creatures that don't need to eat or sleep");
        }else if(roll === 15){
            this.descriptions.chambers.push("Robing room for priests to prepare for burial rituals");
        }else if(roll < 18){
            this.descriptions.chambers.push("Storage, stocked with tools for maintaining the tomb and preparing the dead for burial");
        }else if(roll === 18){
            this.descriptions.chambers.push("Tomb where the wealthiest and most important folk are interred, protected by secret doors and traps");
        }else{
            this.descriptions.chambers.push("Workshop for embalming the dead");
        }
    }
    treasureVultDescription(){
        const roll = dice.roll(`1d20`).result;

        if(roll === 1){
            this.descriptions.chambers.push("Antechamber for visiting dignitaries");
        }else if(roll === 2){
            this.descriptions.chambers.push("Armory containing mundane and magic gear used by the treasure vaul'ts guards");
        }else if(roll < 5){
            this.descriptions.chambers.push("Barracks for guards");
        }else if(roll === 5){
            this.descriptions.chambers.push("Cistern providing fresh water");
        }else if(roll < 10){
            this.descriptions.chambers.push("Guardroom to defend against intruders");
        }else if(roll === 10){
            this.descriptions.chambers.push("Kennel for trained beasts to guard the treasure vault");
        }else if(roll === 11){
            this.descriptions.chambers.push("Kitchen for feeding guards");
        }else if(roll === 12){
            this.descriptions.chambers.push("Watch room that allows guards to observe those who approach the dungeon");
        }else if(roll === 13){
            this.descriptions.chambers.push("Prison for holding captured intruders");
        }else if(roll < 16){
            this.descriptions.chambers.push("Strong room or vault, for guarding the treasure hidden in the dungeon, accessible only by locked or secret door");
        }else if(roll === 16){
            this.descriptions.chambers.push("Torture chamber for extracting information from captured intruders");
        }else{
            this.descriptions.chambers.push("Trap or other trick designed to kill or capture creatures that enter the dungeon " + this.randomTraps());
        }
    }
    purposeSwitchStation(){
        switch(this.purpose){
            case "Death trap":
                this.deathTrapDescriptions();
                break;
            case "Lair":
                this.lairDescription();
                break;
            case "Maze":
                this.mazeDescription();
                break;
            case "Mine":
                this.mineDescription();
                break;
            case "Planar gate":
                this.planarGateDescription();
                break;
            case "Stronghold":
                this.strongholdDescription();
                break;
            case "Temple or shrine":
                this.templeDescription();
                break;
            case "Tomb":
                this.tombDescription();
                break;
            case "Treasure vault":
                this.treasureVultDescription()
                break;
        }
    }
    
}




module.exports = MapDescription;