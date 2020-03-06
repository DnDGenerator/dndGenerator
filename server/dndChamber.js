const dice = require('./dice');
const WallAndTileTracker = require('./passageTileSet');

class Chamber{
    constructor(map, x, y){
        this.map = map;
        this.x = x;
        this.y = y;
        this.startingTile = map[x][y];
        this.startingNeighbors = this.startingTile.getNeighbors();
        this.wallTileTracker = new WallAndTileTracker();
        this.direction;
        this.sideDirection;
        this.numNotPlaced = 0

        const chamberRoll = dice.roll(`1d20`);
        const chamberExitRoll = dice.roll(`1d20`);

        let chamberSize = '';
        this.numExits = 0;
        this.width = 0;
        this.height = 0;
        this.exitType = []
        this.numDoors = 0;
        this.numPassages = 0;
        this.exitLocs = [];
        if(chamberRoll < 3){
            chamberSize = 'normal';
            this.width = 20;
            this.height = 20;
        }else if(chamberRoll < 5){
            chamberSize = 'normal';
            this.width = 30;
            this.height = 30;
        }else if(chamberRoll < 7){
            chamberSize = 'normal';
            this.width = 40;
            this.height = 40;
        }else if(chamberRoll < 10){
            chamberSize = "normal";
            this.width = 20;
            this.height = 30;
        }else if(chamberRoll < 13){
            chamberSize = "normal";
            this.width = 30;
            this.height = 40;
        }else if(chamberRoll < 15){
            chamberSize = "large";
            this.width = 40;
            this.height = 50;
        }else if(chamberRoll === 15){
            chamberSize = "large";
            this.width = 50;
            this.height = 80;
        }else if(chamberRoll === 16){
            chamberSize = "normal";
            this.width = 15;
            this.height = 15;
        }else if(chamberRoll === 17){
            chamberSize = "large";
            this.width = 25;
            this.height = 25;
        }else if(chamberRoll === 18){
            chamberSize = "large";
            this.width = 40;
            this.height = 40;
        }else if(chamberRoll === 19){
            chamberSize = "large";
            this.width = 60;
            this.height = 60;
        }else{
            chamberSize = "large";
            this.width = 40;
            this.height = 60;
        }

        this.width = this.width/5;
        this.height = this.height/5;

        if(chamberSize === 'normal'){
            if(chamberExitRoll < 6){
                this.numExits = 0;                                
            }else if(chamberExitRoll < 12){
                this.numExits = 1;                
            }else if(chamberExitRoll < 16){
                this.numExits = 2;
            }else if(chamberExitRoll < 19){
                this.numExits = 3;                                
            }else{
                this.numExits = 4;
            }
        }else{
            if(chamberExitRoll < 4){
                this.numExits = 0                
            }else if(chamberExitRoll < 9){
                this.numExits = 1;                
            }else if(chamberExitRoll < 14){
                this.numExits = 2;                
            }else if(chamberExitRoll < 18){
                this.numExits = 3;
            }else if(chamberExitRoll === 18){
                this.numExits = 4;
            }else if(chamberExitRoll === 19){
                this.numExits = 5;
            }else{
                this.numExits = 6;
            }
            for(let i = 0; i < this.numExits; i++){
                const roll = dice.roll(`1d20`).result;
                const locRoll = dice.roll(`1d20`).result;
                if(roll < 11){
                    this.numDoors+=1;
                    this.exitType.push('door');
                }else{
                    this.numPassages+=1;
                    this.exitType.push('passage');
                }
                if(locRoll < 6){
                    this.exitLocs.push('n')
                }else if(locRoll < 11){
                    this.exitLocs.push('s')
                }else if(locRoll < 16){
                    this.exitLocs.push('e')
                }else{
                    this.exitLocs.push('w')
                }
            }
        }

        this.getHeight = this.getHeight.bind(this);
        this.getWidth = this.getWidth.bind(this);
        this.getNumDoors = this.getNumDoors.bind(this);
        this.getNumExits = this.getNumExits.bind(this);
        this.getExits = this.getExits.bind(this);
        this.getNumPassages = this.getNumPassages.bind(this);
        this.testDirection = this.testDirection.bind(this);
        this.determineDirection = this.determineDirection.bind(this);
        this.createChamber = this.createChamber.bind(this);
        this.placeExits = this.placeExits.bind(this);
        this.populateWallOptions = this.populateWallOptions.bind(this);
        this.getNumNotPlaced = this.getNumNotPlaced.bind(this);
        
    }
    getNumNotPlaced(){
        return this.numNotPlaced;
    }
    getExits(){
        return this.exitLocs;
    }
    getNumDoors(){
        return this.numDoors;
    }
    getNumPassages(){
        return this.numPassages;
    }
    getNumExits(){
        return this.numExits;
    }
    getWidth(){
        return this.width;
    }
    getHeight(){
        return this.height;
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
        this.numExits -= 1;
        return false;
    }
    createChamber(){
        const height = this.getHeight();
        const width = this.getWidth();
        if(this.determineDirection() === true){
            let newTile = this.startingTile.getNeighbors()[this.direction];
            
            for(let i = 0; i < height; i++){
                let sideTile = newTile;
                if(newTile !== null){
                    for(let j = 0; j < width; j++){
                        if(i===0 || i===height-1){
                            this.wallTileTracker.setProps(sideTile);
                        }
                        if(j===0 || j===width-1){
                            this.wallTileTracker.setProps(sideTile);
                        }
                        if(sideTile!==null){
                            sideTile.updateType('C');
                            sideTile = sideTile.getNeighbors()[this.sideDirection];
                        }else{
                            this.numNotPlaced+=1;
                        }
                        
                    }
                    newTile = newTile.getNeighbors()[this.direction];
                }else{
                    this.numNotPlaced+=width;
                }
                
            }
        }else{
            this.startingTile.updateType('*')
        }
    }
    populateWallOptions(){
        this.wallTileTracker.populateWall();
        const wOptions = this.wallTileTracker.getWallTiles().wWall;
        const sOptions = this.wallTileTracker.getWallTiles().sWall;
        const eOptions = this.wallTileTracker.getWallTiles().eWall;
        const nOptions = this.wallTileTracker.getWallTiles().nWall;
        return {wOptions, sOptions, eOptions, nOptions};
    }
    placeExits(){
        const exitLocations = this.exitLocs;
        const {wOptions, sOptions, eOptions, nOptions} = this.populateWallOptions();
        wOptions.map(tile=>tile.updateType('WC'));
        sOptions.map(tile=>tile.updateType('WC'));
        eOptions.map(tile=>tile.updateType('WC'));
        nOptions.map(tile=>tile.updateType('WC'));
        const wLength = wOptions.length;
        const sLength = sOptions.length;
        const eLength = eOptions.length;
        const nLength = nOptions.length;
        const laps = this.numExits;
        const types = this.exitType;
        const tilesUpdated = [];
        let choice;
        for(let i = 0; i < laps; i++){
            choice = null;
            const direction = exitLocations[i];
            switch(direction){
                case 'n':
                    choice = nOptions.splice(dice.roll(`1d${nOptions.length}`).result - 1, 1)[0];
                    break;
                case 'e':
                    choice = eOptions.splice(dice.roll(`1d${eOptions.length}`).result - 1, 1)[0];
                    break;
                case 's':
                    choice = sOptions.splice(dice.roll(`1d${sOptions.length}`).result - 1, 1)[0];
                    break;
                case 'w':
                    choice = wOptions.splice(dice.roll(`1d${wOptions.length}`).result - 1, 1)[0];
                    break;
            }
            if(choice){
                choice.updateType(types[i]);
            
                tilesUpdated.push(choice);
            }else{
                this.numExits -= 1;
                switch(types[i]){
                    case 'door':
                        this.numDoors -=1;
                        break;
                    case 'passage':
                        this.numPassages -= 1;
                        break;
                }
            }
            
        }
        const mappedForOverlapCheck = tilesUpdated
            .map(tile=>{
                return tile.getTileInfo().x +'|'+tile.getTileInfo().y
            })
            .reduce((sum, xY, i, array)=>{
                if(array.indexOf(xY) === i){
                    sum += 1;
                }

                return sum;
            },0);
        const mappedForDoor = tilesUpdated
            .filter(tile=>tile.getTileInfo().type === 'door')
            .map(tile=>{
                return tile.getTileInfo().x +'|'+tile.getTileInfo().y
            })
            .reduce((sum, xY, i, array)=>{
                if(array.indexOf(xY) === i){
                    sum += 1;
                }

                return sum;
            },0);

        const mappedForPassage = tilesUpdated
            .filter(tile=>tile.getTileInfo().type === 'passage')
            .map(tile=>{
                return tile.getTileInfo().x +'|'+tile.getTileInfo().y
            })
            .reduce((sum, xY, i, array)=>{
                if(array.indexOf(xY) === i){
                    sum += 1;
                }

                return sum;
            },0);

        this.numExits = mappedForOverlapCheck;
        this.numDoors = mappedForDoor;
        this.numPassages = mappedForPassage;

        return {nLength, eLength, sLength, wLength};
    }
}


module.exports = Chamber;