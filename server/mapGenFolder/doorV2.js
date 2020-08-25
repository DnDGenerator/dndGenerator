const dice = require('../dice');

class DoorVTwo{
    constructor(){
        const typeRoll = dice.roll(`1d20`).result;
        const exitRoll = dice.roll(`1d20`).result;

        this.exit = "";
        this.type ='';

        if(typeRoll < 11){
            this.type = 'wooden door';
        }else if(typeRoll < 13){
            this.type = 'wooden door, barred or locked'
        }else if(typeRoll === 13){
            this.type = 'stone door';
        }else if(typeRoll === 14){
            this.type = 'stone door, barred or locked';
        }else if(typeRoll === 15){
            this.type = 'iron door';
        }else if(typeRoll === 16){
            this.type = 'iron door, barred or locked';
        }else if(typeRoll === 17){
            this.type = 'portcullis';
        }else if(typeRoll === 18){
            this.type = 'portcullis, locked in place';
        }else if(typeRoll === 19){
            this.type = 'secret door';
        }else{
            this.type = 'secret door, barred or locked';
        }
        if(exitRoll < 9){
            this.exit = "passageAnchor"
        }else if(exitRoll < 19){
            this.exit = "chamberAnchor"
        }
        else if(exitRoll === 19){
            this.exit = "stairsAnchor"
        }else{
            this.exit = "trapAnchor"
        }

        this.tellTileWhatKindOfDoor = this.tellTileWhatKindOfDoor.bind(this);
    }
    tellTileWhatKindOfDoor(tile){
        tile.updateType(this.type);
    }
    deployAnchor(tile, originType){
        const neighbors = tile.getNeighbors();
        if(neighbors.n.getTileInfo().type === originType){
            neighbors.s.updateType(this.exit);
        }else if(neighbors.e.getTileInfo().type === originType){
            neighbors.w.updateType(this.exit);
        }else if(neighbors.s.getTileInfo().type === originType){
            neighbors.n.updateType(this.exit);
        }else if(neighbors.w.getTileInfo().type === originType){
            neighbors.e.updateType(this.exit);
        }else{
            console.error('missplaced anchor, check mapCompiler for bugs');
        }
    }
}

module.exports = DoorVTwo;