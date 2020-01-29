const dice = require('./dice')

module.exports = (baseRace)=>{
    let options = []
    switch(baseRace){
        case 'dwarf':
            options = [
                {'hill':'wis'},
                {'mountain':'str'},
                {'duergar':'str'}
                ]
            break;
        case 'elf':
            options = [
                {'high':'int'},
                {'wood':'wis'}, 
                {'drow':'cha'},
                {'eladrin':'cha'},
                {'sea':'con'},
                {'shadar-kai':'con'}
            ]
            break;
        case 'halfling':
            options = [
                {'lightfoot':'cha'}, 
                {'stout':'con'}
            ]
            break;
        case 'gnome':
            options = [
                {'forest':'dex'},
                {'rock':'con'},
                {'deep':'dex'}
            ]
            break;            
        case 'tiefling':
            options = [
                {'Asmodeus':'int'},
                {'Baalzebul':'int'},
                {'Dispater':'dex'},
                {'Fierna':'wis'},
                {'Glasya':'dex'},
                {'Levistus':'con'},
                {'Mammon':'int'},
                {'Mephistopheles':'int'},
                {'Zariel':'str'}
            ]
            break;
        case 'gith':
            options = [
                {'gityanki':'str'},
                {'gitzerai':'wis'}
            ]
            break;
        case 'genasi':
            options = [
                {'air':'dex'},
                {'earth':'str'},
                {'fire':'int'},
                {'water':'wis'}
            ]
            break;
        case 'aasimar':
            options = [
                {'protector':'wis'},
                {'scourge':'con'},
                {'fallen':'str'}
            ]
        default:
            return {'noSubrace':'noSubrace'}
    }
    try{
        return options[dice.roll(`1d${options.length}`).result - 1]
    }catch{
        console.log('oops we crashed the subRace')
    }
}