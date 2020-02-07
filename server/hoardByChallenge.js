const dice = require('./dice');
const gems = require('./gemStones');
const arts = require('./artObjects');
const magicItems = require('./magicItemsByTable');


module.exports = (CR)=>{
    const precentileResult = dice.roll(`1d100`).result;
    const magicItemsArray = [];
    const gemsArray = [];
    const artsArray = [];


    if(CR < 5){
        const coins = {
            copper: dice.roll(`6d6`).result * 100,
            silver: dice.roll(`3d6`).result * 100,
            gold: dice.roll(`2d6`).result * 10
        }
        if(precentileResult < 7){
            return {coins};
        }else if(precentileResult < 17){
            const gemRolls = dice.roll(`2d6`).result;

            for(let i = 0; i < gemRolls; i++){
                gemsArray.push(gems("10gp"));
            }
        }else if(precentileResult < 27){
            const artRolls = dice.roll(`2d4`).result;

            for(let i = 0; i < artRolls; i++){
                artsArray.push(arts("25gp"));
            }
        }else if(precentileResult < 37){
            const gemRolls = dice.roll(`2d6`).result;

            for(let i = 0; i < gemRolls; i++){
                gemsArray.push(gems("50gp"));
            }
        }else if(precentileResult < 45){
            const gemRolls = dice.roll(`2d6`).result;
            const magicItemsRolls = dice.roll(`1d6`).result;
            for(let i = 0; i < gemRolls; i++){
                gemsArray.push(gems('10gp'));
            }
            for(let i = 0; i < magicItemsRolls; i++){
                magicItemsArray.push(magicItems('A'));
            }
        }else if(precentileResult < 53){
            const artRolls = dice.roll(`2d4`).result;
            const magicItemsRolls = dice.roll(`1d6`).result;
            for(let i = 0; i < artRolls; i++){
                artsArray.push(arts('25gp'));
            }
            for(let i = 0; i < magicItemsRolls; i++){
                magicItemsArray.push(magicItems('A'));
            }
        }else if(precentileResult < 61){
            const gemRolls = dice.roll(`2d6`).result;
            const magicItemsRolls = dice.roll(`1d6`).result;
            for(let i = 0; i < gemRolls; i++){
                gemsArray.push(gems('50gp'));
            }
            for(let i = 0; i < magicItemsRolls; i++){
                magicItemsArray.push(magicItems('A'));
            }
        }else if(precentileResult < 66){
            const gemRolls = dice.roll(`2d6`).result;
            const magicItemsRolls = dice.roll(`2d6`).result;

            for(let i = 0; i < gemRolls; i++){
                gemsArray.push(gems('10gp'));
            }
            for(let i = 0; i < magicItemsRolls; i++){
                magicItemsArray.push(magicItems('B'));
            }
        }else if(precentileResult < 71){
            const artRolls = dice.roll(`2d4`).result;
            const magicItemsRolls = dice.roll(`1d4`);

            for(let i = 0; i < artRolls; i++){
                artsArray.push(arts('25gp'));
            }
            for(let i = 0; i < magicItemsRolls; i++){
                magicItemsArray.push(magicItems('B'));
            }
        }else if(precentileResult < 76){
            const gemRolls = dice.roll(`2d6`).result;
            const magicItemsRolls = dice.roll(`1d4`).result;

            for(let i = 0; i < gemRolls; i++){
                gemsArray.push(gems('50gp'));
            }
            for(let i = 0; i < magicItemsRolls; i++){
                magicItemsArray.push(magicItems('B'));
            }
        }else if(precentileResult < 79){
            const gemRolls = dice.roll(`2d6`).result;
            const magicItemsRolls = dice.roll(`1d4`).result;

            for(let i = 0; i < gemRolls; i++){
                gemsArray.push(gems('10gp'));
            }
            for(let i = 0; i < magicItemsRolls; i++){
                magicItemsArray.push(magicItems('C'));
            }
        }else if(precentileResult < 81){
            const artRolls = dice.roll(`2d4`).result;
            const magicItemsRolls = dice.roll(`1d4`).result;

            for(let i = 0; i < artRolls; i ++){
                artsArray.push(arts('25gp')).result;
            }
            for(let i = 0; i < magicItemsRolls; i++){
                magicItemsArray.push(magicItems('C'));
            }
        }else if(precentileResult < 86){
            const gemRolls = dice.roll(`2d6`).result;
            const magicItemsRolls = dice.roll(`1d4`).result;

            for(let i = 0; i < gemRolls; i++){
                gemsArray.push(gems('50gp'));
            }
            for(let i = 0; i < magicItemsRolls; i++){
                magicItemsArray.push(magicItems('C'));
            }
        }else if(precentileResult < 93){
            const artRolls = dice.roll(`2d4`).result;
            const magicItemsRolls = dice.roll(`1d4`).result;

            for(let i = 0; i < artRolls; i++){
                artsArray.push(arts('25gp'));
            }
            for(let i = 0; i < magicItemsRolls; i++){
                magicItemsArray.push(magicItems('F'));
            }
        }else if(precentileResult < 98){
            const gemRolls = dice.roll(`2d6`).result;
            const magicItemsRolls = dice.roll(`1d4`).result;

            for(let i = 0; i < gemRolls; i++){
                gemsArray.push(gems('50gp'));
            }
            for(let i = 0; i< magicItemsRolls; i++){
                magicItemsArray.push(magicItems('F'));
            }
        }else if(precentileResult < 100){
            const artRolls = dice.roll(`2d4`).result;

            for(let i = 0; i < artRolls; i++){
                artsArray.push(arts('25gp'));
            }
            magicItemsArray.push(magicItems('G'));
        }else{
            const gemRolls = dice.roll(`2d5`).result;

            for(let i = 0; i < gemRolls; i++){
                gemsArray.push(gems('50gp'));
            }

            magicItemsArray.push(magicItems('G'));
            
        }
        return {coins, gemsArray, artsArray, magicItemsArray};
    }else if(CR < 11){

    }else if(CR < 17){

    }else{

    }
}