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
        this.startingSpace = 6;
        this.mapArea = mapHeight * mapWidth;
        this.map = [];
        for(let i = 0; i < mapWidth; i++){
            this.map[i]=[];
            for(let j = 0; j < mapHeight; i++){
                this.map[i][j] = unusedSpace;
            }
        }
        this.startingArea = {};
        this.startingArea.shape = "";
        this.startingArea.width = 0;
        this.startingArea.height = 0;
        this.startingArea.exitLocations = [];
        this.startingArea.exitType = [];
        const startingRoll = dice.roll(`1d10`).result;

        switch(startingRoll){
            case 1:
                this.startingArea.shape = "square";
                this.startingArea.width = 20;
                this.startingArea.height = 20;
                this.numPassages += 4;
                this.startingArea.exitLocations = ["each"];
                this.startingArea.exitType = ["passage"];
                break;
            case 2:
                this.startingArea.shape = "square";
                this.startingArea.width = 20;
                this.startingArea.height = 20;
                this.numPassages += 1;
                this.numDoors += 2;
                this.startingArea.exitLocations = ["l", "r", "opp"];
                this.startingArea.exitType = ["door", "passage", "door"];
                break;
            case 3:
                break;
            case 4:
                break;
            case 5:
                break;
            case 6:
                break;
            case 7:
                break;
            case 8:
                break;
            case 9:
                break;
            case 10:
                break;
        }

        this.makeADoor = this.makeADoor.bind(this);
        this.makeAPassage = this.makeAPassage.bind(this);
        this.makeAChamber = this.makeAChamber.bind(this);
        this.storePieceOfDungeon = this.storePieceOfDungeon.bind(this);
        this.getCurrentMap = this.getCurrentMap.bind(this);
        this.updateMap = this.updateMap.bind(this);
        this.translatedMap = this.translatedMap.bind(this);
        this.getCurrentNumDoorsLeftToPlace = this.getCurrentNumDoorsLeftToPlace.bind(this);
        this.doorWasPlaced = this.doorWasPlaced.bind(this);
        this.getCurrentNumPassagesLeftToPlace = this.getCurrentNumPassagesLeftToPlace.bind(this);
        this.passageWasPlaced = this.passageWasPlaced.bind(this);
        this.getStartingInfo = this.getStartingInfo.bind(this);
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
                    case this.startingSpace:
                        translatedMap[i][j] = "startingSpace"
                        break;
                }
            }
        }
        return translatedMap;
    }
    getCurrentNumDoorsLeftToPlace(){
        return this.numDoors;
    }
    doorWasPlaced(){
        if(this.numDoors < 0){
            this.numDoors === 0;
        }else{
            this.numDoors -=1;
        }
    }
    getCurrentNumPassagesLeftToPlace(){
        return this.numPassages;
    }
    passageWasPlaced(){
        if(this.numPassages < 0){
            this.numPassages === 0;
        }else{
            this.numPassages -=1;
        }
    }
    getStartingInfo(){
        return this.startingArea;
    }
}

module.exports = Dungeon;