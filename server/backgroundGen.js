const dice = require('./dice')

const backgrounds = [
    'acolyte',
    'charlatan',
    'criminal',
    'entertainer',
    'folk hero',
    'gladiator',
    'guild artisan',
    'guild merchant',
    'hermit',
    'knight',
    'noble',
    'outlander',
    'pirate',
    'sage',
    'sailor',
    'soldier',
    'spy',
    'urchin',
    'anthropologist',
    'archaeologist'
]

module.exports = ()=>{
    try{
    return backgrounds[dice.roll(`1d${backgrounds.length}`).result - 1]
    }catch{
        console.log('oops we broke backgroundGen')
    }
}