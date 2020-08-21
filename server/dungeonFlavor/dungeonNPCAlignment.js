const dice = require('../dice');

module.exports = ()=>{
    const dTwenty = dice.roll('1d20').result;

    if(dTwenty < 3){
        return "Lawful good";
    }else if(dTwenty < 5){
        return "Neutral good";
    }else if(dTwenty < 7){
        return "Chaotic good";
    }else if(dTwenty < 10){
        return "Lawful neutral";
    }else if(dTwenty < 12){
        return "Neutral";
    }else if(dTwenty === 12){
        return "Chaotic neutral";
    }else if(dTwenty < 16){
        return "Lawful evil";
    }else if(dTwenty < 19){
        return "Neutral evil";
    }else{
        return "Chaotic evil";
    }
}