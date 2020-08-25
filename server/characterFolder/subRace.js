const dice = require('../dice')

module.exports = (baseRace, eberronOrNot)=>{
    let options = []
    if(eberronOrNot === 'false'){
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
                    {'githyanki':'str'},
                    {'githzerai':'wis'}
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
                break;
            case 'shifter':
                options = [
                    {'beasthide':['con', 'str'],},
                    {'longtooth':['str', 'dex']},
                    {'swiftstride':['dex','cha']},
                    {'wildhunt':['wis', 'dex']}
                ]
                break;
            default:
                return {'noSubrace':null}
        }
    }else{
        switch(baseRace){
            case 'half-elf':
                options=[
                    {'Mark of Detection':null},
                    {'Mark of Storm':null}
                ]
                break;
            case 'half-orc':
                options=[
                    {'Mark of Finding':null}
                ]
                break;
            case 'human':
                options=[
                    {'Mark of Finding':null},
                    {'Mark of Handling':null},
                    {'Mark of Making':null},
                    {'Mark of Passage':null},
                    {'Mark of Sentinel':null}
                ]
                break;
            case 'halfling':
                options=[
                    {'Mark of Healing':null},
                    {'Mark of Hospitality':null}
                ]
                break;
            case 'gnome':
                options=[
                    {'Mark of Scribing':null}
                ]
                break;
            case 'elf':
                options=[
                    {'Mark of Shadow':null}
                ]
                break;
            case 'dwarf':
                options=[
                    {'Mark of Warding':null}
                ]
                break;
            default:
                return {'noSubrace':null}
        }
    }
    try{
        console.log(options)
        return options[dice.roll(`1d${options.length}`).result - 1]
    }catch{
        console.log('oops we crashed the subRace')
    }
}