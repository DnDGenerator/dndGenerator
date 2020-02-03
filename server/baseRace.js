const dice = require('./dice');

const races = [
    'dwarf',
    'elf',
    'human',
    'halfling',
    'gnome',
    'dragonborn',
    'tiefling',
    'half-elf',
    'half-orc',
    'gith',
    'aasimar',
    'firbolg',
    'goliath',
    'kenku',
    'lizardfolk',
    'tabaxi',
    'triton',
    'yuan-ti pureblood',
    'orc',
    'kobold',
    'hobgoblin',
    'goblin',
    'bugbear',
    'tortle',
    'grung',
    'aarakocra',
    'genasi'
];
const eberron = [
    'warforged',
    'changeling',
    'shifter',
    'kalashtar'
];
const ravnica = [
    'minotaur',
    'loxodon',
    'simic hybrid',
    'centaur',
    'vedalken'
]
module.exports = (eberronDragonMark, includeEberron, includeRavnica)=>{
    try{
        console.log(includeRavnica)
        if(includeRavnica==='true'){
            races.concat(ravnica);
            console.log(races)
        }
        if(includeEberron==='true'){
            races.concat(eberron);
        }
        if(eberronDragonMark==='true'){
            const dragonmarkOptions=[
                'dwarf',
                'elf',
                'human',
                'halfling',
                'gnome',
                'half-orc',
                'half-elf'
            ]
            return dragonmarkOptions[dice.roll(`1d${dragonmarkOptions.length}`).result - 1];
        }
        return races[dice.roll(`1d${races.length}`).result - 1]
    }
    catch{
        console.log('oops we messed up something in baseRace')
    }
}