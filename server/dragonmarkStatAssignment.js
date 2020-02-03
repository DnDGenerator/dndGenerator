module.exports = (characterOj)=>{

    switch(characterOj.subRace){
        case 'Mark of Detection':
        case 'Mark of Handling':
            characterOj.stats.wis += 2;
            var statlist = ['str','dex','con','int','cha'];
            var traitOne = statlist.splice((dice.roll(`1d${statlist.length}`).result - 1),1);
            characterObj.stats[traitOne[0]] += 1;
            break;
        case 'Mark of Finding':
            characterOj.stats.wis += 2;
            characterOj.stats.con += 1;
            break;
        case 'Mark of Healing':
            characterOj.stats.dex += 2;
            characterOj.stats.wis += 1;
            break;
        case 'Mark of Hospitality':
            characterOj.stats.dex += 2;
            characterOj.stats.cha += 1;
            break;
        case 'Mark of Making':
            characterOj.stats.int += 2;
            statlist = ['str','dex','con','wis','cha'];
            traitOne = statlist.splice((dice.roll(`1d${statlist.length}`).result - 1),1);
            characterObj.stats[traitOne[0]] += 1;
            break;
        case 'Mark of Passage':
            characterOj.stats.dex += 2;
            statlist = ['str','int','con','wis','cha'];
            traitOne = statlist.splice((dice.roll(`1d${statlist.length}`).result - 1),1);
            characterObj.stats[traitOne[0]] += 1;
            break;
        case 'Mark of Scribing':
            characterOj.stats.int += 2;
            characterOj.stats.cha += 1;
            break;
        case 'Mark of Sentinel':
            characterOj.stats.con += 2;
            characterOj.stats.wis += 1;
            break;
        case 'Mark of Shadow':
            characterOj.stats.dex += 2;
            characterOj.stats.cha += 1;
            break;
        case 'Mark of Storm':
            characterOj.stats.cha += 2;
            characterOj.stats.dex += 1;
            break;
        case 'Mark of Warding':
            characterOj.stats.con += 2;
            characterOj.stats.int += 1;
            break;
        default:
            break;
    }

    return characterOj;
}