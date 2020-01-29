const dice = require('./dice');

const baseClasses = ['barbarian', 'bard', 'cleric', 'druid', 'fighter', 'monk', 'paladin', 'ranger', 'rogue', 'sorcerer', 'warlock', 'wizard', 'artificer'];

module.exports = ()=>{
    try{
    return baseClasses[dice.roll('1d13').result - 1];
    }
    catch{
        console.log('oops we messed up something in class generator')
    }
}