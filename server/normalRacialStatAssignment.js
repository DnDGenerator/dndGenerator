const dice = require('./dice');

module.exports = (characterObj)=>{
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
            characterObj.stats.cha += 2;
            try{
                let statlist = ['str','dex','con','int','wis'];
                let traitOne = statlist.splice((dice.roll(`1d${statlist.length}`).result - 1),1);
                let traitTwo = statlist.splice((dice.roll(`1d${statlist.length}`).result - 1),1);
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
        case 'kalashtar':
            characterObj.stats.wis +=2;
            characterObj.stats.cha +=1;
            break;
        case 'warforged':
            characterObj.stats.con +=2;
            statlist = ['str','dex','cha','int','wis'];
            traitOne = statlist.splice((dice.roll(`1d${statlist.length}`).result - 1),1);
            characterObj.stats[traitOne[0]] += 1;
            break;
        case 'changeling':
            characterObj.stats.cha +=2;
            statlist = ['str','dex','con','int','wis'];
            traitOne = statlist.splice((dice.roll(`1d${statlist.length}`).result - 1),1);
            characterObj.stats[traitOne[0]] += 1;
            break;
    }
    return characterObj;
}