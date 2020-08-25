const dice = require('../dice');

module.exports = (baseRace, stats)=>{
    switch(baseRace){
        case 'dwarf':
            stats.con += 2;
            break;
        case 'halfling':
        case 'elf':
            stats.dex += 2;
            break;
        case 'human':
            stats.str += 1;
            stats.dex += 1;
            stats.con += 1;
            stats.int += 1;
            stats.wis += 1;
            stats.cha += 1;
            break;
        case 'dragonborn':
            stats.str += 2;
            stats.cha += 1;
            break;
        case 'gnome':
            stats.int += 2;
            break;
        case 'half-elf':
            stats.cha += 2;
            try{
                let statlist = ['str','dex','con','int','wis'];
                let traitOne = statlist.splice((dice.roll(`1d${statlist.length}`).result - 1),1);
                let traitTwo = statlist.splice((dice.roll(`1d${statlist.length}`).result - 1),1);
                stats[traitOne[0]] += 1;
                stats[traitTwo[0]] += 1;
            }
            catch{
                console.log('oops the half elf is missing some stuff ',traitTwo)
                halfElfBug = 'pick two attributes besides cha and add 1'
            }
            break;
        case 'half-orc':
            stats.str += 2;
            stats.con += 1;
            break;
        case 'tiefling':
            stats.cha += 2;
            break;
        case 'gith':
            stats.int += 1;
            break;
        case 'aasimar':
            stats.cha += 2;
            break;
        case 'firbolg':
            stats.wis += 2;
            stats.str += 1;
            break;
        case 'goliath':
            stats.str += 2;
            stats.con += 1;
            break;
        case 'kenku':
            stats.dex += 2;
            stats.wis += 1;
            break;
        case 'lizardfolk':
            stats.con += 2;
            stats.wis += 1;
            break;
        case 'tabaxi':
            stats.dex += 2;
            stats.cha += 1;
            break;
        case 'triton':
            stats.str += 1;
            stats.cha += 1;
            stats.con += 1;
            break;
        case 'bugbear':
            stats.str += 2;
            stats.dex += 1;
            break;
        case 'goblin':
            stats.dex += 2;
            stats.con += 1;
            break;
        case 'hobgoblin':
            stats.con += 2;
            stats.int += 1;
            break;
        case 'kobold':
            stats.dex += 2;
            stats.str -= 2;
            break;
        case 'orc':
            stats.str += 2;
            stats.con += 1;
            stats.int -= 2;
            break;
        case 'yuan-ti pureblood':
            stats.cha += 2;
            stats.int += 1;
            break;
        case 'tortle':
            stats.str += 2;
            stats.wis += 1;
            break;
        case 'grung':
            stats.dex += 2;
            stats.con += 1;
            break;
        case 'aarakocra':
            stats.dex += 2;
            stats.wis += 1;
            break;
        case 'genasi':
            stats.con += 2;
            break;
        case 'kalashtar':
            stats.wis +=2;
            stats.cha +=1;
            break;
        case 'warforged':
            stats.con +=2;
            statlist = ['str','dex','cha','int','wis'];
            traitOne = statlist.splice((dice.roll(`1d${statlist.length}`).result - 1),1);
            stats[traitOne[0]] += 1;
            break;
        case 'changeling':
            stats.cha +=2;
            statlist = ['str','dex','con','int','wis'];
            traitOne = statlist.splice((dice.roll(`1d${statlist.length}`).result - 1),1);
            stats[traitOne[0]] += 1;
            break;
    }
    return stats
}