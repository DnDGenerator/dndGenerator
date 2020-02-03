module.exports = (subRace, stats)=>{

    switch(subRace){
        case 'Mark of Detection':
        case 'Mark of Handling':
            stats.wis += 2;
            var statlist = ['str','dex','con','int','cha'];
            var traitOne = statlist.splice((dice.roll(`1d${statlist.length}`).result - 1),1);
            characterObj.stats[traitOne[0]] += 1;
            break;
        case 'Mark of Finding':
            stats.wis += 2;
            stats.con += 1;
            break;
        case 'Mark of Healing':
            stats.dex += 2;
            stats.wis += 1;
            break;
        case 'Mark of Hospitality':
            stats.dex += 2;
            stats.cha += 1;
            break;
        case 'Mark of Making':
            stats.int += 2;
            statlist = ['str','dex','con','wis','cha'];
            traitOne = statlist.splice((dice.roll(`1d${statlist.length}`).result - 1),1);
            characterObj.stats[traitOne[0]] += 1;
            break;
        case 'Mark of Passage':
            stats.dex += 2;
            statlist = ['str','int','con','wis','cha'];
            traitOne = statlist.splice((dice.roll(`1d${statlist.length}`).result - 1),1);
            characterObj.stats[traitOne[0]] += 1;
            break;
        case 'Mark of Scribing':
            stats.int += 2;
            stats.cha += 1;
            break;
        case 'Mark of Sentinel':
            stats.con += 2;
            stats.wis += 1;
            break;
        case 'Mark of Shadow':
            stats.dex += 2;
            stats.cha += 1;
            break;
        case 'Mark of Storm':
            stats.cha += 2;
            stats.dex += 1;
            break;
        case 'Mark of Warding':
            stats.con += 2;
            stats.int += 1;
            break;
        default:
            break;
    }

    return stats
}