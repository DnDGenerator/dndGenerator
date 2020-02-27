const dice = require('./dice');



class Door{
    constructor(map, x, y){
        const typeRoll = dice.roll(`1d20`).result;
        const exitRoll = dice.roll(`1d20`).result;
        this.map = map;
        this.tile = this.map[x][y];
        this.entranceSpace = "";
        this.exit = "";
        this.type ='';

        if(typeRoll < 11){
            this.type = 'wooden';
        }else if(typeRoll < 13){
            this.type = 'wooden, barred or locked'
        }else if(typeRoll === 13){
            this.type = 'stone';
        }else if(typeRoll === 14){
            this.type = 'stone, barred or locked';
        }else if(typeRoll === 15){
            this.type = 'iron';
        }else if(typeRoll === 16){
            this.type = 'iron, barred or locked';
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
            this.exit = "passage"
        }else if(exitRoll < 19){
            this.exit = "chamber"
        }
        else if(exitRoll === 19){
            this.exit = "stairs"
        }else{
            this.exit = "trap"
        }
        

        this.getType = this.getType.bind(this);
        this.getExit = this.getExit.bind(this);
        this.updateTileType = this.updateTileType.bind(this);
        this.getAvailableDirections = this.getAvailableDirections.bind(this);
        this.updateAppropriateNeighborTile = this.updateAppropriateNeighborTile.bind(this);
        this.runDoorUpdates = this.runDoorUpdates.bind(this);

    }

    getType(){
        return this.type;
    }
    getExit(){
        return this.exit;
    }
    runDoorUpdates(){
        this.updateTileType();
        this.updateAppropriateNeighborTile();
    }
    updateTileType(){
        this.tile.type = this.type;
    }
    updateAppropriateNeighborTile(){
        const options = this.getAvailableDirections();
        if(options === null){
            return;
        }
        const exitTile = options[dice.roll(`1d${options.length}`).result - 1];

        exitTile.updateType(this.exit);

    }
    /**
     * @description will test the tiles neighbors to see if they exsist and if they are of type u
     * 
     * @returns {Array} availableTiles- this is an array of tiles that pass the tests
     */
    getAvailableDirections(){
        const availableTiles = [];
        const neighbors = this.tile.getNeighbors()
        if(neighbors.n !== null && neighbors.n.type === 'u'){
            availableTiles.push(neighbors.n);
        }
        if(neighbors.s !== null && neighbors.s.type === 'u'){
            availableTiles.push(neighbors.s);
        }
        if(neighbors.e !== null && neighbors.e.type === 'u'){
            availableTiles.push(neighbors.e);
        }
        if(neighbors.w !== null && neighbors.w.type === 'u'){
            availableTiles.push(neighbors.w);
        }
        if(availableTiles.length === 0){
            return null;
        }
        return availableTiles;
    }


}

module.exports = Door;