const dice = require('../dice');

module.exports = ()=>{
    const dTwenty = dice.roll(`1d20`).result;

    if(dTwenty < 4){
        return "Abandoned by creators";
    }else if(dTwenty === 4){
        return "Abandoned due to plague";
    }else if(dTwenty < 9){
        return "Conquered by invaders";
    }else if(dTwenty < 11){
        return "Creators destroyed by attacking raiders";
    }else if(dTwenty === 11){
        return "Creators destroyed by discovery made within the site";
    }else if(dTwenty === 12){
        return "Creators destroyed by internal conflict";
    }else if(dTwenty === 13){
        return "Creators destroyed by magical catastrophe";
    }else if(dTwenty < 16){
        return "Creators destroyed by natural disaster";
    }else if(dTwenty === 16){
        return "Location cursed by the gods and shunned";
    }else if(dTwenty < 19){
        return "Original creator still in control";
    }else if(dTwenty === 19){
        return "Overrun by planar creatures";
    }else{
        return "Site of a great miracle";
    }
}