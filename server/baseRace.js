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
module.exports = ({includeRavnica, includeEberron})=>{
    try{
        if(includeRavnica==='true'){
            races.concat(ravnica);
        }
        if(includeEberron==='true'){
            races.concat(eberron);
        }
        return races[dice.roll(`1d${races.length}`).result - 1]
    }
    catch{
        console.log('oops we messed up something in baseRace')
    }
}