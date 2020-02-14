const dice = require('./dice');
const Door = require('./doorsClass');
const Chamber = require('./chamberClass');
const Passage = require('./passagesClass');

class Dungeon{
    constructor(mapWidth, mapHeight){
        this.piecesOfDungeon = [];
        this.numDoors = 0;
        this.numChambers = 0;
        this.numPassages = 0;
        this.numStairs = 0;
        this.unusedSpace = 0;
        this.door = 2;
        this.chamber = 1;
        this.passage = 3;
        this.exit = 4;
        this.stairs = 5;
        this.mapArea = mapHeight * mapWidth;
        this.map = [];
        for(let i = 0; i < mapWidth; i++){
            this.map[i]=[];
            for(let j = 0; j < mapHeight; i++){
                this.map[i][j] = unusedSpace;
            }
        }
        
        this.makeADoor = this.makeADoor.bind(this);
        this.makeAPassage = this.makeAPassage.bind(this);
        this.makeAChamber = this.makeAChamber.bind(this);
        this.storePieceOfDungeon = this.storePieceOfDungeon.bind(this);
        this.getCurrentMap = this.getCurrentMap.bind(this);
        this.updateMap = this.updateMap.bind(this);
        this.translatedMap = this.translatedMap.bind(this);
    }
    makeADoor(){
        const door = new Door();
        this.numDoors+=1;
        return door;
    }
    makeAChamber(){
        const chamber = new Chamber();
        this.numChambers+=1;
        return chamber;
    }
    makeAPassage(origin){
        const passage = new Passage(origin);
        this.numPassages+=1;
        return passage;
    }
    storePieceOfDungeon(piece){
        this.piecesOfDungeon.push(piece);
    }
    getCurrentMap(){
        return this.map;
    }
    updateMap(modifiedMap){
        this.map = modifiedMap;
    }
    translatedMap(){
        const translatedMap = [];
        for(let i = 0; i < this.map.length; i++){
            translatedMap[i] = [];
            for(let j = 0; j < this.map[i].length; j++){
                switch(this.map[i][j]){
                    case this.unusedSpace:
                        translatedMap[i][j] = "unusedSpace";
                        break;
                    case this.chamber:
                        translatedMap[i][j] = "chamber";
                        break;
                    case this.door:
                        translatedMap[i][j] = "door";
                        break;
                    case this.passage:
                        translatedMap[i][j] = "passage";
                        break;
                    case this.stairs:
                        translatedMap[i][j] = "stairs";
                        break;
                    case this.exit:
                        translatedMap[i][j] = "exit";
                        break;
                }
            }
        }
        return translatedMap;
    }
}