const dice = require('./dice');

module.exports = (challengeRating)=>{

    const precentileResult = dice.roll(`1d100`).result;

    if(challengeRating < 5){
        if(precentileResult < 31){
            return dice.roll(`5d6`).result + 'CP';
        }else if(precentileResult < 61){
            return dice.roll(`4d6`).result + 'SP';
        }else if(precentileResult < 71){
            return dice.roll(`3d6`).result + 'EP';
        }else if(precentileResult < 96){
            return dice.roll(`3d6`).result + 'GP';
        }else{
            return dice.roll(`1d6`).result + 'PP';
        }

    }else if(challengeRating < 11){
        if(precentileResult < 31){
            return (dice.roll(`4d6`).result * 100) + 'CP ' + (dice.roll(`1d6`).result * 10) + 'EP';
        }else if(precentileResult < 61){
            return (dice.roll(`6d6`).result * 10) + 'SP ' + (dice.roll(`2d6`).result * 10) + 'EP';
        }else if(precentileResult < 71){
            return (dice.roll(`3d6`).result * 10) + 'EP ' + (dice.roll(`2d6`).result * 10) + 'GP';
        }else if(precentileResult < 96){
            return (dice.roll(`4d6`).result * 10) + 'GP';
        }else{
            return (dice.roll(`2d6`).result *10) + 'GP ' + (dice.roll(`3d6`).result) + 'PP';
        }
    }else if(challengeRating < 17){
        if(precentileResult < 21){
            return (dice.roll(`4d6`).result * 100) + 'SP ' + (dice.roll(`1d6`).result * 100) + 'GP';
        }else if(precentileResult < 36){
            return (dice.roll(`1d6`).result * 100) + 'EP ' + (dice.roll(`1d6`).result * 100) + 'GP';
        }else if(precentileResult < 76){
            return (dice.roll(`2d6`).result * 100) + 'GP ' + (dice.roll(`1d6`).result * 10) + 'PP';
        }else{
            return (dice.roll(`2d6`).result * 100) + 'GP ' + (dice.roll(`2d6`).result * 10) + 'PP';
        }
    }else{
        if(precentileResult < 16){
            return (dice.roll(`2d6`).result * 1000) + 'EP ' + (dice.roll(`8d6`).result * 100) + 'GP';
        }else if(precentileResult < 56){
            return (dice.roll(`1d6`).result * 1000) + 'GP ' + (dice.roll(`1d6`).result * 100) + 'PP';
        }else{
            return (dice.roll(`1d6`).result * 1000) + 'GP ' + (dice.roll(`2d6`).result * 100) + 'PP';
        }

    }
}