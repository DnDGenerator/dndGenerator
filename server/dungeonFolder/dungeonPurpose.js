const dice = require('../dice');

module.exports = ()=>{
    const dTwenty = dice.roll(`1d20`).result;

    if(dTwenty === 1){
        return "Death trap";
    }else if(dTwenty < 6){
        return "Lair";
    }else if(dTwenty === 6){
        return "Maze";
    }else if(dTwenty < 10){
        return "Mine";
    }else if(dTwenty === 10){
        return "Planar gate";
    }else if(dTwenty < 15){
        return "Stronghold";
    }else if(dTwenty < 18){
        return "Temple or shrine";
    }else if(dTwenty < 20){
        return "Tomb";
    }else{
        return "Treasure vault";
    }
}