const stats = require('./generator');
const baseClass = require('./classGenerator');
const background = require('./backgroundGen');
const race = require('./baseRace');
const subRace = require('./subRace');
const classicRoller = require('./classicGenerator')
const dice = require('./dice');

const characterCreator = ({eberronInclude, ravnicaInclude, classicRolls})=>{
    const characterObj = {};
    console.log(!classicRolls)
    if(classicRolls === 'false'){
        characterObj.stats = classicRoller()
    }else{
        characterObj.stats = stats();
    }
    
    characterObj.baseClass = baseClass();
    characterObj.background = background(ravnicaInclude);
    characterObj.baseRace = race();
    const subRaceObj = subRace(characterObj.baseRace, eberronInclude)
    for (let key in subRaceObj){
        if(key !== 'noSubrace'){
            characterObj.subRace = key;            
        }
    }
    characterObj.originalStats = {
        'str':characterObj.stats.str,
        'dex':characterObj.stats.dex,
        'con':characterObj.stats.con,
        'int':characterObj.stats.int,
        'wis':characterObj.stats.wis,
        'cha':characterObj.stats.cha
    }
    switch(characterObj.baseRace){
        case 'dwarf':
            characterObj.stats.con += 2;
            break;
        case 'halfling':
        case 'elf':
            characterObj.stats.dex += 2;
            break;
        case 'human':
            characterObj.stats.str += 1;
            characterObj.stats.dex += 1;
            characterObj.stats.con += 1;
            characterObj.stats.int += 1;
            characterObj.stats.wis += 1;
            characterObj.stats.cha += 1;
            break;
        case 'dragonborn':
            characterObj.stats.str += 2;
            characterObj.stats.cha += 1;
            break;
        case 'gnome':
            characterObj.stats.int += 2;
            break;
        case 'half-elf':
            //will need to take care of ebeeron here
            characterObj.stats.cha += 2;
            
            try{
                var statlist = ['str','dex','con','int','wis'];
                var traitOne = statlist.splice((dice.roll(`1d${statlist.length}`).result - 1),1);
                var traitTwo = statlist.splice((dice.roll(`1d${statlist.length}`).result - 1),1);
                characterObj.stats[traitOne[0]] += 1;
                characterObj.stats[traitTwo[0]] += 1;
            }
            catch{
                console.log('oops the half elf is missing some stuff ',traitTwo)
                characterObj.halfElfBug = 'pick two attributes besides cha and add 1'
            }
            break;
        case 'half-orc':
            characterObj.stats.str += 2;
            characterObj.stats.con += 1;
            break;
        case 'tiefling':
            characterObj.stats.cha += 2;
            break;
        case 'gith':
            characterObj.stats.int += 1;
            break;
        case 'aasimar':
            characterObj.stats.cha += 2;
            break;
        case 'firbolg':
            characterObj.stats.wis += 2;
            characterObj.stats.str += 1;
            break;
        case 'goliath':
            characterObj.stats.str += 2;
            characterObj.stats.con += 1;
            break;
        case 'kenku':
            characterObj.stats.dex += 2;
            characterObj.stats.wis += 1;
            break;
        case 'lizardfolk':
            characterObj.stats.con += 2;
            characterObj.stats.wis += 1;
            break;
        case 'tabaxi':
            characterObj.stats.dex += 2;
            characterObj.stats.cha += 1;
            break;
        case 'triton':
            characterObj.stats.str += 1;
            characterObj.stats.cha += 1;
            characterObj.stats.con += 1;
            break;
        case 'bugbear':
            characterObj.stats.str += 2;
            characterObj.stats.dex += 1;
            break;
        case 'goblin':
            characterObj.stats.dex += 2;
            characterObj.stats.con += 1;
            break;
        case 'hobgoblin':
            characterObj.stats.con += 2;
            characterObj.stats.int += 1;
            break;
        case 'kobold':
            characterObj.stats.dex += 2;
            characterObj.stats.str -= 2;
            break;
        case 'orc':
            characterObj.stats.str += 2;
            characterObj.stats.con += 1;
            characterObj.stats.int -= 2;
            break;
        case 'yuan-ti pureblood':
            characterObj.stats.cha += 2;
            characterObj.stats.int += 1;
            break;
        case 'tortle':
            characterObj.stats.str += 2;
            characterObj.stats.wis += 1;
            break;
        case 'grung':
            characterObj.stats.dex += 2;
            characterObj.stats.con += 1;
            break;
        case 'aarakocra':
            characterObj.stats.dex += 2;
            characterObj.stats.wis += 1;
            break;
        case 'genasi':
            characterObj.stats.con += 2;
            break;
    }
    try{
        for (let key in subRaceObj){
            
            if(key === 'mountain' || characterObj.baseRace === 'gith'){
                characterObj.stats[subRaceObj[key]] += 2;
            }
            else if(key !== 'noSubrace'){
                characterObj.stats[subRaceObj[key]] += 1;
            }
        }
    }catch{
        console.log('i guess there is something wrong here as well')
    }
    return characterObj
}

module.exports = characterCreator;