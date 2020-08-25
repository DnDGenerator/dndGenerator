const dice = require('../dice');
class StartingRoom{
    constructor(){
        this.width = 2;
        this.length = 2;
        this.exitLocations = [];
        this.exitTypes = [];

        const startingRoll = dice.roll(`1d10`).result;
        switch(startingRoll){
            case 1:
                this.width = 20/5;
                this.length = 20/5;
                this.exitLocations = ['w', 'n', 'e', 's'];
                this.exitTypes = ['passageAnchor', 'passageAnchor', 'passageAnchor', 'passageAnchor'];
                break;
            case 2:
                this.width = 20/5;
                this.length = 20/5;
                this.exitLocations = ['w', 'n', 'e'];
                this.exitTypes = ['doorAnchor', 'passageAnchor', 'doorAnchor'];
                break;
            case 3:
                this.width = 40/5;
                this.length = 40/5;
                this.exitLocations = ['w', 'n', 'e'];
                this.exitTypes = ['doorAnchor', 'doorAnchor', 'doorAnchor'];
                break;
            case 4:
                this.width = 80/5;
                this.length = 20/5;
                this.exitLocations = ['w', 'n', 'e', 's'];
                this.exitTypes = ['passageAnchor', 'doorAnchor', 'passageAnchor','doorAnchor'];
                break;
            case 5:
                this.width = 20/5;
                this.length = 40/5;
                this.exitLocations = ['w', 'n', 'e', 's'];
                this.exitTypes = ['passageAnchor', 'passageAnchor', 'passageAnchor', 'passageAnchor']
                break;
            case 6:
            case 7:
            case 8:
                this.width = 20/5;
                this.length = 20/5;
                this.exitLocations = ['w', 'n', 'e', 's'];
                this.exitTypes = ['doorAnchor', 'doorAnchor', 'passageAnchor', 'doorAnchor']
                break;
            case 9:
            case 10:
                const options = ['w', 'n', 'e', 's'];
                this.width = 10/5;
                this.length = 5/5;
                this.exitLocations = [`${options[dice.roll(`1d${options.length}`).result - 1]}`];
                this.exitTypes = ['passageAnchor'];
                break;
        }

        this.getExitLocations = this.getExitLocations.bind(this);
        this.getExitTypes = this.getExitTypes.bind(this);
        this.getWidth = this.getWidth.bind(this);
        this.getLength = this.getLength.bind(this);
        this.buildRoom = this.buildRoom.bind(this);
    }
    getExitTypes(){
        return this.exitTypes;
    }
    getExitLocations(){
        return this.exitLocations;
    }
    getWidth(){
        return this.width;
    }
    getLength(){
        return this.length;
    }
    buildRoom(startTile){
        startTile.updateType('starting room');   
    }
    dropAnchor(edgeTile, neighborToChange){
        const neighbors = edgeTile.getNeighbors();
        const indexOfNeighbor = this.exitLocations.indexOf(neighborToChange);
        if (indexOfNeighbor > -1) {
            this.exitLocations.splice(indexOfNeighbor, 1);
            neighbors[neighborToChange].updateType(this.exitTypes[indexOfNeighbor])
            this.exitTypes.splice(indexOfNeighbor, 1);
        }
        
    }
}

module.exports = StartingRoom;