const dice = require('../dice');

module.exports = ()=>{
    const dTwenty = dice.roll('1d20').result;

    if(dTwenty === 1){
        return "Demon-worshiping cult";
    }else if(dTwenty === 2){
        return "Devil-worshiping cult";
    }else if(dTwenty < 5){
        return "Elemental Air cult";
    }else if(dTwenty < 7){
        return "Elemental Earth cult";
    }else if(dTwenty < 9){
        return "Elemental Fire cult";
    }else if(dTwenty < 11){
        return "Elemental Water cult";
    }else if(dTwenty < 16){
        return "Worshipers of an evil deity";
    }else if(dTwenty < 18){
        return "Worshipers of a good deity";
    }else{
        return "Worshipers of a neutral deity ";
    }
}