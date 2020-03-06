const dice = require('./dice.js');
const PassageTileSet = require('./passageTileSet');



/**
 * @desc passage should take the map, and the coordinates in which the first corner needs to be located.
 * using the tiles will help navigate the map to make sure things are placed correctly
 */
class Passage{
    constructor(map, x, y){
        this.map = map;
        this.x = x;
        this.y = y;
        this.width = 5/1;
        this.distance = 10/5;
        this.additionalDistance = 0;
        this.turningPoint = 0;
        this.numDoors = 0;
        this.numSidePassages = 0;
        this.numTurns = 0;
        this.turnDirection = '';
        this.isChamber = false;
        this.isStairs = false;
        this.doorPositions = [];
        this.passagePositions = [];
        this.width = 0;
        this.height = 10;
        this.startingTile = this.map[x][y];
        this.startingNeighbors = this.map[this.x][this.y].getNeighbors()
        this.direction = null;
        this.sideDirection = null;
        this.passageTileSet = new PassageTileSet();

        const detailRoll = dice.roll(`1d20`).result;
        const fromNonPassageRoll = dice.roll(`1d20`).result;
        let rollWidth = fromNonPassageRoll;
        if(detailRoll < 3){
            this.distance = 30/5;
        }else if(detailRoll === 3){
            this.distance = 20/5;
            this.additionalDistance = 10/5;
            this.numDoors = 1;
            this.doorPositions.push('r');
        }else if(detailRoll === 4){
            this.distance = 20/5;
            this.additionalDistance = 10/5;
            this.numDoors = 1;
            this.doorPositions.push('l');
        }else if(detailRoll === 5){
            this.distance = 20/5;
            this.numDoors = 1;
            this.doorPositions.push('end');
        }else if(detailRoll < 8){
            this.distance = 20/5;
            this.numSidePassages = 1;
            this.additionalDistance = 10/5;
            this.passagePositions.push('r');
        }else if(detailRoll < 10){
            this.distance = 20/5;
            this.numSidePassages = 1;
            this.additionalDistance = 10/5;
            this.passagePositions.push('l');
        }else if(detailRoll === 10){
            this.distance = 20/5;
        }else if(detailRoll < 13){
            this.distance = 20/5;
            this.turnDirection = 'l';
            this.numTurns = 1;
            this.additionalDistance = 10/5;
        }else if(detailRoll < 15){
            this.distance = 20/5;
            this.turnDirection = 'r';
            this.numTurns = 1;
            this.additionalDistance = 10/5;
        }else if(detailRoll < 20){
            this.isChamber = true;
        }
        else{
            this.isStairs = true;
        }

        if(rollWidth < 3){
            this.width = 5/5;
        }else if(rollWidth < 13){
            this.width = 10/5;
        }else if(rollWidth < 15){
            this.width = 20/5;
        }else if(rollWidth < 17){
            this.width = 30/5;
        }else if(rollWidth === 17){
            this.width = 40/5;
        }else if(rollWidth === 18){
            this.width = 40/5;
        }else if(rollWidth === 19){
            this.width = 40/5;
            this.height = 20;
        }
        else{
            this.width = 40/5;
        }
        this.checkForStairsOrChambers = this.checkForStairsOrChambers.bind(this);
        this.getWidth = this.getWidth.bind(this);
        this.getDistance = this.getDistance.bind(this);
        this.getAdditonalDistance = this.getAdditonalDistance.bind(this);
        this.determineDirection = this.determineDirection.bind(this);
        this.createPassage = this.createPassage.bind(this);
        this.testDirection = this.testDirection.bind(this);
        this.determineDirection = this.determineDirection.bind(this);
        this.getPassageTileSetObj = this.getPassageTileSetObj.bind(this);
        this.placeDoorsAndPassages = this.placeDoorsAndPassages.bind(this);
    }

    getNumOfAdditionals(){
        return {numSidePassages:this.numSidePassages, numDoors:this.numDoors, numTurns:this.numTurns};
    }
    getDistance(){
        return this.distance;
    }
    getAdditonalDistance(){
        return this.additionalDistance;
    }
    getWidth(){
        return this.width;
    }

    checkForStairsOrChambers(){
        if(this.isChamber){
            this.map[this.x][this.y].updateType("chamber");
            this.width = 1;
            this.distance = 1;
            return true;
        }
        if(this.isStairs){
            this.map[this.x][this.y].updateType('stairs');
            this.width = 1;
            this.distance = 1;
            return true;
        }
        return false;
    }
    placeDoorsAndPassages(){
        let doorDirection = '';
        let options = [];
        let passageDirection = '';
        this.passageTileSet.populateWall();
        if(this.numDoors > 0){
            switch(this.direction){
                case 'n':
                    switch(this.doorPositions[0]){
                        case 'r':
                            doorDirection = 'e';
                            break;
                        case 'l':
                            doorDirection = 'w';
                            break;
                        case "end":
                            doorDirection = 's';
                            break;
                    }
                    break;
                case 'e':
                    switch(this.doorPositions[0]){
                        case 'r':
                            doorDirection = 's';
                            break;
                        case 'l':
                            doorDirection = 'n';
                            break;
                        case "end":
                            doorDirection = 'w';
                            break;
                    }
                    break;
                case 's':
                    switch(this.doorPositions[0]){
                        case 'r':
                            doorDirection = 'w';
                            break;
                        case 'l':
                            doorDirection = 'e';
                            break;
                        case "end":
                            doorDirection = 'n';
                            break;
                    }
                    break;
                case 'w':
                    switch(this.doorPositions[0]){
                        case 'r':
                            doorDirection = 'n';
                            break;
                        case 'l':
                            doorDirection = 's';
                            break;
                        case "end":
                            doorDirection = 'e';
                            break;
                    }
                    break;
            }
            switch(doorDirection){
                case 'n':
                    options = this.passageTileSet.getWallTiles().nWall
                    break;
                case 'e':
                    options = this.passageTileSet.getWallTiles().eWall
                    break;
                case 's':
                    options = this.passageTileSet.getWallTiles().sWall
                    break;
                case 'w':
                    options = this.passageTileSet.getWallTiles().wWall
                    break;
            }

            for(let i = 0; i < this.numDoors; i++){
                const roll = dice.roll(`1d${options.length}`).result - 1;
                const doorTile = options.splice(roll,1);
                if(doorTile.length){
                    doorTile[0].updateType('door');
                }
            }
        }
        if(this.numSidePassages > 0){
            switch(this.direction){
                case 'n':
                    switch(this.passagePositions[0]){
                        case 'r':
                            passageDirection = 'e';
                            break;
                        case 'l':
                            passageDirection = 'w';
                            break;
                        case "end":
                            passageDirection = 's';
                            break;
                    }
                    break;
                case 'e':
                    switch(this.passagePositions[0]){
                        case 'r':
                            passageDirection = 's';
                            break;
                        case 'l':
                            passageDirection = 'n';
                            break;
                        case "end":
                            passageDirection = 'w';
                            break;
                    }
                    break;
                case 's':
                    switch(this.passagePositions[0]){
                        case 'r':
                            passageDirection = 'w';
                            break;
                        case 'l':
                            passageDirection = 'e';
                            break;
                        case "end":
                            passageDirection = 'n';
                            break;
                    }
                    break;
                case 'w':
                    switch(this.passagePositions[0]){
                        case 'r':
                            passageDirection = 'n';
                            break;
                        case 'l':
                            passageDirection = 's';
                            break;
                        case "end":
                            passageDirection = 'e';
                            break;
                    }
                    break;
            }
            switch(passageDirection){
                case 'n':
                    options = this.passageTileSet.getWallTiles().nWall
                    break;
                case 'e':
                    options = this.passageTileSet.getWallTiles().eWall
                    break;
                case 's':
                    options = this.passageTileSet.getWallTiles().sWall
                    break;
                case 'w':
                    options = this.passageTileSet.getWallTiles().wWall
                    break;
            }
            for(let i = 0; i < this.numSidePassages; i++){
                const roll = dice.roll(`1d${options.length}`).result - 1;
                const sidePassageTile = options.splice(roll,1);
                if(sidePassageTile.length){
                    sidePassageTile[0].updateType('passage');
                }
            }
        }
        
    }
    createPassage(){
        const height = this.getDistance();
        const width = this.getWidth()
        if(this.checkForStairsOrChambers()){
            return;
        }
        if(this.determineDirection()){
            let newTile = this.startingTile.getNeighbors()[this.direction];
            for(let i = 0; i < height; i++){
                let sideTile = newTile;
                if(sideTile !== null){
                    for(let j = 0; j < width; j++){
                        if(i===0 || i===height-1){
                            this.passageTileSet.setProps(sideTile);
                        }
                        if(j===0 || j===width-1){
                            this.passageTileSet.setProps(sideTile);
                        }
                        if(sideTile !== null){
                            sideTile.updateType('P');
                            sideTile = sideTile.getNeighbors()[this.sideDirection];
                        }
                        
                    }
                    newTile = newTile.getNeighbors()[this.direction];
                }
            }
        }
    }
    getPassageTileSetObj(){
        return this.passageTileSet;
    }
    determineDirection(){
        const cardinalDirections = Object.keys(this.startingNeighbors);
        const availableDirections = [];

        for(let i = 0; i < cardinalDirections.length; i++){
            if(this.startingNeighbors[cardinalDirections[i]] !== null && this.startingNeighbors[cardinalDirections[i]].getTileInfo().type === "*"){
                availableDirections.push(cardinalDirections[i]);
            }
        }
        for(let i = 0; i < availableDirections.length; i++){
            if(this.testDirection(this.startingTile, availableDirections[i], this.getDistance())){
                this.direction = availableDirections[i];
                if(availableDirections[i]=== 'n' || availableDirections[i] === 's'){
                    if(this.testDirection(this.startingTile.getNeighbors()[availableDirections[i]], 'e', this.getWidth())){
                        this.sideDirection = 'e';
                        return true;
                    }else if(this.testDirection(this.startingTile.getNeighbors()[availableDirections[i]], 'w', this.getWidth())){
                        this.sideDirection = 'w';
                        return true;
                    }
                }else if(availableDirections[i] === 'e' || availableDirections === 'w'){
                    if(this.testDirection(this.startingTile.getNeighbors()[availableDirections[i]], 'n', this.getWidth())){
                        this.sideDirection = 'n';
                        return true;
                    }else if(this.testDirection(this.startingTile.getNeighbors()[availableDirections[i]], 's', this.getWidth())){
                        this.sideDirection = 's';
                        return true;
                    }
                }
            }
        }
        return false;
    }

    testDirection(tile, direction, count){

        for(let i = 0; i < count; i++){
            const newTile = tile.getNeighbors()[direction];
            if(newTile===null){
                return false;
            }
            if(newTile.getTileInfo().type === null){
                return false;
            }
            if(newTile.getTileInfo().type !== '*'){
                return false;
            }
            if(newTile === undefined){
                return false;
            }
        }

        return true;
    }
}

module.exports = Passage;