const dice = require('./dice');

module.exports = (challengeRating)=>{

    const precentileResult = dice.roll(`1d100`).result;
    const coins = {
        platinum:0,
        gold:0,
        electrum:0,
        silver:0,
        copper:0
    }

    if(challengeRating < 5){
        if(precentileResult < 31){
            coins.copper = dice.roll(`5d6`).result;
        }else if(precentileResult < 61){
            coins.silver = dice.roll(`4d6`).result;
        }else if(precentileResult < 71){
            coins.electrum= dice.roll(`3d6`).result;
        }else if(precentileResult < 96){
            coins.gold = dice.roll(`3d6`).result;
        }else{
            coins.platinum = dice.roll(`1d6`).result;
        }
    }else if(challengeRating < 11){
        if(precentileResult < 31){
            coins.copper = dice.roll(`4d6`).result * 100;
            coins.electrum= dice.roll(`1d6`).result * 10;
        }else if(precentileResult < 61){
            coins.silver = dice.roll(`6d6`).result * 10
            coins.electrum =dice.roll(`2d6`).result * 10;
        }else if(precentileResult < 71){
            coins.electrum = dice.roll(`3d6`).result * 10;
            coins.gold = dice.roll(`2d6`).result * 10;
        }else if(precentileResult < 96){
            coins.gold = dice.roll(`4d6`).result * 10;
        }else{
            coins.gold = dice.roll(`2d6`).result * 10;
            coins.platinum = dice.roll(`3d6`).result;
        }
    }else if(challengeRating < 17){
        if(precentileResult < 21){
            coins.silver = dice.roll(`4d6`).result * 100;
            coins.gold = dice.roll(`1d6`).result * 100;
        }else if(precentileResult < 36){
            coins.electrum = dice.roll(`1d6`).result * 100;
            coins.gold = dice.roll(`1d6`).result * 100;
        }else if(precentileResult < 76){
            coins.gold = dice.roll(`2d6`).result * 100; 
            coins.platinum= dice.roll(`1d6`).result * 10;
        }else{
            coins.gold = dice.roll(`2d6`).result * 100;
            coins.platinum = dice.roll(`2d6`).result * 10;
        }
    }else{
        if(precentileResult < 16){
            coins.electrum = dice.roll(`2d6`).result * 1000;
            coins.gold = dice.roll(`8d6`).result * 100;
        }else if(precentileResult < 56){
            coins.gold = dice.roll(`1d6`).result * 1000;
            coins.platinum = dice.roll(`1d6`).result * 100;
        }else{
            coins.gold = dice.roll(`1d6`).result * 1000;
            coins.platinum = dice.roll(`2d6`).result * 100;
        }
    }
    return {coins};
}