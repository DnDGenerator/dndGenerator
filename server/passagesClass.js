const dice = require('./dice');

class Passage{
    constructor(origin){
        this.origin = origin;
        this.numDoors = 0;
        this.numSidePassages = 0;
        this.distance = 0;
        this.additionalDistance = 0;
        this.numTurns = 0;
        this.turnDirection = '';
        this.isChamber = false;
        this.isStairs = false;
        const detailRoll = dice.roll(`1d20`).result;
        const fromPassageRoll = dice.roll(`1d12`).result;
        const fromNonPassageRoll = dice.roll(`1d20`).result;
        if(detailRoll < 3){

        }else if(detailRoll === 3){

        }else if(detailRoll === 4){

        }else if(detailRoll === 5){
            
        }else if(detailRoll < 8){
            
        }else if(detailRoll < 10){

        }else if(detailRoll === 10){

        }else if(detailRoll < 13){

        }else if(detailRoll < 15){

        }else if(detailRoll < 20){

        }
        // else{

        // }
    }
}

module.exports = Passage;