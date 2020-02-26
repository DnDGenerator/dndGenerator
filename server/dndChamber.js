const dice = require('./dice');

class Chamber{
    constructor(map, x, y){
        this.map = map;
        this.x = x;
        this.y = y;
        this.startingTile = map[x][y];

        const chamberRoll = dice.roll(`1d20`);
        const chamberExitRoll = dice.roll(`1d20`);

        let chamberSize = '';
        this.numExits = 0;
        this.width = 0;
        this.height = 0;

        this.numDoors = 0;
        this.numPassages = 0;
        this.chamberTiles = [];
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

        }
        this.placeExits = this.placeExits.bind(this);
        this.tileLayer = this.tileLayer.bind(this);
        this.tileShortLayer = this.tileShortLayer.bind(this);
        this.getHeight = this.getHeight.bind(this);
        this.getWidth = this.getWidth.bind(this);
        this.determineDirection = this.determineDirection.bind(this);
        this.filterToWallTiles = this.filterToWallTiles.bind(this);
    }
    placeExits(){
        const wallTiles = this.filterToWallTiles();
        
        for(let i = 0; i < this.numExits; i++){
            const coinFlip = dice.roll(`1d2`).result;
            const wallIndex = dice.roll(`1d${wallTiles.length}`).result - 1;
            if(wallTiles.length === 0){
                return;
            }
            switch(coinFlip){
                case 1:
                    const doorTile = wallTiles.splice(wallIndex, 1)[0];
                    doorTile.updateType('door');
                    break;
                case 2:
                    const passageTile = wallTiles.splice(wallIndex, 1)[0];
                    passageTile.updateType('passage');
                    break;
            }
        }
    }
    filterToWallTiles(){
        let maxX = 0;
        let minX = this.map.length;
        let maxY = 0;
        let minY = this.map.length;
        this.chamberTiles.forEach(tile=>{
            if(maxX < tile.x){
                maxX = tile.x;
            }
            if(minX > tile.x){
                minX = tile.x;
            }
            if(maxY < tile.y){
                maxY = tile.y;
            }
            if(minY > tile.y){
                minY = tile.y;
            }
        });
        const filteredList = this.chamberTiles.filter(tile=>{
            return tile.type !== 'C' ? false : tile.x === maxX ? true : tile.x === minX ? true : tile.y === maxY ? true : tile.y === minY ? true : false;
        })
        return filteredList;
    }
    getWidth(){
        return this.width;
    }
    getHeight(){
        return this.height;
    }
    determineDirection(axisToCheck, x = this.x, y = this.y){
        if(axisToCheck === 'x'){
            if(x - 1 >= 0 && this.map[x - 1][y].type === 'u'){
                return 'n';
            }
            if(x + 1 <= this.map.length - 1 && this.map[x + 1][y].type === 'u'){
                return 's';
            }
        }
        if(axisToCheck === 'y'){
            if(y - 1 >= 0 && this.map[x][y - 1].type === 'u'){
                return 'w';
            }
            if(y + 1 <= this.map.length - 1 && this.map[x][y + 1].type === 'u'){
                return 'e';
            }
        }
        return null;
    }
    tileShortLayer(tile, numTilesToLayShort, shortDirection){
        if(numTilesToLayShort === 0 || tile.getNeighbors()[shortDirection] === null){
            return;
        }
        
        this.chamberTiles.push(tile);
        
        tile.updateType('C');
        
        if(tile.getNeighbors()[shortDirection].getTileInfo().type === "u" || tile.getTileInfo().type === "P"){
            this.tileShortLayer(tile.getNeighbors()[shortDirection], numTilesToLayShort - 1, shortDirection);
        }
    }
    tileLayer(tile, numTilesToLayLong, longDirection, numTilesToLayShort, shortDirection){
        // if(longDirection !== null && shortDirection !== null){
        //     return;
        // }
        if(numTilesToLayLong === 0 || tile.getNeighbors()[longDirection] === null){
            this.cardnialDirection = longDirection;
            return;
        }
        if(tile.getTileInfo().type === "u" || tile.getTileInfo().type === "chamber" || tile.getTileInfo().type === "P"){
            this.tileShortLayer(tile, numTilesToLayShort, shortDirection);
        }

        if(tile.getNeighbors()[longDirection].getTileInfo().type === "u" || tile.getTileInfo().type === "P"){
            this.tileLayer(tile.getNeighbors()[longDirection], numTilesToLayLong - 1, longDirection, numTilesToLayShort, shortDirection);
        }

    }
}


module.exports = Chamber;