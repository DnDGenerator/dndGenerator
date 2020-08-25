const dice = require('../dice');

module.exports = ()=>{
    const dTwenty = dice.roll('1d20').result;


    if(dTwenty === 1){
        return "Barbarian";
    }else if(dTwenty === 2){
        return "Bard";
    }else if(dTwenty < 5){
        return "Cleric";
    }else if(dTwenty === 5){
        return "Druid";
    }else if(dTwenty < 8){
        return "Fighter";
    }else if(dTwenty === 8){
        return "Monk";
    }else if(dTwenty === 9){
        return "Paladin";
    }else if(dTwenty === 10){
        return "Ranger";
    }else if(dTwenty < 15){
        return "Rogue";
    }else if(dTwenty === 15){
        return "Sorcerer";
    }else if(dTwenty === 16){
        return "Warlock";
    }else if(dTwenty === 17){
        return "Artificer";
    }else {
        return "Wizard";
    }
}