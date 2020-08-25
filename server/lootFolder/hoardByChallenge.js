const dice = require('../dice');
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
            gold: dice.roll(`2d6`).result * 10,
            platinum:0,
            electrum:0,
        }
        if(precentileResult < 7){
            console.log('do nothing!');
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
        const coins = {
            copper: dice.roll(`2d6`).result * 100,
            silver: dice.roll(`2d6`).result * 1000,
            gold: dice.roll(`6d6`).result * 100,
            platinum: dice.roll(`3d6`).result * 10,
            electrum:0
        };
        const artRolls = dice.roll(`2d4`).result;
        const gemRolls = dice.roll(`3d6`).result;
        const dSixMagicRoll = dice.roll(`1d6`).result;
        const dFourMagicRoll = dice.roll(`1d4`).result;
        if(precentileResult < 5){
            console.log('do nothing!');
        }else if(precentileResult < 11){
            for(let i = 0; i < artRolls; i++){
                artsArray.push(arts(`25gp`));
            }
        }else if(precentileResult < 17){
            for(let i = 0; i < gemRolls; i++){
                gemsArray.push(gems(`50gp`));
            }
        }else if(precentileResult < 23){
            for(let i = 0; i < gemRolls; i++){
                gemsArray.push(gems('100gp'));
            }
        }else if(precentileResult < 29){
            for(let i = 0; i < artRolls; i++){
                artsArray.push(arts(`250gp`))
            }
        }else if(precentileResult < 33){
            for(let i = 0; i < artRolls; i++){
                artsArray.push(arts(`25gp`));
            }
            for(let i = 0; i < dSixMagicRoll; i++){
                magicItemsArray.push(magicItems('A'));
            }
        }else if(precentileResult < 37){
            for(let i = 0; i < gemRolls; i++){
                gemsArray.push(gems(`50gp`));
            }
            for(let i = 0; i < dSixMagicRoll; i++){
                magicItemsArray.push(magicItems('A'));
            }
        }else if(precentileResult < 41){
            for(let i = 0; i < gemRolls; i++){
                gemsArray.push(gems(`100gp`));
            }
            for(let i = 0; i < dSixMagicRoll; i++){
                magicItemsArray.push(magicItems('A'));
            }
        }else if(precentileResult < 45){
            for(let i = 0; i < artRolls; i++){
                artsArray.push(arts(`250gp`));
            }
            for(let i = 0; i < dSixMagicRoll; i++){
                magicItemsArray.push(magicItems(`A`));
            }
        }else if(precentileResult < 50){
            for(let i = 0; i < artRolls; i++){
                artsArray.push(arts('25gp'));
            }
            for(let i = 0; i < dFourMagicRoll; i++){
                magicItemsArray.push(magicItems('B'));
            }
        }else if(precentileResult < 55){
            for(let i = 0; i < gemRolls; i++){
                gemsArray.push(gems('50gp'));
            }
            for(let i = 0; i < dFourMagicRoll; i++){
                magicItemsArray.push(magicItems('B'));
            }
        }else if(precentileResult < 60){
            for(let i = 0; i < gemRolls; i++){
                gemsArray.push(gems('100gp'));
            }
            for(let i = 0; i < dFourMagicRoll; i++){
                magicItemsArray.push(magicItems('B'));
            }
        }else if(precentileResult < 64){
            for(let i = 0; i < artRolls; i++){
                artsArray.push(arts('250gp'))
            }
            for(let i = 0; i < dFourMagicRoll; i++){
                magicItemsArray.push(magicItems('B'));
            }
        }else if(precentileResult < 67){
            for(let i = 0; i < artRolls; i++){
                artsArray.push(arts('25gp'));
            }
            for(let i = 0; i < dFourMagicRoll; i++){
                magicItemsArray.push(magicItems('C'));
            }
        }else if(precentileResult < 70){
            for(let i = 0; i < gemRolls; i++){
                gemsArray.push(gems('50gp'));
            }
            for(let i = 0; i < dFourMagicRoll; i++){
                magicItemsArray.push(magicItems('C'));
            }
        }else if(precentileResult < 73){
            for(let i = 0; i < gemRolls; i++){
                gemsArray.push(gems('100gp'));
            }
            for(let i = 0; i< dFourMagicRoll; i++){
                magicItemsArray.push(magicItems('C'));
            }
        }else if(precentileResult < 75){
            for(let i = 0; i < artRolls; i++){
                artsArray.push(arts('250gp'));
            }
            for(let i = 0; i < dFourMagicRoll; i++){
                magicItemsArray.push(magicItems('C'));
            }
        }else if(precentileResult < 77){
            for(let i = 0; i < artRolls; i++){
                artsArray.push(arts('25gp'));
            }
            magicItemsArray.push(magicItems('D'));
        }else if(precentileResult < 79){
            magicItemsArray.push(magicItems('D'));
            for(let i = 0; i < gemRolls; i++){
                gemsArray.push(gems('50gp'));
            }
        }else if(precentileResult === 79){
            for(let i = 0; i < gemRolls; i++){
                gemsArray.push(gems('100gp'));
            }
            magicItemsArray.push(magicItems('D'));
        }else if(precentileResult === 80){
            for(let i = 0; i < artRolls; i++){
                artsArray.push(arts('250gp'));
            }
            magicItemsArray.push(magicItems('D'));
        }else if(precentileResult < 85){
            for(let i = 0; i < artRolls; i++){
                artsArray.push(arts('25gp'));
            }
            for(let i = 0; i < dFourMagicRoll; i++){
                magicItemsArray.push(magicItems('F'));
            }
        }else if(precentileResult < 89){
            for(let i = 0; i < gemRolls; i++){
                gemsArray.push(gems('50gp'));
            }
            for(let i = 0; i < dFourMagicRoll; i++){
                magicItemsArray.push(magicItems('F'));
            }
        }else if(precentileResult < 92){
            for(let i = 0; i < gemRolls; i++){
                gemsArray.push(gems('100gp'));
            }
            for(let i = 0; i < dFourMagicRoll; i++){
                magicItemsArray.push(magicItems('F'));
            }
        }else if(precentileResult < 95){
            for(let i= 0; i < artRolls; i++){
                artsArray.push(arts('250gp'));
            }
            for(let i = 0; i < dFourMagicRoll; i++){
                magicItemsArray.push(magicItems('F'));
            }
        }else if(precentileResult < 97){
            for(let i = 0; i < gemRolls; i++){
                gemsArray.push(gems('100gp'));
            }
            for(let i = 0; i < dFourMagicRoll; i++){
                magicItemsArray.push(magicItems('G'));
            }
        }else if(precentileResult < 99){
            for(let i = 0; i < dFourMagicRoll; i++){
                magicItemsArray.push(magicItems('G'));
            }
            for(let i = 0; i < artRolls; i++){
                artsArray.push(arts('250gp'))
            }
        }else if(precentileResult === 99){
            for(let i = 0; i < gemRolls; i++){
                gemsArray.push(gems('100gp'));
            }
            magicItemsArray.push(magicItems('H'));
        }else{
            for(let i = 0; i < artRolls; i++){
                artsArray.push(arts('250gp'));
            }
            magicItemsArray.push(magicItems('H'));
        }
        return {coins, gemsArray, artsArray, magicItemsArray};
    }else if(CR < 17){
        const coins ={
            electrum:0,
            silver:0,
            copper:0,
            gold: dice.roll(`4d6`).result * 1000,
            platinum: dice.roll(`5d6`).result * 100,
            
        };
        const artRolls = dice.roll(`2d4`).result;
        const gemRolls = dice.roll(`3d6`).result;
        const dSixMagicRoll = dice.roll(`1d6`).result;
        const dFourMagicRoll = dice.roll(`1d4`).result;

        if(precentileResult < 4){
            console.log('do nothing!')
        }else if(precentileResult < 7){
            for(let i = 0; i < artRolls; i++){
                artsArray.push(arts(`250gp`))
            }
        }else if(precentileResult < 10){
            for(let i = 0; i < artRolls; i++){
                artsArray.push(arts('750gp'));
            }
        }else if(precentileResult < 13){
            for(let i = 0; i < gemRolls; i++){
                gemsArray.push(gems('500gp'));
            }
        }else if(precentileResult < 16){
            for(let i = 0; i < gemRolls; i++){
                gemsArray.push(gems('1000gp'))
            }
        }else if(precentileResult < 20){
            for(let i = 0; i < artRolls; i++){
                artsArray.pus(arts('250gp'));
            }
            for(let i = 0; i < dFourMagicRoll; i++){
                magicItemsArray.push(magicItems('A'));
            }
            for(let i = 0; i < dSixMagicRoll; i++){
                magicItemsArray.push(magicItems('B'))
            }
        }else if(precentileResult < 24){
            for(let i = 0; i < dFourMagicRoll; i++){
                magicItemsArray.push(magicItems('A'));
            }
            for(let i = 0; i < dSixMagicRoll; i++){
                magicItemsArray.push(magicItems('B'))
            }
            for(let i = 0; i < artRolls; i++){
                artsArray.push(arts('750gp'));
            }
        }else if(precentileResult < 27){
            for(let i = 0; i < dFourMagicRoll; i++){
                magicItemsArray.push(magicItems('A'));
            }
            for(let i = 0; i < dSixMagicRoll; i++){
                magicItemsArray.push(magicItems('B'))
            }
            for(let i = 0; i < gemRolls; i++){
                gemsArray.push(gems('500gp'));
            }
        }else if(precentileResult < 30){
            for(let i = 0; i < dFourMagicRoll; i++){
                magicItemsArray.push(magicItems('A'));
            }
            for(let i = 0; i < dSixMagicRoll; i++){
                magicItemsArray.push(magicItems('B'))
            }
            for(let i = 0; i < gemRolls; i++){
                gemsArray.push(gems('1000gp'));
            }
        }else if(precentileResult < 36){
            for(let i = 0; i < dSixMagicRoll; i++){
                magicItemsArray.push(magicItems('C'));
            }
            for(let i = 0; i < artRolls; i++){
                artsArray.push(arts('250gp'));
            }
        }else if(precentileResult < 41){
            for(let i = 0; i < dSixMagicRoll; i++){
                magicItemsArray.push(magicItems('C'));
            }
            for(let i = 0; i < artRolls; i++){
                artsArray.push(arts('750gp'))
            }
        }else if(precentileResult < 46){
            for(let i = 0; i < dSixMagicRoll; i++){
                magicItemsArray.push(magicItems('C'));
            }
            for(let i = 0; i < gemRolls; i++){
                gemsArray.push(gems('500gp'));
            }
        }else if(precentileResult < 51){
            for(let i = 0; i < dSixMagicRoll; i++){
                magicItemsArray.push(magicItems('C'));
            }
            for(let i = 0; i < gemRolls; i++){
                gemsArray.push(gems('1000gp'))
            }
        }else if(precentileResult < 55){
            for(let i = 0; i < dFourMagicRoll; i++){
                magicItemsArray.push(magicItems('D'));
            }
            for(let i = 0; i < artRolls; i++){
                artsArray.push(arts('250gp'));
            }
        }else if(precentileResult < 59){
            for(let i = 0; i < dFourMagicRoll; i++){
                magicItemsArray.push(magicItems('D'));
            }
            for(let i = 0; i < artRolls; i++){
                artsArray.push(arts('750gp'));
            }
        }else if(precentileResult < 63){
            for(let i = 0; i < dFourMagicRoll; i++){
                magicItemsArray.push(magicItems('D'));
            }
            for(let i = 0; i < gemRolls; i ++){
                gemsArray.push(gems('500gp'));
            }
        }else if(precentileResult < 67){
            for(let i = 0; i < dFourMagicRoll; i++){
                magicItemsArray.push(magicItems('D'));
            }
            for(let i = 0; i < gemRolls; i++){
                gemsArray.push(gems('1000gp'));
            }
        }else if(precentileResult < 69){
            magicItemsArray.push(magicItems('E'));
            for(let i = 0; i < artRolls; i++){
                artsArray.push(arts('250gp'));
            }
        }else if(precentileResult < 71){
            magicItemsArray.push(magicItems('E'));
            for(let i = 0; i < artRolls; i++){
                artsArray.push(arts('750gp'));
            }
        }else if(precentileResult < 73){
            magicItemsArray.push(magicItems('E'));
            for(let i = 0; i < gemRolls; i++){
                gemsArray.push(gems('500gp'));
            }
        }else if(precentileResult < 75){
            magicItemsArray.push(magicItems('E'));
            for(let i = 0; i < gemRolls; i++){
                gemsArray.push(gems('1000gp'));
            }
        }else if(precentileResult < 77){
            for(let i = 0; i < dFourMagicRoll; i++){
                magicItemsArray.push(magicItems('F'));
            }
            for(let i = 0; i < dSixMagicRoll; i++){
                magicItemsArray.push(magicItems('G'))
            }
            for(let i = 0; i < artRolls; i++){
                artsArray.push(arts('250gp'));
            }
        }else if(precentileResult < 79){
            for(let i = 0; i < dFourMagicRoll; i++){
                magicItemsArray.push(magicItems('F'));
            }
            for(let i = 0; i < dSixMagicRoll; i++){
                magicItemsArray.push(magicItems('G'))
            }
            for(let i = 0; i < artRolls; i++){
                artsArray.push(arts('750gp'));
            }
        }else if(precentileResult < 81){
            for(let i = 0; i < dFourMagicRoll; i++){
                magicItemsArray.push(magicItems('F'));
            }
            for(let i = 0; i < dSixMagicRoll; i++){
                magicItemsArray.push(magicItems('G'))
            }
            for(let i = 0; i < gemRolls; i++){
                gemsArray.push(gems('500gp'));
            }
        }else if(precentileResult < 83){
            for(let i = 0; i < dFourMagicRoll; i++){
                magicItemsArray.push(magicItems('F'));
            }
            for(let i = 0; i < dSixMagicRoll; i++){
                magicItemsArray.push(magicItems('G'))
            }
            for(let i = 0; i < gemRolls; i++){
                gemsArray.push(arts('1000gp'));
            }
        }else if(precentileResult < 86){
            for(let i = 0; i < dFourMagicRoll; i++){
                magicItemsArray.push(magicItems('H'));
            }
            for(let i = 0; i < artRolls; i++){
                artsArray.push(arts('250gp'));
            }
        }else if(precentileResult < 89){
            for(let i = 0; i < dFourMagicRoll; i++){
                magicItemsArray.push(magicItems('H'));
            }
            for(let i = 0; i < artRolls; i++){
                artsArray.push(arts('750gp'))
            }
        }else if(precentileResult < 91){
            for(let i = 0; i < dFourMagicRoll; i++){
                magicItemsArray.push(magicItems('H'));
            }
            for(let i = 0; i < gemRolls; i++){
                gemsArray.push(gems('500gp'));
            }
        }else if(precentileResult < 93){
            for(let i = 0; i < dFourMagicRoll; i++){
                magicItemsArray.push(magicItems('H'));
            }
            for(let i = 0; i < gemRolls; i++){
                gemsArray.push(gems('1000gp'));
            }
        }else if(precentileResult < 95){
            magicItemsArray.push(magicItems('I'));
            for(let i = 0; i < artRolls; i++){
                artsArray.push('250gp')
            }
        }else if(precentileResult < 97){
            magicItemsArray.push(magicItems('I'));
            for(let i = 0; i < artRolls; i++){
                artsArray.push(arts('750gp'));
            }
        }else if(precentileResult < 99){
            magicItemsArray.push(magicItems('I'));
            for(let i = 0; i < gemRolls; i++){
                gemsArray.push(gems('500gp'));
            }
        }else{
            magicItemsArray.push(magicItems('I'));
            for(let i = 0; i < gemRolls; i++){
                gemsArray.push(gems('1000gp'))
            }
        }
        return {coins, gemsArray, artsArray, magicItemsArray};
    }else{
        const coins = {
            electrum:0,
            silver:0,
            copper:0,
            gold:dice.roll('12d6').result * 1000,
            platinum:dice.roll('8d6').result * 1000
        };

        const threeDSix = dice.roll('3d6').result;
        const oneDTen = dice.roll('1d10').result;
        const oneDEight = dice.roll('1d8').result;
        const oneDFour = dice.roll('1d4').result;
        const oneDSix = dice.roll('1d6').result;
        const oneDSixMagic = dice.roll('1d6').result;
        const oneDEightMagic = dice.roll('1d8').result;
        const oneDFourMagic = dice.roll('1d4').result;
        if(precentileResult < 3){
            console.log('do nothing');
        }else if(precentileResult < 6){
            for(let i = 0; i < threeDSix; i++){
                gemsArray.push(gems('1000gp'));
            }
            for(let i = 0; i < oneDEightMagic; i++){
                magicItemsArray.push(magicItems('C'));
            }
        }else if(precentileResult < 9){
            for(let i = 0; i < oneDTen; i++){
                artsArray.push(arts('2500gp'));
            }
            for(let i = 0; i < oneDEightMagic; i++){
                magicItemsArray.push(magicItems('C'));
            }
        }else if(precentileResult < 12){
            for(let i = 0; i < oneDEightMagic; i++){
                magicItemsArray.push(magicItems('C'));
            }
            for(let i = 0; i < oneDFour; i++){
                artsArray.push(arts('7500gp'));
            }
        }else if(precentileResult < 15){
            for(let i = 0; i < oneDEightMagic; i++){
                magicItemsArray.push(magicItems('C'));
            }
            for(let i = 0; i < oneDEight; i++){
                gemsArray.push(gems('5000gp'));
            }
        }else if(precentileResult < 23){
            for(let i = 0; i < oneDSixMagic; i++){
                magicItemsArray.push(magicItems('D'));
            }
            for(let i = 0; i < threeDSix; i++){
                gemsArray.push(gems('1000gp'));
            }
        }else if(precentileResult < 31){
            for(let i = 0; i < oneDSixMagic; i++){
                magicItemsArray.push(magicItems('D'));
            }
            for(let i = 0; i < oneDTen; i++){
                artsArray.push(arts('2500gp'));
            }
        }else if(precentileResult < 39){
            for(let i = 0; i < oneDSixMagic; i++){
                magicItemsArray.push(magicItems('D'));
            }
            for(let i = 0; i < oneDFour; i++){
                artsArray.push(arts('7500gp'));
            }
        }else if(precentileResult < 47){
            for(let i = 0; i < oneDSixMagic; i++){
                magicItemsArray.push(magicItems('D'));
            }
            for(let i = 0; i < oneDEight; i++){
                gemsArray.push(gems('5000gp'));
            }
        }else if(precentileResult < 53){
            for(let i = 0; i < oneDSixMagic; i++){
                magicItemsArray.push(magicItems('E'));
            }
            for(let i = 0; i < threeDSix; i++){
                gemsArray.push(gems('1000gp'));
            }
        }else if(precentileResult < 59){
            for(let i = 0; i < oneDSixMagic; i++){
                magicItemsArray.push(magicItems('E'));
            }
            for(let i = 0; i < oneDTen; i++){
                artsArray.push(arts('2500gp'));
            }
        }else if(precentileResult < 64){
            for(let i = 0; i < oneDSixMagic; i++){
                magicItemsArray.push(magicItems('E'));
            }
            for(let i = 0; i < oneDFour; i++){
                artsArray.push(arts('7500gp'));
            }
        }else if(precentileResult < 69){
            for(let i = 0; i < oneDSixMagic; i++){
                magicItemsArray.push(magicItems('E'));
            }
            for(let i = 0; i < oneDEight; i++){
                gemsArray.push(gems('5000gp'));
            }
        }else if(precentileResult === 69){
            for(let i = 0; i < oneDFourMagic; i++){
                magicItemsArray.push(magicItems('G'))
            }
            for(let i = 0; i < threeDSix; i++){
                gemsArray.push(gems('1000gp'));
            }
        }else if(precentileResult === 70){
            for(let i = 0; i < oneDFourMagic; i++){
                magicItemsArray.push(magicItems('G'))
            }
            for(let i = 0; i < oneDTen; i++){
                artsArray.push(arts('2500gp'));
            }
        }else if(precentileResult === 71){
            for(let i = 0; i < oneDFourMagic; i++){
                magicItemsArray.push(magicItems('G'))
            }
            for(let i = 0; i < oneDFour; i++){
                artsArray.push(arts('7500gp'));
            }
        }else if(precentileResult === 72){
            for(let i = 0; i < oneDFourMagic; i++){
                magicItemsArray.push(magicItems('G'))
            }
            for(let i = 0; i < oneDEight; i++){
                gemsArray.push(gems('5000gp'));
            }
        }else if(precentileResult < 75){
            for(let i = 0; i < oneDFourMagic; i++){
                magicItemsArray.push(magicItems('H'));
            }
            for(let i = 0; i < threeDSix; i++){
                gemsArray.push(gems('1000gp'));
            }
        }else if(precentileResult < 77){
            for(let i = 0; i < oneDFourMagic; i++){
                magicItemsArray.push(magicItems('H'));
            }
            for(let i = 0; i < oneDTen; i++){
                artsArray.push(arts('2500gp'));
            }
        }else if(precentileResult < 79){
            for(let i = 0; i < oneDFourMagic; i++){
                magicItemsArray.push(magicItems('H'));
            }
            for(let i = 0; i < oneDFour; i++){
                artsArray.push(arts('7500gp'));
            }
        }else if(precentileResult < 81){
            for(let i = 0; i < oneDFourMagic; i++){
                magicItemsArray.push(magicItems('H'));
            }
            for(let i = 0; i < oneDEight; i++){
                gemsArray.push(gems('5000gp'));
            }
        }else if(precentileResult < 86){
            for(let i = 0; i < oneDFourMagic; i++){
                magicItemsArray.push(magicItems('I'));
            }
            for(let i = 0; i < threeDSix; i++){
                gemsArray.push(gems('1000gp'));
            }
        }else if(precentileResult < 91){
            for(let i = 0; i < oneDFourMagic; i++){
                magicItemsArray.push(magicItems('I'));
            }
            for(let i = 0; i < oneDTen; i++){
                artsArray.push(arts('2500gp'));
            }
        }else if(precentileResult < 96){
            for(let i = 0; i < oneDFourMagic; i++){
                magicItemsArray.push(magicItems('I'))
            }
            for(let i = 0; i < oneDFour; i++){
                artsArray.push(arts('7500gp'));
            }
        }else{
            for(let i = 0; i < oneDFourMagic; i++){
                magicItemsArray.push(magicItems('I'))
            }
            for(let i = 0; i < oneDEight; i++){
                gemsArray.push(gems('5000gp'));
            }
        }
        return {coins, gemsArray, artsArray, magicItemsArray};
    }  
}