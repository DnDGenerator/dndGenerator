const dice = require('../dice')

const WallAndTileTracker = require('./passageTileSet');


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}


class StartingLocation{
    constructor(map, maxX, maxY){
        this.x = getRandomInt(0, maxX);
        this.y = getRandomInt(0, maxY);
        this.map = map;
        this.startingArea = {
            shape:"",
            width:0,
            height:0,
            exitLocations:[],
            exitType:[],
            numPassages:0,
            numDoors:0,
            doors:{}

        };
        this.direction = null;
        this.sideDirection = null;
        this.numUnableToPlace = 0;
        this.startingTile = map[this.x][this.y];
        this.startingNeighbors = this.startingTile.getNeighbors();
        this.wallTileTracker = new WallAndTileTracker();

        const startingRoll = dice.roll(`1d10`).result;

        switch(startingRoll){
            case 1:
                this.startingArea.shape = "square";
                this.startingArea.width = 20/5;
                this.startingArea.height = 20/5;
                this.startingArea.numPassages += 4;
                this.startingArea.exitLocations = ["l","opp","r","same"];
                this.startingArea.exitType = ["passage","passage","passage","passage"];
                break;
            case 2:
                this.startingArea.shape = "square";
                this.startingArea.width = 20/5;
                this.startingArea.height = 20/5;
                this.startingArea.numPassages += 1;
                this.startingArea.numDoors += 2;
                this.startingArea.exitLocations = ["l", "r", "opp"];
                this.startingArea.exitType = ["door", "passage", "door"];
                break;
            case 3:
                this.startingArea.shape = "square";
                this.startingArea.width = 40/5;
                this.startingArea.height = 40/5;
                this.startingArea.numDoors += 3;
                this.startingArea.exitLocations = ["l","r","opp"];
                this.startingArea.exitType = ["door","door","door"];
                break;
            case 4:
                this.startingArea.shape = "rectangle";
                this.startingArea.width = 80/5;
                this.startingArea.height = 20/5;
                this.startingArea.numPassages += 2;
                this.startingArea.numDoors += 2;
                this.startingArea.exitLocations = ["l","opp","r","same"];
                this.startingArea.exitType = ["passage","door","passage", "door"];
                break;
            case 5:
                this.startingArea.shape = "rectangle";
                this.startingArea.width = 20/5;
                this.startingArea.height = 40/5;
                this.startingArea.numPassages += 4;
                this.startingArea.exitLocations = ["l","opp","r","same"];
                this.startingArea.exitType = ["passage","passage","passage","passage"];
                break;
            case 6:
            case 7:
            case 8:
                this.startingArea.shape = "square";
                this.startingArea.width = 20/5;
                this.startingArea.height = 20/5;
                this.startingArea.numPassages += 1;
                this.startingArea.numDoors += 3;
                this.startingArea.exitLocations = ["l","opp","r","same"];
                this.startingArea.exitType = ["door", "door", "passage", "door"];
                break;
            case 9:
            case 10:
                const options = ["l","opp","r","same"];
                this.startingArea.shape = "passage";
                this.startingArea.numPassages += 1;
                this.startingArea.width = 10/5;
                this.startingArea.height = 5/5;
                this.startingArea.exitLocations = [`${options[dice.roll(`1d${options.length}`).result - 1]}`]
                this.startingArea.exitType = ["passage"];
                break;
        }
        

        
        this.testDirection = this.testDirection.bind(this);
        this.getHeight = this.getHeight.bind(this);
        this.getWidth = this.getWidth.bind(this);
        this.determineDirection = this.determineDirection.bind(this);
        this.createStartingArea = this.createStartingArea.bind(this);
        this.placeExits = this.placeExits.bind(this);
        this.getNumberOfExits = this.getNumberOfExits.bind(this);
    }
    getNumberOfExits(){
        return this.startingArea.exitLocations.length;
    }
    placeExits(){
        this.wallTileTracker.populateWall();
        const exitTypes = this.startingArea.exitType;
        const exitLocations = this.startingArea.exitLocations;
        const wOptions = this.wallTileTracker.getWallTiles().wWall;
        const sOptions = this.wallTileTracker.getWallTiles().sWall;
        const eOptions = this.wallTileTracker.getWallTiles().eWall;
        const nOptions = this.wallTileTracker.getWallTiles().nWall;
        // wOptions.map(tile=>tile.updateType('WR'));
        // sOptions.map(tile=>tile.updateType('WR'));
        // eOptions.map(tile=>tile.updateType('WR'));
        // nOptions.map(tile=>tile.updateType('WR'));
        for(let i = 0; i < exitTypes.length; i++){
            let choice;
            
            switch(this.direction){
                case 'n':
                    switch(exitLocations[i]){
                        case 'l':
                            choice = wOptions.splice(getRandomInt(0, wOptions.length), 1);
                            choice[0].updateType(exitTypes[i])
                            break;
                        case 'opp':
                            choice = sOptions.splice(getRandomInt(0, sOptions.length), 1)
                            choice[0].updateType(exitTypes[i])
                            break;
                        case 'r':
                            choice = eOptions.splice(getRandomInt(0, eOptions.length), 1)
                            try{
                                choice[0].updateType(exitTypes[i])
                            }catch(e){
                                console.error('i:',i,e)
                            }
                            break;
                        case 'same':
                            choice = nOptions.splice(getRandomInt(0, nOptions.length), 1)
                            choice[0].updateType(exitTypes[i])
                            break;
                    }
                    break;
                case 'e':
                    switch(exitLocations[i]){
                        case 'l':
                            choice = nOptions.splice(getRandomInt(0, nOptions.length), 1)
                            choice[0].updateType(exitTypes[i])
                            break;
                        case 'opp':
                            choice = wOptions.splice(getRandomInt(0, wOptions.length), 1)
                            choice[0].updateType(exitTypes[i])
                            break;
                        case 'r':
                            choice = sOptions.splice(getRandomInt(0, sOptions.length), 1)
                            choice[0].updateType(exitTypes[i])
                            break;
                        case 'same':
                            choice = eOptions.splice(getRandomInt(0, eOptions.length), 1)
                            choice[0].updateType(exitTypes[i])
                            break;
                    }
                    break;
                case 's':
                    switch(exitLocations[i]){
                        case 'l':
                            choice = eOptions.splice(getRandomInt(0, eOptions.length), 1)
                            choice[0].updateType(exitTypes[i])
                            break;
                        case 'opp':
                            choice = nOptions.splice(getRandomInt(0, nOptions.length), 1)
                            choice[0].updateType(exitTypes[i])
                            break;
                        case 'r':
                            choice = wOptions.splice(getRandomInt(0, wOptions.length), 1)
                            choice[0].updateType(exitTypes[i])
                            break;
                        case 'same':
                            choice = sOptions.splice(getRandomInt(0, sOptions.length), 1)
                            choice[0].updateType(exitTypes[i])
                            break;
                    }
                    break;
                case 'w':
                    switch(exitLocations[i]){
                        case 'l':
                            choice = sOptions.splice(getRandomInt(0, sOptions.length), 1)
                            choice[0].updateType(exitTypes[i])
                            break;
                        case 'opp':
                            choice = eOptions.splice(getRandomInt(0, eOptions.length), 1)
                            choice[0].updateType(exitTypes[i])
                            break;
                        case 'r':
                            choice = nOptions.splice(getRandomInt(0, nOptions.length), 1)
                            choice[0].updateType(exitTypes[i])
                            break;
                        case 'same':
                            choice = wOptions.splice(getRandomInt(0, wOptions.length), 1)
                            choice[0].updateType(exitTypes[i])
                            break;
                    }
                    break;
            }
        }
    }
    testDirection(tile, direction, count){

        for(let i = 0; i < count; i++){
            const newTile = tile.getNeighbors()[direction];
            if(newTile === null || newTile.getTileInfo().type !== '*'){
                return false;
            }
        }

        return true;
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
            if(this.testDirection(this.startingTile, availableDirections[i], this.getHeight())){
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
    createStartingArea(){
        const height = this.getHeight();
        const width = this.getWidth();
        if(this.determineDirection() === true){
            let newTile = this.startingTile.getNeighbors()[this.direction];
            if(newTile !== null){
                for(let i = 0; i < height; i++){
                    if(newTile !== null){
                        let sideTile = newTile;
                        if(sideTile !== null){
                            for(let j = 0; j < width; j++){
                                if(i===0 || i===height-1){
                                    this.wallTileTracker.setProps(sideTile);
                                }
                                if(j===0 || j===width-1){
                                    this.wallTileTracker.setProps(sideTile);
                                }
                                if(sideTile !== null){
                                    sideTile.updateType('R');
                                    sideTile = sideTile.getNeighbors()[this.sideDirection];
                                }else{
                                    this.numUnableToPlace+=1;
                                }
                                
                            }
                        }else{
                            this.numUnableToPlace+=width;
                        }
                        
                    }else{
                        // this.numUnableToPlace+=height;
                        break;
                    }
                    newTile = newTile.getNeighbors()[this.direction];
                }
        }}else{
            this.x = getRandomInt(0, maxX);
            this.y = getRandomInt(0, maxY);
            this.createStartingArea();
        }
        
    }

    getWidth(){
        return this.startingArea.width;
    }
    getHeight(){
        return this.startingArea.height;
    }
    getNotPlacedNum(){
        return this.numUnableToPlace
    }
}

module.exports = StartingLocation;

