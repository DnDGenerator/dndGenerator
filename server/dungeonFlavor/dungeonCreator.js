const dice = require('../dice');
<<<<<<< HEAD:server/dungeonFolder/dungeonCreator.js
const cults = require('./dungeonCultsAndReligious');
const npcClass = require('./dungeonNPCClass');
const npcAlignment = require('./dungeonNPCAlignment');
=======
const cults = require('../dungeonCultsAndReligious');
const npcClass = require('../dungeonNPCClass');
const npcAlignment = require('../dungeonNPCAlignment');
>>>>>>> ad505ab7442d700196b48c7c5ea763d18a8c9abf:server/dungeonFlavor/dungeonCreator.js
module.exports = ()=>{
    const dTwenty = dice.roll('1d20').result;

    if(dTwenty < 2){
        return "Beholder"
    }else if(dTwenty < 5){
        return cults();
    }else if(dTwenty < 9){
        return "Dwarves";
    }else if(dTwenty === 9){
        return "Elves (including drow)";
    }else if(dTwenty === 10){
        return "Giants";
    }else if(dTwenty === 11){
        return "Hobgoblins";
    }else if(dTwenty < 15){
        return npcAlignment() + ' human ' + npcClass();
    }else if(dTwenty === 15){
        return "Kobolds";
    }else if(dTwenty === 16){
        return "Kuo-toa";
    }else if(dTwenty === 17){
        return "Lich";
    }else if(dTwenty === 18){
        return "Mind flayers";
    }else if(dTwenty === 19){
        return "Yuan-ti";
    }else{
        return "No creator (natural caverns)"
    }
}