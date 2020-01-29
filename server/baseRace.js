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

module.exports = ()=>{
    try{
    return races[dice.roll(`1d${races.length}`).result - 1]
    }
    catch{
        console.log('oops we messed up something in baseRace')
    }
}