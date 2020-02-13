const dice = require('./dice');
const Door = require('./doorsClass');
const Chamber = require('./chamberClass');
const Passage = require('./passagesClass');

class Dungeon{
    constructor(mapWidth, mapHeight){
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
    }
}