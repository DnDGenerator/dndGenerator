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
    'archaeologist',
    'clan crafter',
    'smuggler',
    'shipwright',
    'fisher',
    'marine',
    'haunted'
]
const ravnicaGuilds = [
    'Golgari Swarm',
    'Azorius Senate',
    'House Dimir',
    'Cult of Rakdos',
    'Gruul Clans',
    'Selesnya Conclave',
    'Orzhov Syndicate',
    'Simic Combine',
    'Izzet League',
    'Boros Legion'
];
module.exports = (useRavnicaGuilds)=>{
    try{
        if(useRavnicaGuilds==='false'){
            return backgrounds[dice.roll(`1d${backgrounds.length}`).result - 1]
        }else{
            return ravnicaGuilds[dice.roll(`1d${ravnicaGuilds.length}`).result - 1]
        }
    }catch{
        console.log('oops we broke backgroundGen')
    }
}