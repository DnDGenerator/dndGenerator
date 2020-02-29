const StartingLocation = require('./dndStartingLocation');
const Door = require('./dndDoor');
const Passage = require('./dndPassage');
const TileClass = require('./tile');
const Chamber = require('./dndChamber');




class DungeonMap{
    constructor(width, height){
        this.x = width/5;
        this.y = height/5;
        this.twoDMap = new Array(this.x);
        this.numDoors = 0;
        this.numChambers = 0;
        this.numPassages = 0;
        this.numStairs = 0;
        this.mappedCoords = {};
        this.startingObj = null;
        this.piecesOfDungeon = {};
        this.tiles = [];
        for(let x = 0; x < this.x; x++){
            this.twoDMap[x] = new Array(this.y);
        };
        for(let x = 0; x < this.x; x++){
            for(let y = 0; y < this.y; y++){
                const Tile = new TileClass("u", x, y);
                this.twoDMap[x][y] = Tile;
                this.tiles.push(Tile);
            }
        }
        this.twoDMap = this.twoDMap.map((yArray, x)=>{
            return yArray.map((tile, y)=>{
                const neighbors = {
                    n:null,
                    e:null,
                    s:null,
                    w:null
                }
                if(y - 1 >= 0){
                    neighbors.w = this.twoDMap[x][y-1];
                }
                if(y + 1 < yArray.length - 1){
                    neighbors.e = this.twoDMap[x][y+1];
                }
                if(x - 1 >= 0){
                    neighbors.n = this.twoDMap[x-1][y];
                }
                if(x + 1 < this.twoDMap.length - 1){
                    neighbors.s = this.twoDMap[x+1][y];
                }
                return tile.setNeightbors(neighbors);
            })
        })


        this.getMap = this.getMap.bind(this);
        this.getMaxX = this.getMaxX.bind(this);
        this.getMaxY = this.getMaxY.bind(this);
        this.setStartingArea = this.setStartingArea.bind(this);
        this.upDateMap = this.upDateMap.bind(this);
        this.placeDoors = this.placeDoors.bind(this);
        this.placePassages = this.placePassages.bind(this);
        this.placeChamber = this.placeChamber.bind(this);
        this.getNumPieces = this.getNumPieces.bind(this);
    }

    getNumPieces(){
        return {numChambers:this.numChambers + 1, numDoors:this.numDoors, numPassages:this.numPassages}
    }
    getMap(){
        return this.twoDMap;
    }
    getMaxX(){
        return this.x;
    }
    getMaxY(){
        return this.y
    }
    setStartingArea(){
        const InitStart = new StartingLocation(this.getMap(), this.getMaxX(), this.getMaxY());
        const newMap = InitStart.getMapWithStartingLocation()
        this.twoDMap = newMap;
        this.upDateMap()
    }
    placePassages(x, y){
        const passage = new Passage(this.getMap(), x , y);
        const long = passage.getDistance();
        const short = passage.getWidth();
        const longDirection = passage.determineDirection('x') || passage.determineDirection('y');
        const shortDirection = passage.determineDirection('y') || passage.determineDirection('x');
        if(longDirection !== null && shortDirection !== null){
            passage.tileLayer(this.twoDMap[x][y], long, longDirection, short, shortDirection);
            passage.placeSidePassagesAndDoors();
        this.twoDMap[x][y].updateType('P');
        }
        passage.checkForStairsOrChambers();
    }
    placeChamber(x,y){
        const chamber = new Chamber(this.getMap(), x, y);
        const width = chamber.getWidth();
        const height = chamber.getHeight();
        const widthDirection = chamber.determineDirection('x') || chamber.determineDirection('y');
        const heightDirection = chamber.determineDirection('y') || chamber.determineDirection('x');
        if(widthDirection !== null && heightDirection !== null){
            chamber.tileLayer(this.twoDMap[x][y], width, widthDirection, height, heightDirection);
            chamber.placeExits();
        }
        this.twoDMap[x][y].updateType('C');

    }
    placeDoors(x, y){
        const door = new Door(this.getMap(),x,y);
        door.runDoorUpdates();
    }
    upDateMap(){
        this.twoDMap = this.twoDMap.map((yArray, x)=>{
            return yArray.map((tile, y)=>{
                if(tile.getTileInfo().type === 'chamber'){
                    this.placeChamber(x,y);
                    this.numChambers += 1;
                }
                else if(tile.getTileInfo().type === 'door'){
                    this.placeDoors(x,y);
                    this.numDoors += 1;
                }
                else if(tile.getTileInfo().type === 'passage'){
                    this.placePassages(x, y);
                    this.numPassages += 1;
                } 
                return tile;
            })
        });
    }
    
}

module.exports = DungeonMap;