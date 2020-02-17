const dice = require('./dice');
const Door = require('./doorsClass');
const Chamber = require('./chamberClass');
const Passage = require('./passagesClass');


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

class Dungeon{
    constructor(mapWidth, mapHeight){
        this.lastX = 0;
        this.lastY = 0;
        this.piecesOfDungeon = [];
        this.startingCord = {x:0,y:0,farX:0,topY:0};
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
        this.mapHeight = mapHeight;
        this.mapWidth = mapWidth;
        this.map = [];
        for(let i = 0; i < mapWidth; i++){
            this.map[i]=[];
            for(let j = 0; j < mapHeight; i++){
                this.map[i][j] = unusedSpace;
            }
        }
        this.mappedCords = {};
        this.startingArea = {
            shape:"",
            width:0,
            height:0,
            exitLocations:[],
            exitType:[],
            exits:[]
        };
        const startingRoll = dice.roll(`1d10`).result;

        switch(startingRoll){
            case 1:
                this.startingArea.shape = "square";
                this.startingArea.width = 20;
                this.startingArea.height = 20;
                this.numPassages += 4;
                this.startingArea.exitLocations = ["l","opp","r","same"];
                this.startingArea.exitType = ["passage","passage","passage","passage"];
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
                this.startingArea.shape = "square";
                this.startingArea.width = 40;
                this.startingArea.height = 40;
                this.numDoors += 3;
                this.startingArea.exitLocations = ["l","r","opp"];
                this.startingArea.exitType = ["door","door","door"];
                break;
            case 4:
                this.startingArea.shape = "rectangle";
                this.startingArea.width = 80;
                this.startingArea.height = 20;
                this.numPassages += 2;
                this.numDoors += 2;
                this.startingArea.exitLocations = ["l","opp","r","same"];
                this.startingArea.exitType = ["passage","door","passage", "door"];
                break;
            case 5:
                this.startingArea.shape = "rectangle";
                this.startingArea.width = 20;
                this.startingArea.height = 40;
                this.numPassages += 4;
                this.startingArea.exitLocations = ["l","opp","r","same"];
                this.startingArea.exitType = ["passage","passage","passage","passage"];
                break;
            case 6:
                //need to figure out how to think with circles
            case 7:
            case 8:
                this.startingArea.shape = "square";
                this.startingArea.width = 20;
                this.startingArea.height = 20;
                this.numPassages +=1;
                this.numDoors += 3;
                this.startingArea.exitLocations = ["l","opp","r","same"];
                this.startingArea.exitType = ["door", "door", "passage", "door"];
                break;
            case 9:
            case 10:
                this.startingArea.shape = "passage";
                this.numPassages += 1;
                break;
        }
        const startingX = dice.roll(`1d${this.mapWidth}`).result;
        const startingY = dice.roll(`1d${this.mapHeight}`).result;
        if(startingX < this.startingArea.width){
            this.startingCord.x = startingX + this.startingArea.width;
        }else if(startingX + this.startingArea.width > this.mapWidth){
            this.startingCord.x = this.mapWidth - this.startingArea.width;
        }else{
            this.startingCord.x = startingX;
        }
        if(startingY < this.startingArea.height){
            this.startingCord.y = startingX + this.startingArea.height;
        }else if(startingY + this.startingArea.height > this.mapHeight){
            this.startingCord.y = this.mapHeight - this.startingArea.height;
        }else{
            this.startingCord.y = startingY;
        }
        
        this.startingCord.farX = this.startingCord.x + this.startingArea.width;
        this.startingCord.topY = this.startingCord.y + this.startingArea.height;
        for(let i = this.startingCord.x; i < this.startingCord.farX; i++){
            for(let j = this.startingCord.y; i < this.startingCord.topY; j++){
                this.map[i][j]= this.startingSpace;
            }
        }
        for(let i = 0; i < this.startingArea.exitLocations.length; i++){
            const exitCord = {
                x:0,y:0
            }
            const decsion = this.startingArea.exitLocations[i];
            switch(decsion){
                case "opp":
                    exitCord.x = getRandomInt(this.startingCord.x, this.startingCord.farX),
                    exitCord.y = this.startingCord.y;
                    break;
                case "same":
                    exitCord.x = getRandomInt(this.startingCord.x, this.startingCord.farX),
                    exitCord.y = this.startingCord.topY;
                    break;
                case "l":
                    exitCord.x = this.startingCord.x;
                    exitCord.y = getRandomInt(this.startingCord.y, this.startingCord.topY);
                    break;
                default:
                    exitCord.x = this.startingCord.farX;
                    exitCord.y = getRandomInt(this.startingCord.y, this.startingCord.topY);
                    break;
            }
            this.map[exitCord.x][exitCord.y] = this.startingArea.exitType[i];
            switch(this.startingArea.exitType[i]){
                case "door":
                    this.mappedCords[exitCord.x + "And" + exitCord.y] = this.makeADoor();
                    this.doorWasPlaced();
                    break;
                case "passage":
                    this.mappedCords[exitCord.x + "And" + exitCord.y] = this.makeAPassage(this.startingArea.shape);
                    this.passageWasPlaced();
                    break;
            }
            this.startingArea.exits.push(exitCord);
        }
        this.lastXY(this.startingCord.x, this.startingCord.y);


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
        this.updateChamberCount = this.updateChamberCount.bind(this);
        this.updateDoorCount = this.updateDoorCount.bind(this);
        this.updatePassageCount = this.updatePassageCount.bind(this);
        this.updateStairsCount = this.updateStairsCount.bind(this);
        this.lastXY = this.lastXY.bind(this);
    }

    lastXY(x,y){
        this.lastX = x;
        this.lastY = y;
    }
    updateChamberCount(amount){
        this.numChambers += amount;
    }
    updateDoorCount(amount){
        this.numDoors += amount;
    }
    updatePassageCount(amount){
        this.numPassages += amount;
    }
    updateStairsCount(amount){
        this.numStairs += amount;
    }
    makeADoor(){
        const door = new Door();
        switch(door.beyond()){
            case "passage":
                this.numPassages(1);
                break;
            case "chamber":
                this.numChambers(1);
        }
        return door;
    }
    makeAChamber(){
        const chamber = new Chamber();
        this.updateDoorCount(chamber.numDoors);
        this.updatePassageCount(chamber.numPassages);
        return chamber;
    }
    makeAPassage(origin){
        const passage = new Passage(origin);
        this.updateDoorCount(passage.numDoors);
        this.updatePassageCount(passage.numSidePassages);
        if(passage.toChamber()){
            this.updateChamberCount(1);
        }
        if(passage.toStairs()){
            this.updateStairsCount(1);
        }
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