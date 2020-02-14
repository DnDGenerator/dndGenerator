const dice = require('./dice');

class Passage{
    constructor(origin){
        this.numDoors = 0;
        this.numSidePassages = 0;
        this.distance = 0;
        this.additionalDistance = 0;
        this.numTurns = 0;
        this.turnDirection = '';
        this.isChamber = false;
        this.isStairs = false;
        this.width = 0;
        this.height = 10;
        this.doorPositions = [];
        this.passagePositions = [];
        
        const detailRoll = dice.roll(`1d20`).result;
        const fromPassageRoll = dice.roll(`1d12`).result;
        const fromNonPassageRoll = dice.roll(`1d20`).result;
        let rollWidth = fromNonPassageRoll;
        if(detailRoll < 3){
            this.distance = 30;
        }else if(detailRoll === 3){
            this.distance = 20;
            this.additionalDistance = 10;
            this.numDoors = 1;
            this.doorPositions.push('r');
        }else if(detailRoll === 4){
            this.distance = 20;
            this.additionalDistance = 10;
            this.numDoors = 1;
            this.doorPositions.push('l');
        }else if(detailRoll === 5){
            this.distance = 20;
            this.numDoors = 1;
            this.doorPositions.push('end');
        }else if(detailRoll < 8){
            this.distance = 20;
            this.numSidePassages = 1;
            this.additionalDistance = 10;
            this.passagePositions.push('r');
        }else if(detailRoll < 10){
            this.distance = 20;
            this.numSidePassages = 1;
            this.additionalDistance = 10;
            this.passagePositions.push('l');
        }else if(detailRoll === 10){
            this.distance = 20;
        }else if(detailRoll < 13){
            this.distance = 20;
            this.turnDirection = 'l';
            this.numTurns = 1;
            this.additionalDistance = 10;
        }else if(detailRoll < 15){
            this.distance = 20;
            this.turnDirection = 'r';
            this.numTurns = 1;
            this.additionalDistance = 10;
        }else if(detailRoll < 20){
            this.isChamber = true;
        }
        // else{
            // this.isStairs = true;
        // }
        if(origin === 'passage'){
            rollWidth = fromPassageRoll;
        }
        if(rollWidth < 3){
            this.width = 5;
        }else if(rollWidth < 13){
            this.width = 10;
        }else if(rollWidth < 15){
            this.width = 20;
        }else if(rollWidth < 17){
            this.width = 30;
        }else if(rollWidth === 17){
            this.width = 40;
        }else if(rollWidth === 18){
            this.width = 40;
        }else if(rollWidth === 19){
            this.width = 40;
            this.height = 20;
        }
        // else{

        // }
        this.getDistances = this.getDistances.bind(this);
        this.getDoorData = this.getDoorData.bind(this);
        this.getNumTurns = this.getNumTurns.bind(this);
        this.getPassagesData = this.getPassagesData.bind(this);
        this.getTurnData = this.getTurnData.bind(this);
        this.getWidthXHeight = this.getWidthXHeight.bind(this);
        this.toChamber = this.toChamber.bind(this);
        this.toStairs = this.toStairs.bind(this);
    }
    getDoorData(){
        return {numDoors:this.numDoors, doorPositions:this.doorPositions};
    }
    getNumTurns(){
        return this.numTurns;
    }
    getPassagesData(){
        return {numSidePassages:this.numSidePassages, passagePositions:this.passagePositions};
    }
    getDistances(){
        return {distance:this.distance, additionalDistance:this.additionalDistance};
    }
    getTurnData(){
        return {turnDirection:this.turnDirection, numTurns:this.numTurns};
    }
    getWidthXHeight(){
        return {width:this.width, height:this.height};
    }
    toChamber(){
        return this.isChamber;
    }
    toStairs(){
        return this.isStairs;
    }
}

module.exports = Passage;